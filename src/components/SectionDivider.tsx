const SectionDivider = () => {
    return (
      <div className="w-full max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="mt-10 md:mt-14 flex items-center gap-4 md:gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-900/70 to-transparent" />
          <div className="hero-diamond w-3 h-3 rotate-45 border-[1.5px] border-red-800" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-red-900/70 to-transparent" />
        </div>
      </div>
    );
  };
  
  export default SectionDivider;