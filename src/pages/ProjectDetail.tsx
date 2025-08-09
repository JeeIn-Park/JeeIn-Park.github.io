import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { PROJECTS_META } from "../data/projects";
import "./ProjectDetail.css"; // 필요 시 CSS 작성

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  const meta = PROJECTS_META.find(p => p.slug === slug);
  const detail = t(`projects.details.${slug}`, { returnObjects: true }) as
    | { title: string; intro?: string; body?: string[] }
    | undefined;

  if (!meta || !detail) {
    return (
      <main className="container">
        <h1>Not found</h1>
        <Link to="/projects" className="btn ghost">← Back to Projects</Link>
      </main>
    );
  }

  return (
    <main className="container">
      <nav className="breadcrumbs">
        <Link to="/">Home</Link> / <Link to="/projects">Projects</Link> / <span>{detail.title}</span>
      </nav>

      <article className="prose">
        <header>
          <h1>{detail.title}</h1>
          <div className="pd-actions">
            {meta.github && (
              <a className="btn" href={meta.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {meta.external && (
              <a className="btn ghost" href={meta.external} target="_blank" rel="noreferrer">
                Visit site
              </a>
            )}
          </div>
        </header>

        <motion.img
          src={meta.cover}
          alt={detail.title}
          className="hero"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        />

        {detail.intro && <p className="lead">{detail.intro}</p>}
        {Array.isArray(detail.body) &&
          detail.body.map((para, idx) => <p key={idx}>{para}</p>)}

        <footer className="spacer">
          <Link to="/projects" className="btn ghost">← Back to Projects</Link>
        </footer>
      </article>
    </main>
  );
};

export default ProjectDetail;
