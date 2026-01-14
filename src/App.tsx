import { useState } from "react";
import RealisticFogBackground from "./components/RealisticFogBackground";
import IntroReveal from "./components/IntroReveal";
import Hero from "./components/Hero";
import ScrollingImageGallery from "./components/ChapterReveal";

import BehelitFloating from "./components/BehelitFloating";
import GriffithBustSection from "./components/GriffithBustSection";

import SectionDivider from "./components/SectionDivider";
import KineticTeamHybrid from "./components/kinetic-team-hybrid";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="relative min-h-screen text-white">
      <RealisticFogBackground />

      {!introComplete && (
        <IntroReveal onComplete={() => setIntroComplete(true)} />
      )}

      <main className="relative z-10">
        <div
          className={`transition-opacity duration-700 ${
            introComplete
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Hero introComplete={introComplete} />
        </div>
        <ScrollingImageGallery />

        <SectionDivider />

        <KineticTeamHybrid/>

        <SectionDivider />

        <BehelitFloating />

        <SectionDivider />

        <GriffithBustSection />

        <SectionDivider />
      </main>
    </div>
  );
}
