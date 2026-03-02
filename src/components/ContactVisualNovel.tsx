import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./ContactVisualNovel.css";

type ChoiceId = "project" | "question" | "chat";
type FollowUpId =
  | "project_scope"
  | "project_timeline"
  | "question_stack"
  | "question_process"
  | "chat_career"
  | "chat_random";

type ContactVisualNovelProps = {
  email: string;
};

const CHOICES: ChoiceId[] = ["project", "question", "chat"];
const FOLLOW_UPS: Record<ChoiceId, FollowUpId[]> = {
  project: ["project_scope", "project_timeline"],
  question: ["question_stack", "question_process"],
  chat: ["chat_career", "chat_random"],
};

const ContactVisualNovel: React.FC<ContactVisualNovelProps> = ({ email }) => {
  const TYPE_SPEED_MS = 36;
  const TYPE_START_DELAY_MS = 140;
  const { t } = useTranslation();
  const [activeChoice, setActiveChoice] = useState<ChoiceId | null>(null);
  const [activeFollowUp, setActiveFollowUp] = useState<FollowUpId | null>(null);
  const [copied, setCopied] = useState(false);
  const [visibleLine, setVisibleLine] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const choicePanelRef = useRef<HTMLDivElement | null>(null);
  const followUpsRef = useRef<HTMLDivElement | null>(null);

  const expression = useMemo(() => {
    if (activeFollowUp) return "(* excited and engaged *)";
    if (activeChoice === "project") return "(* bright smile *)";
    if (activeChoice === "question") return "(* focused look *)";
    if (activeChoice === "chat") return "(* cheerful wave *)";
    return "(* waiting for your choice *)";
  }, [activeChoice, activeFollowUp]);

  const fullLine = useMemo(() => {
    if (activeFollowUp) return t(`contact.vn.followUps.responses.${activeFollowUp}`);
    if (activeChoice) return t(`contact.vn.responses.${activeChoice}`);
    return t("contact.vn.prompt");
  }, [activeChoice, activeFollowUp, t]);

  useEffect(() => {
    if (choicePanelRef.current) {
      choicePanelRef.current.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [fullLine]);

  useEffect(() => {
    if (!isTyping && activeChoice && followUpsRef.current) {
      followUpsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isTyping, activeChoice, activeFollowUp]);

  useEffect(() => {
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
      typingTimerRef.current = null;
    }

    const chars = Array.from(fullLine);
    if (chars.length === 0) {
      setVisibleLine("");
      setIsTyping(false);
      return;
    }

    setVisibleLine("");
    setIsTyping(true);
    let index = 0;
    let cancelled = false;

    const step = () => {
      if (cancelled) return;
      index += 1;
      setVisibleLine(chars.slice(0, index).join(""));

      if (index >= chars.length) {
        setIsTyping(false);
        typingTimerRef.current = null;
        return;
      }
      typingTimerRef.current = setTimeout(step, TYPE_SPEED_MS);
    };

    typingTimerRef.current = setTimeout(step, TYPE_START_DELAY_MS);

    return () => {
      cancelled = true;
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    };
  }, [fullLine, TYPE_SPEED_MS, TYPE_START_DELAY_MS]);

  const handleChoiceClick = (choice: ChoiceId) => {
    setActiveChoice(choice);
    setActiveFollowUp(null);
  };

  const resetConversation = () => {
    setActiveChoice(null);
    setActiveFollowUp(null);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section className="vn-card" aria-label={t("contact.vn.ariaLabel")}>
      <div className="vn-scene">
        <div className="vn-character-slot" aria-hidden="true">
          <div className="vn-character-frame">
            <div className="vn-character-silhouette" />
          </div>
          <span>{t("contact.vn.characterSlot")}</span>
        </div>
      </div>

      <div className="vn-ui">
        <div className="vn-dialogue-box">
          <p className="vn-expression">{expression}</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={`${activeChoice ?? "default"}-${activeFollowUp ?? "none"}`}
              className="vn-line"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {visibleLine}
              {isTyping && <span className="vn-cursor" aria-hidden="true">|</span>}
            </motion.p>
          </AnimatePresence>
          {isTyping && (
            <button
              type="button"
              className="vn-skip"
              onClick={() => {
                if (typingTimerRef.current) {
                  clearTimeout(typingTimerRef.current);
                  typingTimerRef.current = null;
                }
                setVisibleLine(fullLine);
                setIsTyping(false);
              }}
            >
              {t("contact.vn.skipTyping")}
            </button>
          )}
        </div>

        <div
          ref={choicePanelRef}
          className="vn-choice-panel"
          aria-label={t("contact.vn.choicePanelAria")}
        >
          {!isTyping && (
            <>
              <div className="vn-choice-grid">
                {CHOICES.map((choice) => (
                  <button
                    key={choice}
                    type="button"
                    className="vn-choice-box"
                    onClick={() => handleChoiceClick(choice)}
                  >
                    {t(`contact.vn.choices.${choice}`)}
                  </button>
                ))}
              </div>

              {activeChoice && (
                <div ref={followUpsRef} className="vn-followups">
                  <p className="vn-followup-title">{t("contact.vn.followUps.title")}</p>
                  <div className="vn-choice-grid">
                    {FOLLOW_UPS[activeChoice].map((followUp) => (
                      <button
                        key={followUp}
                        type="button"
                        className="vn-choice-box"
                        onClick={() => setActiveFollowUp(followUp)}
                      >
                        {t(`contact.vn.followUps.choices.${followUp}`)}
                      </button>
                    ))}
                    <button
                      type="button"
                      className="vn-choice-box is-reset"
                      onClick={resetConversation}
                    >
                      {t("contact.vn.talkElse")}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {activeChoice === "project" && (
          <div className="vn-actions">
            <button type="button" className="vn-action" onClick={copyEmail}>
              {copied ? t("contact.vn.copied") : t("contact.vn.copyEmail")}
            </button>
            <a className="vn-action is-secondary" href={`mailto:${email}`}>
              {t("contact.vn.sendEmail")}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactVisualNovel;
