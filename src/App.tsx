import { useState } from "react";
import RealisticFogBackground from "./components/RealisticFogBackground";
import IntroReveal from "./components/IntroReveal";
import Hero from "./components/Hero";
import ScrollingImageGallery from "./components/ChapterReveal";

import BehelitFloating from "./components/BehelitFloating";
import GriffithBustSection from "./components/GriffithBustSection";

import SectionDivider from "./components/SectionDivider";

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

        <BehelitFloating />

        <SectionDivider />

        <GriffithBustSection />

        <SectionDivider />

        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] uppercase text-gray-300">
              Section de test
            </h2>
            
          </div>
        </section>
      </main>
    </div>
  );
}
