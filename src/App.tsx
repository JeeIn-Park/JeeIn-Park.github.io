import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import { PROJECTS_META } from "./data/projects";
import { slugToComponent } from "./data/projects.registry";

const Hero = lazy(() => import("./pages/Hero"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 relative">
      <Navbar />
      <ScrollTop />
      <div id="top-anchor" className="absolute top-0" />

      <Suspense fallback={<div className="mx-auto my-10 text-center">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          {/* 메타데이터 기반 자동 생성 라우트 */}
          {PROJECTS_META.map((p) => {
            const C = slugToComponent[p.slug];
            return (
              <Route
                key={p.slug}
                path={`/projects/${p.slug}`}
                element={C ? <C /> : <div className="p-6">Not Found</div>}
              />
            );
          })}

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
