import React, { useMemo, useState } from "react";
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
  const { t } = useTranslation();
  const [activeChoice, setActiveChoice] = useState<ChoiceId | null>(null);
  const [activeFollowUp, setActiveFollowUp] = useState<FollowUpId | null>(null);
  const [copied, setCopied] = useState(false);

  const expression = useMemo(() => {
    if (activeFollowUp) return "(* excited and engaged *)";
    if (activeChoice === "project") return "(* bright smile *)";
    if (activeChoice === "question") return "(* focused look *)";
    if (activeChoice === "chat") return "(* cheerful wave *)";
    return "(* waiting for your choice *)";
  }, [activeChoice, activeFollowUp]);

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
          <span>{t("contact.vn.characterSlot")}</span>
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
                {activeFollowUp
                  ? t(`contact.vn.followUps.responses.${activeFollowUp}`)
                  : activeChoice
                  ? t(`contact.vn.responses.${activeChoice}`)
                  : t("contact.vn.prompt")}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="vn-choice-grid">
            {CHOICES.map((choice) => (
              <button
                key={choice}
                type="button"
                className={`vn-choice-box ${activeChoice === choice ? "is-active" : ""}`}
                onClick={() => handleChoiceClick(choice)}
              >
                {t(`contact.vn.choices.${choice}`)}
              </button>
            ))}
          </div>

          {activeChoice && (
            <div className="vn-followups">
              <p className="vn-followup-title">{t("contact.vn.followUps.title")}</p>
              <div className="vn-choice-grid">
                {FOLLOW_UPS[activeChoice].map((followUp) => (
                  <button
                    key={followUp}
                    type="button"
                    className={`vn-choice-box ${activeFollowUp === followUp ? "is-active" : ""}`}
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
      </div>
    </section>
  );
};

export default ContactVisualNovel;
