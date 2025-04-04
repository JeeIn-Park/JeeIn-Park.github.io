import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Story.css";

const SectionBlock = ({ id, titleKey, paragraphsKey }: { id: string; titleKey: string; paragraphsKey: string }) => {
    const { t } = useTranslation();
    const paragraphs = t(paragraphsKey, { returnObjects: true }) as any as string[];
  
  return (
    <section className="story-section" id={id}>
      <motion.h2
        className="story-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t(titleKey)}
      </motion.h2>

      <motion.div
        className="story-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </motion.div>
    </section>
  );
};

const StorySection: React.FC = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
  
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const spring = (a: number, b: number) => useSpring(useTransform(scrollYProgress, [a, b], [0, 1]), { stiffness: 100 });
  
    const topOpacity = spring(0.2, 0.3);
    const leftOpacity = spring(0.28, 0.38);
    const rightOpacity = spring(0.36, 0.46);
    const arrowOpacity = spring(0.43, 0.5);
    const centerOpacity = spring(0.52, 0.6);
  
    const navLabels: string[] = t("story.nav", { returnObjects: true }) as any as string[];
  
    return (
      <section className="story-wrapper">
        <motion.div
          className="scroll-down-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p>{t("story.cue")}</p>
          <div className="story-nav">
            <ul className="nav-links">
              <li><a href="#creativity">{navLabels[0]}</a></li>
              <li><a href="#sensitivity">{navLabels[1]}</a></li>
              <li><a href="#tenacity-curiosity">{navLabels[2]}</a></li>
              <li><a href="#proactive-problem-solving">{navLabels[3]}</a></li>
            </ul>
          </div>
          <div className="chevrons">
            <span className="chevron">⌄</span>
            <span className="chevron">⌄</span>
            <span className="chevron">⌄</span>
          </div>
        </motion.div>
  
        <SectionBlock id="creativity" titleKey="story.creativity.title" paragraphsKey="story.creativity.paragraphs" />
        <SectionBlock id="sensitivity" titleKey="story.sensitivity.title" paragraphsKey="story.sensitivity.paragraphs" />
        <SectionBlock id="tenacity-curiosity" titleKey="story.passion.title" paragraphsKey="story.passion.paragraphs" />
  
        {/* Triangle Scroll Section */}
        <section className="triangle-scroll-section" ref={ref} id="proactive-problem-solving">
          <div className="sticky-wrapper">
            <motion.div className="triangle-wrapper">
              <motion.div className="triangle-corner top" style={{ opacity: topOpacity }}>
                <a href="#creativity">{t("story.creativity.title")}</a>
              </motion.div>
              <motion.div className="triangle-corner left" style={{ opacity: leftOpacity }}>
                <a href="#sensitivity">{t("story.sensitivity.title")}</a>
              </motion.div>
              <motion.div className="triangle-corner right" style={{ opacity: rightOpacity }}>
                <a href="#tenacity-curiosity">{t("story.passion.title")}</a>
              </motion.div>
  
              <motion.div className="triangle-arrow top-arrow" style={{ opacity: arrowOpacity }}>⬇</motion.div>
              <motion.div className="triangle-arrow left-arrow" style={{ opacity: arrowOpacity }}>➡</motion.div>
              <motion.div className="triangle-arrow right-arrow" style={{ opacity: arrowOpacity }}>⬅</motion.div>
  
              <motion.div className="triangle-center" style={{ opacity: centerOpacity }}>
                <a href="#proactive-problem-solving-text">Proactive<br />Problem-Solving</a>
              </motion.div>
            </motion.div>
          </div>
        </section>
  
        <SectionBlock id="proactive-problem-solving-text" titleKey="story.proactive.title" paragraphsKey="story.proactive.paragraphs" />
      </section>
    );
  };  

export default StorySection;
