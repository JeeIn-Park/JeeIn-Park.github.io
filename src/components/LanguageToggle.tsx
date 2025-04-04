import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.css';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const fabRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const [opacity, setOpacity] = useState(1);
  const positionRef = useRef({ x: window.innerWidth - 80, y: window.innerHeight - 120 });
  const [snapSide, setSnapSide] = useState<'left' | 'right'>('right');


  // NEW: Refs to track drag start and whether drag occurred
  const dragStartPos = useRef({ x: 0, y: 0 });
  const wasDragged = useRef(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
  ];

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setLastInteractionTime(Date.now());
    setOpacity(1);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setMenuOpen(false);
    setLastInteractionTime(Date.now());
  };

  // Inactivity fade
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastInteractionTime > 5000 && !dragging && !menuOpen) {
        setOpacity(0.5);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [lastInteractionTime, dragging, menuOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    wasDragged.current = false;
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    setLastInteractionTime(Date.now());
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging || !fabRef.current) return;

    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;

    // NEW: if moved more than 3px in any direction, count as drag
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      wasDragged.current = true;
    }

    const newX = e.clientX - 28;
    const newY = e.clientY - 28;

    positionRef.current = { x: newX, y: newY };
    const fab = fabRef.current;
    fab.style.left = `${newX}px`;
    fab.style.top = `${newY}px`;
    setOpacity(1);
    setLastInteractionTime(Date.now());
  };

  const handleMouseUp = () => {
    if (!dragging || !fabRef.current) return;
    setDragging(false);

    const middle = window.innerWidth / 2;
    const isLeft = positionRef.current.x < middle;
    const targetX = isLeft ? 16 : window.innerWidth - 72;

    positionRef.current.x = targetX;
    fabRef.current.style.left = `${targetX}px`;
    setSnapSide(isLeft ? 'left' : 'right');
    positionRef.current.x = targetX;
    fabRef.current.style.left = `${targetX}px`;
  };

  // Attach global mousemove and mouseup listeners
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  });

  return (
    <div>
      {menuOpen && (
        <div
            className={`language-box ${dragging ? 'hidden-box' : 'visible-box'}`}
            style={{
                left:
                snapSide === 'left'
                    ? positionRef.current.x - 5
                    : positionRef.current.x - 50,
                top: positionRef.current.y - 95,
                position: 'fixed',
                pointerEvents: dragging ? 'none' : 'auto',
            }}
        >
    {menuOpen &&
        languages.map(lang => (
        <div
            key={lang.code}
            className="language-item"
            onClick={() => changeLanguage(lang.code)}
        >
            {lang.label}
        </div>
        ))}
    </div>
        )}
      <button
        ref={fabRef}
        className={`fab-button ${dragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onClick={() => {
          if (!wasDragged.current) toggleMenu();
        }}
        style={{
          left: positionRef.current.x,
          top: positionRef.current.y,
          opacity,
          position: 'fixed',
        }}
        aria-label="Language Toggle"
      >
        🌐
      </button>
    </div>
  );
};

export default LanguageToggle;
