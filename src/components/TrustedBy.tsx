"use client";

import { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TrustedBy() {
  const sectionRef = useRef(null);
  const [duplicatedCompanies, setDuplicatedCompanies] = useState<Array<{name: string, logo: string}>>([]);

  const companies = useMemo(() => [
    { name: "Google", logo: "/images/institutes/trusted-by-1.webp" },
    { name: "Microsoft", logo: "/images/institutes/trusted-by-2.webp" },
    { name: "Amazon", logo: "/images/institutes/trusted-by-3.webp" },
    { name: "Meta", logo: "/images/institutes/trusted-by-4.webp" },
    { name: "Apple", logo: "/images/institutes/trusted-by-5.webp" },
    { name: "Netflix", logo: "/images/institutes/trusted-by-6.webp" },
    { name: "Netflix", logo: "/images/institutes/trusted-by-7.webp" },
  ], []);

  useEffect(() => {
    // Duplicate the array to create a seamless infinite scroll effect
    setDuplicatedCompanies([...companies, ...companies]);
  }, [companies]);

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  return (
    <section 
      className="w-full py-10 sm:py-12 md:py-16 overflow-hidden bg-[#F8F9FA]"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-6 sm:mb-8 md:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800">
            Trusted by
        </h2>
        </motion.div>
        
        <div className="relative w-full">
          <motion.div 
            className="flex space-x-8 sm:space-x-12 md:space-x-16"
            animate={{
              x: [0, -1000],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                }
              }
            }}
            >
            {duplicatedCompanies.map((company, index) => (
                <div 
                key={index}
                className="flex-shrink-0"
                >
                <div className="relative h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-48 opacity-90 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                  />
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 