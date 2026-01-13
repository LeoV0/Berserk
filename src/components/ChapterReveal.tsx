import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ImageData {
  id: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ScrollingImageGalleryProps {
  images?: ImageData[];
}

const ScrollingImageGallery: React.FC<ScrollingImageGalleryProps> = ({
  images = [
    { id: 1, src: "images/Griffith_Guts.jpeg", alt: "Guts & Griffith", title: "Guts & Griffith", description: "Discussion profonde" },
    { id: 2, src: "images/GriffithVSGuts.webp", alt: "Guts vs Griffith", title: "Griffith vs Guts", description: "Tu m'appartiens" },
    { id: 3, src: "images/HeroBanner.jpg", alt: "Affiche de l'animé", title: "Affiche de l'animé", description: "Berserk" },
    { id: 4, src: "images/GriffithGutsCasca.avif", alt: "Brigade du faucon blanc", title: "Brigade du faucon blanc", description: "La troupe" },
  ],
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const totalImages = images.length;

  return (
    <section ref={ref} className="relative w-full">
      <div style={{ height: `${totalImages * 100}vh` }} className="relative">
        <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
          {images.map((image, index) => {
            const progress = useTransform(
              scrollYProgress,
              [index / totalImages, (index + 1) / totalImages],
              [0, 1]
            );

            const isFirstImage = index === 0;
            const isLastImage = index === totalImages - 1;

            const scale = useTransform(progress, [0, 0.5, 1], [0.8, 1, 1]);
            
            const opacity = isFirstImage 
              ? useTransform(progress, [0, 0.1, 0.8, 1], [0, 1, 1, 0])
              : isLastImage
              ? useTransform(progress, [0, 0.1, 0.8, 1], [0, 1, 1, 1])
              : useTransform(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
            
            const textOpacity = isFirstImage
              ? useTransform(progress, [0.3, 0.4, 0.8, 0.9], [0, 1, 1, 0])
              : isLastImage
              ? useTransform(progress, [0.3, 0.4, 0.8, 1], [0, 1, 1, 1])
              : useTransform(progress, [0.4, 0.5, 0.8, 0.9], [0, 1, 1, 0]);
            
            const textY = useTransform(progress, [0.4, 0.5], [20, 0]);

            return (
              <motion.div key={image.id} className="absolute inset-0" style={{ opacity }}>
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  style={{ scale }}
                />
                {image.title && (
                  <motion.div
                    className="absolute top-8 left-8 md:top-16 md:left-16 text-white z-10"
                    style={{ opacity: textOpacity, y: textY }}
                  >
                    <h2 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">
                      {image.title}
                    </h2>
                    {image.description && (
                      <p className="text-lg md:text-xl text-white/90 drop-shadow-lg">
                        {image.description}
                      </p>
                    )}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="h-32 md:h-48" />
    </section>
  );
};

export default ScrollingImageGallery;