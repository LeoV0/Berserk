export default function SilentEclipseSection() {
    return (
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          
        />
        <div className="pointer-events-none absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-red-900/70 shadow-[0_0_40px_rgba(139,0,0,0.9)]" />
        <div className="relative z-10 w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden flex items-center justify-center">
          <img
            src="/images/ImageSacrifice.png"
            alt="Marque du Sacrifice"
            className="w-full h-full object-contain"
          />
        </div>
      </section>
    );
  }
  