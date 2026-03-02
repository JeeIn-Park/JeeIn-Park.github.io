import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./AboutQuest.css";

type TraitKey = "creativity" | "sensitivity" | "persistence";
type ItemKey = "rustyKey" | "signalLens" | "coreChip";
type GateId = "northGate" | "eastGate";
type NpcId = "tinkerer" | "archivist";

type Choice = {
  id: string;
  label: string;
  response: string;
  impact: Partial<Record<TraitKey, number>>;
};

type Scene = {
  id: string;
  title: string;
  description: string;
  choices: Choice[];
};

type Point = { x: number; y: number };

type Hotspot = Point & { scene: Scene };

type Gate = Point & {
  id: GateId;
  requires: ItemKey[];
};

type Npc = Point & {
  id: NpcId;
};

type NpcModal = {
  name: string;
  message: string;
};

type QuestCopy = {
  title: string;
  subtitle: string;
  start: string;
  restart: string;
  progressLabel: string;
  scoreLabel: string;
  completedLabel: string;
  objective: string;
  controls: string;
  interact: string;
  backToMap: string;
  closeNpc: string;
  sceneReady: string;
  inventoryLabel: string;
  emptyInventory: string;
  statusLabel: string;
  noEvent: string;
  blockedWall: string;
  gateLockedPrefix: string;
  gateUnlockedPrefix: string;
  itemReceivedPrefix: string;
  mapToggle: string;
  mapClose: string;
  mapHint: string;
  traits: Record<TraitKey, string>;
  scenes: Scene[];
  endings: Record<TraitKey, string>;
  items: Record<ItemKey, string>;
  gates: Record<GateId, string>;
  npcs: {
    tinkererName: string;
    tinkererFirst: string;
    tinkererRepeat: string;
    archivistName: string;
    archivistNeedLens: string;
    archivistGiveChip: string;
    archivistRepeat: string;
  };
};

const TRAIT_KEYS: TraitKey[] = ["creativity", "sensitivity", "persistence"];
const MAP_WIDTH = 14;
const MAP_HEIGHT = 8;
const START_POS: Point = { x: 1, y: 6 };

const WALLS: Point[] = [
  { x: 4, y: 0 },
  { x: 4, y: 1 },
  { x: 4, y: 2 },
  { x: 4, y: 4 },
  { x: 4, y: 5 },
  { x: 4, y: 6 },
  { x: 4, y: 7 },
  { x: 8, y: 0 },
  { x: 8, y: 1 },
  { x: 8, y: 2 },
  { x: 8, y: 3 },
  { x: 8, y: 5 },
  { x: 8, y: 6 },
  { x: 8, y: 7 }
];

const SPOTS: Point[] = [
  { x: 1, y: 1 },
  { x: 6, y: 1 },
  { x: 11, y: 1 }
];

const GATES: Gate[] = [
  { id: "northGate", x: 4, y: 3, requires: ["rustyKey"] },
  { id: "eastGate", x: 8, y: 4, requires: ["signalLens", "coreChip"] }
];

const NPCS: Npc[] = [
  { id: "tinkerer", x: 2, y: 6 },
  { id: "archivist", x: 6, y: 6 }
];

const SCENE_REWARDS: Partial<Record<string, ItemKey>> = {
  "scene-friction": "signalLens"
};
const MOVE_INTERVAL_MS = 120;

const toKey = (point: Point): string => `${point.x},${point.y}`;
const fromKey = (key: string): Point => {
  const [x, y] = key.split(",").map(Number);
  return { x, y };
};
const isAdjacentOrSame = (a: Point, b: Point): boolean => {
  const distance = Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  return distance <= 1;
};
const getVisionCells = (point: Point): string[] => {
  const candidates: Point[] = [
    point,
    { x: point.x + 1, y: point.y },
    { x: point.x - 1, y: point.y },
    { x: point.x, y: point.y + 1 },
    { x: point.x, y: point.y - 1 }
  ];

  return candidates
    .filter((cell) => cell.x >= 0 && cell.x < MAP_WIDTH && cell.y >= 0 && cell.y < MAP_HEIGHT)
    .map(toKey);
};

