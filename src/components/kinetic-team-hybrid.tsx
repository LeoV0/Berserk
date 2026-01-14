import React, { useState, useRef, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

/* ---------- Types ---------- */

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

/* ---------- Data ---------- */

const TEAM: TeamMember[] = [
  {
    id: '01',
    name: 'Griffith',
    role: 'Leader de la Troupe du Faucon',
    image: 'images/Griffith.jpeg',
  },
  {
    id: '02',
    name: 'Guts',
    role: 'Capitaine des Assauts',
    image: 'images/Guts.jpg',
  },
  {
    id: '03',
    name: 'Casca',
    role: 'Commandante en Second',
    image: 'images/Casca.webp',
  },
  {
    id: '04',
    name: 'Judeau',
    role: 'Éclaireur & Stratège',
    image: 'images/judeau.avif',
  },
  {
    id: '05',
    name: 'Pippin',
    role: 'Force de Frappe',
    image: 'images/Pippin.jpg',
  },
];

/* ---------- Main Component ---------- */

export default function KineticTeamHybrid() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY + 20);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full cursor-default px-6 py-24 text-neutral-200 md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h1 className="text-4xl font-light tracking-tighter text-neutral-600 sm:text-6xl md:text-8xl">
              Brigade du <span className="text-white">Faucon Blanc</span>
            </h1>
          </div>
          <div className="h-px flex-1 bg-neutral-900 mx-8 hidden md:block" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
            Soldats principaux &apos;5
          </p>
        </motion.header>

        <div className="flex flex-col">
          {TEAM.map((member, index) => (
            <TeamRow
              key={member.id}
              data={member}
              index={index}
              isActive={activeId === member.id}
              setActiveId={setActiveId}
              isMobile={isMobile}
              isAnyActive={activeId !== null}
            />
          ))}
        </div>
      </div>

      {/* Desktop floating card (sans badge Active) */}
      {!isMobile && (
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
        >
          <AnimatePresence mode="wait">
            {activeId && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative h-64 w-80 overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-2xl"
              >
                <img
                  src={TEAM.find((t) => t.id === activeId)?.image ?? TEAM[0].image}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

/* ---------- Row Component ---------- */

function TeamRow({
  data,
  index,
  isActive,
  setActiveId,
  isMobile,
  isAnyActive,
}: {
  data: TeamMember;
  index: number;
  isActive: boolean;
  setActiveId: (id: string | null) => void;
  isMobile: boolean;
  isAnyActive: boolean;
}) {
  const isDimmed = isAnyActive && !isActive;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isDimmed ? 0.3 : 1,
        y: 0,
        backgroundColor: isActive && isMobile ? 'rgba(255,255,255,0.03)' : 'transparent',
      }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => !isMobile && setActiveId(data.id)}
      onMouseLeave={() => !isMobile && setActiveId(null)}
      onClick={() => isMobile && setActiveId(isActive ? null : data.id)}
      className={`group relative border-t border-neutral-900 transition-colors duration-500 last:border-b ${
        isMobile ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      <div className="relative z-10 flex flex-col py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex items-baseline gap-6 md:gap-12 pl-4 md:pl-0 transition-transform duration-500 group-hover:translate-x-4">
          <span className="font-mono text-xs text-neutral-600">0{index + 1}</span>
          <h2 className="text-3xl font-medium tracking-tight text-neutral-400 transition-colors duration-300 group-hover:text-white md:text-6xl">
            {data.name}
          </h2>
        </div>

        <div className="mt-4 flex items-center justify-between pl-12 pr-4 md:mt-0 md:justify-end md:gap-12 md:pl-0 md:pr-0">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 transition-colors group-hover:text-neutral-400">
            {data.role}
          </span>

          {/* Mobile +/- conservé */}
          <div className="block md:hidden text-neutral-500">
            {isActive ? <Minus size={18} /> : <Plus size={18} />}
          </div>

          {/* Flèche desktop supprimée */}
        </div>
      </div>

      <AnimatePresence>
        {isMobile && isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-neutral-900/50"
          >
            <div className="p-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src={data.image}
                  alt={data.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
