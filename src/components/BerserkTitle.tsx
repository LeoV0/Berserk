const BerserkTitle = () => {
    return (
      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between text-[0.7rem] md:text-xs tracking-[0.25em] text-gray-400 mb-8">
          <span className="uppercase">Série animée</span>
          <span className="uppercase">Kentaro Miura — 1997</span>
        </div>
  
        <div className="flex flex-col items-start gap-5 md:gap-6">
          <div>
            <p className="uppercase text-[0.75rem] md:text-sm tracking-[0.35em] text-red-800/70 mb-3">
              L&apos;ÂGE D&apos;OR
            </p>
  
            <h1
  className="hero-title font-berserk text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-black tracking-[0.08em] uppercase"
  style={{
    color: "#f3f3f3",
    textShadow:
      "0 0 22px rgba(139,0,0,0.85), 0 0 60px rgba(0,0,0,0.9)",
    mixBlendMode: "screen",
    lineHeight: 0.9,
  }}
>
  BERSERK
</h1>
          </div>
          <div className="max-w-xl text-left">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-300">
              ARC DU SACRIFICE · MIDLAND · FAUCON DU MILLÉNAIRE
            </p>
            <p className="mt-3 text-[0.8rem] md:text-sm text-gray-400 leading-relaxed">
              Une plongée dans la chute de Griffith, la malédiction de la marque
              et la naissance du guerrier maudit.
            </p>
          </div>
        </div>
  
        <div className="mt-10 md:mt-14 flex items-center gap-4 md:gap-6">
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-red-900/70 to-transparent" />
          <div className="hero-diamond w-3 h-3 rotate-45 border-[1.5px] border-red-800" />
          <div className="h-px flex-1 bg-linear-to-l from-transparent via-red-900/70 to-transparent" />
        </div>
      </div>
    );
  };
  
  export default BerserkTitle;
