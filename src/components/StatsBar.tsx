"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function StatsBar() {
  const stats = [
    { id: 1, value: "1300+", label: "Careers Accelerated" },
    { id: 2, value: "2300+", label: "Practice Interviews facilitated" },
    { id: 3, value: "250+", label: "Mentors from Top Companies" },
  ];

  const [animateCount, setAnimateCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateCount(true);
        }
      },
      { threshold: 0.3 }
    );

    const target = document.getElementById("stats-container");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full py-12 md:py-2 text-white flex justify-center">
  <motion.div
    id="stats-container"
    className="w-[80%] bg-black rounded-lg sm:rounded-full py-8 px-5 sm:px-10"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          className="text-center"
          variants={itemVariants}
        >
          <motion.h3
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ scale: 0.8 }}
            animate={animateCount ? { scale: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3 + stat.id * 0.1,
            }}
          >
            {stat.value}
          </motion.h3>
          <p className="text-lg font-medium opacity-90">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>
  );
}