const AboutQuest: React.FC = () => {
  const { t } = useTranslation();
  const quest = t("about.quest", { returnObjects: true }) as unknown as QuestCopy;

  const [started, setStarted] = useState(false);
  const [player, setPlayer] = useState<Point>(START_POS);
  const [scores, setScores] = useState<Record<TraitKey, number>>({
    creativity: 0,
    sensitivity: 0,
    persistence: 0
  });
  const [logs, setLogs] = useState<string[]>([]);
  const [completedScenes, setCompletedScenes] = useState<string[]>([]);
  const [inventory, setInventory] = useState<ItemKey[]>([]);
  const [unlockedGates, setUnlockedGates] = useState<GateId[]>([]);
  const [activeSceneId, setActiveSceneId] = useState<string | null>(null);
  const [activeNpcModal, setActiveNpcModal] = useState<NpcModal | null>(null);
  const [status, setStatus] = useState<string>("");
  const [mapExpanded, setMapExpanded] = useState(false);
  const [discoveredTiles, setDiscoveredTiles] = useState<string[]>(() => getVisionCells(START_POS));
  const pressedKeysRef = useRef<Set<string>>(new Set());

  const wallSet = useMemo(() => new Set(WALLS.map(toKey)), []);

  const hotspots = useMemo<Hotspot[]>(() => {
    return quest.scenes.map((scene, index) => {
      const spot = SPOTS[index] ?? SPOTS[SPOTS.length - 1];
      return { ...spot, scene };
    });
  }, [quest.scenes]);
  const allMapTiles = useMemo<string[]>(() => {
    const tiles: string[] = [];
    for (let y = 0; y < MAP_HEIGHT; y += 1) {
      for (let x = 0; x < MAP_WIDTH; x += 1) {
        tiles.push(toKey({ x, y }));
      }
    }
    return tiles;
  }, []);
  const discoveredSet = useMemo(() => new Set(discoveredTiles), [discoveredTiles]);

  const completed = started && completedScenes.length >= quest.scenes.length;

  const dominantTrait = useMemo(() => {
    return TRAIT_KEYS.reduce((best, key) => {
      if (scores[key] > scores[best]) return key;
      return best;
    }, "creativity" as TraitKey);
  }, [scores]);

  const activeScene = useMemo(() => {
    if (!activeSceneId) return null;
    return quest.scenes.find((scene) => scene.id === activeSceneId) ?? null;
  }, [activeSceneId, quest.scenes]);

  const progress = useMemo(() => {
    if (!started || quest.scenes.length === 0) return 0;
    if (completed) return 100;
    return Math.round((completedScenes.length / quest.scenes.length) * 100);
  }, [completed, completedScenes.length, quest.scenes.length, started]);

  const isGateLocked = useCallback(
    (gateId: GateId) => !unlockedGates.includes(gateId),
    [unlockedGates]
  );

  const resetQuest = () => {
    setStarted(false);
    setPlayer(START_POS);
    setScores({ creativity: 0, sensitivity: 0, persistence: 0 });
    setLogs([]);
    setCompletedScenes([]);
    setInventory([]);
    setUnlockedGates([]);
    setActiveSceneId(null);
    setActiveNpcModal(null);
    setStatus("");
    setMapExpanded(false);
    setDiscoveredTiles(getVisionCells(START_POS));
  };

  const startQuest = () => {
    setStarted(true);
    setPlayer(START_POS);
    setScores({ creativity: 0, sensitivity: 0, persistence: 0 });
    setLogs([]);
    setCompletedScenes([]);
    setInventory([]);
    setUnlockedGates([]);
    setActiveSceneId(null);
    setActiveNpcModal(null);
    setStatus(quest.objective);
    setMapExpanded(false);
    setDiscoveredTiles(getVisionCells(START_POS));
  };

  const tryAddItem = (item: ItemKey): boolean => {
    if (inventory.includes(item)) return false;
    setInventory((prev) => [...prev, item]);
    setStatus(`${quest.itemReceivedPrefix}: ${quest.items[item]}`);
    return true;
  };

  const handleNpcInteraction = (npc: Npc) => {
    if (npc.id === "tinkerer") {
      const gotKey = tryAddItem("rustyKey");
      setActiveNpcModal({
        name: quest.npcs.tinkererName,
        message: gotKey ? quest.npcs.tinkererFirst : quest.npcs.tinkererRepeat
      });
      return;
    }

    if (!inventory.includes("signalLens")) {
      setActiveNpcModal({
        name: quest.npcs.archivistName,
        message: quest.npcs.archivistNeedLens
      });
      return;
    }

    const gotChip = tryAddItem("coreChip");
    setActiveNpcModal({
      name: quest.npcs.archivistName,
      message: gotChip ? quest.npcs.archivistGiveChip : quest.npcs.archivistRepeat
    });
  };

  const tryUnlockGate = (gate: Gate) => {
    if (!isGateLocked(gate.id)) return;

    const missing = gate.requires.filter((item) => !inventory.includes(item));
    if (missing.length > 0) {
      const missingLabels = missing.map((item) => quest.items[item]).join(", ");
      setStatus(`${quest.gateLockedPrefix}: ${quest.gates[gate.id]} (${missingLabels})`);
      return;
    }

    setUnlockedGates((prev) => [...prev, gate.id]);
    setStatus(`${quest.gateUnlockedPrefix}: ${quest.gates[gate.id]}`);
    setDiscoveredTiles((prev) => Array.from(new Set([...prev, toKey(gate)])));
  };

  const move = useCallback(
    (dx: number, dy: number) => {
      if (!started || completed || activeSceneId || activeNpcModal || mapExpanded) return;

      setPlayer((prev) => {
        const next = { x: prev.x + dx, y: prev.y + dy };

        if (next.x < 0 || next.x >= MAP_WIDTH || next.y < 0 || next.y >= MAP_HEIGHT) {
          return prev;
        }

        if (wallSet.has(toKey(next))) {
          setStatus(quest.blockedWall);
          return prev;
        }

        const gate = GATES.find((g) => g.x === next.x && g.y === next.y && isGateLocked(g.id));
        if (gate) {
          setStatus(`${quest.gateLockedPrefix}: ${quest.gates[gate.id]}`);
          return prev;
        }

        const npcOnTile = NPCS.some((npc) => npc.x === next.x && npc.y === next.y);
        if (npcOnTile) {
          return prev;
        }

        const hotspotOnTile = hotspots.some((spot) => spot.x === next.x && spot.y === next.y);
        if (hotspotOnTile) {
          return prev;
        }

        setDiscoveredTiles((seen) => Array.from(new Set([...seen, ...getVisionCells(next)])));

        return next;
      });
    },
    [activeNpcModal, activeSceneId, completed, hotspots, isGateLocked, mapExpanded, quest.blockedWall, quest.gateLockedPrefix, quest.gates, started, wallSet]
  );

  const handleInteract = useCallback(() => {
    if (!started || completed || activeSceneId || activeNpcModal || mapExpanded) return;

    const npc = NPCS.find((entry) => isAdjacentOrSame(player, entry));
    if (npc) {
      handleNpcInteraction(npc);
      return;
    }

    const gate = GATES.find(
      (entry) => isAdjacentOrSame({ x: entry.x, y: entry.y }, player) && isGateLocked(entry.id)
    );
    if (gate && isGateLocked(gate.id)) {
      tryUnlockGate(gate);
      return;
    }

    const hotspot = hotspots.find((spot) => isAdjacentOrSame(player, spot) && !completedScenes.includes(spot.scene.id));
    if (hotspot) {
      setActiveSceneId(hotspot.scene.id);
      return;
    }

    setStatus(quest.noEvent);
  }, [activeNpcModal, activeSceneId, completed, completedScenes, hotspots, isGateLocked, mapExpanded, player.x, player.y, quest.noEvent, started]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d", "e", " ", "enter", "m"].includes(key)) {
        event.preventDefault();
      }

      if (key === "m" && !event.repeat) {
        setMapExpanded((prev) => !prev);
        return;
      }

      if (key === "arrowup" || key === "w") pressedKeysRef.current.add("up");
      if (key === "arrowdown" || key === "s") pressedKeysRef.current.add("down");
      if (key === "arrowleft" || key === "a") pressedKeysRef.current.add("left");
      if (key === "arrowright" || key === "d") pressedKeysRef.current.add("right");
      if (key === "e" || key === " " || key === "enter") handleInteract();
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "arrowup" || key === "w") pressedKeysRef.current.delete("up");
      if (key === "arrowdown" || key === "s") pressedKeysRef.current.delete("down");
      if (key === "arrowleft" || key === "a") pressedKeysRef.current.delete("left");
      if (key === "arrowright" || key === "d") pressedKeysRef.current.delete("right");
    };

    const clearKeys = () => {
      pressedKeysRef.current.clear();
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", clearKeys);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", clearKeys);
    };
  }, [handleInteract, move]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const keys = pressedKeysRef.current;
      if (keys.has("up")) move(0, -1);
      else if (keys.has("down")) move(0, 1);
      else if (keys.has("left")) move(-1, 0);
      else if (keys.has("right")) move(1, 0);
    }, MOVE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [move]);

  const handleChoice = (choice: Choice) => {
    if (!activeSceneId) return;

    setScores((prev) => ({
      creativity: prev.creativity + (choice.impact.creativity ?? 0),
      sensitivity: prev.sensitivity + (choice.impact.sensitivity ?? 0),
      persistence: prev.persistence + (choice.impact.persistence ?? 0)
    }));

    setLogs((prev) => [...prev, choice.response]);
    setCompletedScenes((prev) => (prev.includes(activeSceneId) ? prev : [...prev, activeSceneId]));

    const reward = SCENE_REWARDS[activeSceneId];
    if (reward && !inventory.includes(reward)) {
      setInventory((prev) => [...prev, reward]);
      setStatus(`${quest.itemReceivedPrefix}: ${quest.items[reward]}`);
    }

    setActiveSceneId(null);
  };

  const isSceneReady = hotspots.some((spot) => isAdjacentOrSame(player, spot) && !completedScenes.includes(spot.scene.id));
  const hiddenTiles = allMapTiles.filter((tileKey) => !discoveredSet.has(tileKey));

  const renderMap = (expanded: boolean) => (
    <div
      className={`about-quest-map ${expanded ? "expanded" : ""}`}
      style={
        {
          "--map-w": MAP_WIDTH,
          "--map-h": MAP_HEIGHT
        } as React.CSSProperties
      }
      aria-label="quest map"
    >
      {WALLS.map((wall) => (
        <span
          key={`wall-${expanded ? "big" : "small"}-${toKey(wall)}`}
          className="quest-wall"
          style={{
            left: `calc((100% / var(--map-w)) * ${wall.x})`,
            top: `calc((100% / var(--map-h)) * ${wall.y})`
          }}
        />
      ))}

      {GATES.map((gate) => {
        const locked = isGateLocked(gate.id);
        return (
          <span
            key={`gate-${expanded ? "big" : "small"}-${gate.id}`}
            className={`quest-gate ${locked ? "locked" : "open"}`}
            style={{
              left: `calc((100% / var(--map-w)) * ${gate.x})`,
              top: `calc((100% / var(--map-h)) * ${gate.y})`
            }}
            title={quest.gates[gate.id]}
          >
            <i>{locked ? "🔒" : "✓"}</i>
          </span>
        );
      })}

      {NPCS.map((npc) => (
        <span
          key={`npc-${expanded ? "big" : "small"}-${npc.id}`}
          className="quest-npc"
          style={{
            left: `calc((100% / var(--map-w)) * ${npc.x})`,
            top: `calc((100% / var(--map-h)) * ${npc.y})`
          }}
          title={npc.id === "tinkerer" ? quest.npcs.tinkererName : quest.npcs.archivistName}
        >
          <i>NPC</i>
        </span>
      ))}

      {hotspots.map((spot, index) => {
        const done = completedScenes.includes(spot.scene.id);

        return (
          <span
            key={`spot-${expanded ? "big" : "small"}-${spot.scene.id}`}
            className={`quest-hotspot ${done ? "done" : ""}`}
            style={{
              left: `calc((100% / var(--map-w)) * ${spot.x})`,
              top: `calc((100% / var(--map-h)) * ${spot.y})`
            }}
            title={spot.scene.title}
          >
            <i>{done ? "✓" : index + 1}</i>
          </span>
        );
      })}

      {hiddenTiles.map((tileKey) => {
        const cell = fromKey(tileKey);
        return (
          <span
            key={`fog-${expanded ? "big" : "small"}-${tileKey}`}
            className="quest-fog"
            style={{
              left: `calc((100% / var(--map-w)) * ${cell.x})`,
              top: `calc((100% / var(--map-h)) * ${cell.y})`
            }}
          />
        );
      })}

      <span
        className="quest-player"
        style={{
          left: `calc((100% / var(--map-w)) * ${player.x})`,
          top: `calc((100% / var(--map-h)) * ${player.y})`
        }}
        aria-label="player"
      >
        <i />
      </span>
    </div>
  );

  return (
    <section className="about-quest" aria-label={quest.title}>
      <div className="about-quest-bg" aria-hidden="true" />

      <motion.div
        className="about-quest-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <header className="about-quest-header">
          <h3>{quest.title}</h3>
          <p>{quest.subtitle}</p>
        </header>

        <div className="about-quest-progress" role="status" aria-live="polite">
          <span>{quest.progressLabel}</span>
          <div className="quest-progress-track" aria-hidden="true">
            <div className="quest-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <strong>{progress}%</strong>
        </div>

        <div className="about-quest-stats">
          <p>{quest.scoreLabel}</p>
          <ul>
            {TRAIT_KEYS.map((key) => (
              <li key={key}>
                <span>{quest.traits[key]}</span>
                <strong>{scores[key]}</strong>
              </li>
            ))}
          </ul>
        </div>

        {!started && (
          <button className="quest-action-button" type="button" onClick={startQuest}>
            {quest.start}
          </button>
        )}

        {started && !completed && (
          <>
            <div className="about-quest-brief">
              <p>{quest.objective}</p>
              <p>{quest.controls}</p>
              {isSceneReady && <strong>{quest.sceneReady}</strong>}
            </div>

            <div className="about-quest-hud-grid">
              <section className="about-quest-inventory" aria-label={quest.inventoryLabel}>
                <h4>{quest.inventoryLabel}</h4>
                {inventory.length === 0 ? (
                  <p>{quest.emptyInventory}</p>
                ) : (
                  <ul>
                    {inventory.map((item) => (
                      <li key={item}>{quest.items[item]}</li>
                    ))}
                  </ul>
                )}
              </section>

              <section className="about-quest-status" aria-label={quest.statusLabel}>
                <h4>{quest.statusLabel}</h4>
                <p>{status || quest.noEvent}</p>
              </section>
            </div>

            {renderMap(false)}

            <div className="about-quest-map-row">
              <button type="button" className="map-toggle" onClick={() => setMapExpanded((prev) => !prev)}>
                {mapExpanded ? quest.mapClose : quest.mapToggle}
              </button>
              <span className="map-hint">{quest.mapHint}</span>
            </div>

            <div className="about-quest-controls" aria-label={quest.controls}>
              <button type="button" onClick={() => move(0, -1)}>
                ↑
              </button>
              <div>
                <button type="button" onClick={() => move(-1, 0)}>
                  ←
                </button>
                <button type="button" onClick={() => move(1, 0)}>
                  →
                </button>
              </div>
              <button type="button" onClick={() => move(0, 1)}>
                ↓
              </button>
              <button type="button" className="interact" onClick={handleInteract}>
                {quest.interact}
              </button>
            </div>
          </>
        )}

        {activeNpcModal && !completed && (
          <article className="about-quest-scene npc">
            <h4>{activeNpcModal.name}</h4>
            <p>{activeNpcModal.message}</p>
            <button className="scene-close" type="button" onClick={() => setActiveNpcModal(null)}>
              {quest.closeNpc}
            </button>
          </article>
        )}

        {activeScene && !completed && (
          <article className="about-quest-scene">
            <h4>{activeScene.title}</h4>
            <p>{activeScene.description}</p>
            <div className="about-quest-choices">
              {activeScene.choices.map((choice) => (
                <button
                  key={choice.id}
                  className="quest-choice-button"
                  type="button"
                  onClick={() => handleChoice(choice)}
                >
                  {choice.label}
                </button>
              ))}
            </div>
            <button className="scene-close" type="button" onClick={() => setActiveSceneId(null)}>
              {quest.backToMap}
            </button>
          </article>
        )}

        {completed && (
          <article className="about-quest-ending">
            <h4>{quest.completedLabel}</h4>
            <p>{quest.endings[dominantTrait]}</p>
            {logs.length > 0 && (
              <ul className="about-quest-log">
                {logs.map((log, index) => (
                  <li key={`${index}-${log.slice(0, 12)}`}>{log}</li>
                ))}
              </ul>
            )}
            <button className="quest-action-button" type="button" onClick={resetQuest}>
              {quest.restart}
            </button>
          </article>
        )}
      </motion.div>

      {mapExpanded && started && !completed && (
        <div className="about-quest-map-overlay" role="dialog" aria-modal="true" aria-label={quest.mapToggle}>
          <div className="about-quest-map-overlay-inner">
            <div className="about-quest-map-overlay-top">
              <strong>{quest.mapToggle}</strong>
              <button type="button" className="map-toggle" onClick={() => setMapExpanded(false)}>
                {quest.mapClose}
              </button>
            </div>
            {renderMap(true)}
            <p className="map-hint">{quest.mapHint}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutQuest;
