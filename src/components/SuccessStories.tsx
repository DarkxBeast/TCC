"use client";

import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export default function SuccessStories() {
  const testimonials = [
    {
      id: 1,
      name: "Milan Barot",
      role: "PSE Advisory Pvt. Ltd.",
      quote: "The Career Company came into my life as a turning point. They took the time to understand my strengths and aspirations, helped me rebuild my resume, and guided me towards a career path that matched my potential. With their support, I successfully transitioned into a new role, gaining valuable skills and a 50% salary hike in just 8 months. I highly recommend them to anyone seeking meaningful career growth.",
      image: "/images/testimonials/T4.png"
    },
    {
      id: 2,
      name: "Harshita Yadav",
      role: "IIM-Sambalpur",
      quote: "From the start of my journey, your guidance has played a key role in helping me bridge the gap between classroom learning and real-world experience. Thanks to The Career Company, the exposure I’ve gained especially through my current internship has added so much value to my understanding of marketing and given me the confidence.",
      image: "/images/testimonials/T5.png"
    },
    {
      id: 3,
      name: "Dhruvi Varma",
      role: "CarYanams",
      quote: "The Career Company helped connect me with multiple clients & also to prepare me for interviews, boosting my confidence and ensuring I was ready to succeed.",
      image: "/images/testimonials/T6.png"
    },
    {
      id: 4,
      name: "Anjali",
      role: "PSE Advisory Pvt. Ltd.",
      quote: "The Career Company has guided me through the process so effortlessly — from identifying the right opportunity to ensuring I received the best possible offer. Their patience and constant support made a huge difference, and I’m genuinely grateful for their efforts.",
      image: "/images/testimonials/T7.png"
    },
    {
      id: 5,
      name: "Ananya Yadav",
      role: "Jio Institute",
      quote: "The mentors patiently addressed all my doubts and queries, and took the time to analyse my resume in detail — offering tailored feedback and preparation strategies specific to my profile, rather than a generalized approach.",
      image: "/images/testimonials/T1.png"
    },
    {
      id: 6,
      name: "Akanksha Sherawat",
      role: "IIM-Kozhikode",
      quote: "I have learnt about different techniques and approaches of Excel which I can further use in my future. The mentor was good and had the ability to engage students in the activities",
      image: "/images/testimonials/T2.png"
    },
    {
      id: 7,
      name: "Kanika Bhardwaj",
      role: "IIM-Indore",
      quote: "New topics were taught in the session, and we had practice questions for each topic which helped us understand them easily. The speaker made the session interactive and cleared every doubt we had during the session.",
      image: "/images/testimonials/T3.png"
    }
  ];

  const controls = useAnimationControls();

  useEffect(() => {
    const startScrolling = async () => {
      await controls.start({
        x: [0, -2400], // Reduced scroll distance for smoother animation
        transition: {
          duration: 60, // Increased duration from 40 to 60 seconds
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    startScrolling();
    return () => controls.stop();
  }, [controls]);

  return (
    <section className="py-12 md:py-24 bg-white"> {/* Reduced vertical padding */}
      <div className="max-w-[100vw] mx-auto px-5 sm:px-10 flex flex-col items-center">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 md:mb-10" /* Reduced bottom margin */
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Success Stories
        </motion.h2>
        
        <div className="relative w-full min-h-[350px] overflow-hidden"> {/* Reduced min-height */}
          <motion.div 
            className="flex gap-6 md:gap-8 mt-8 md:mt-12 pb-8" /* Reduced top and bottom margins/padding */
            animate={controls}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                className="flex-shrink-0 w-[400px] bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-base md:text-lg italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </motion.div>
            ))}
            
            {/* Duplicate testimonials section with the same changes */}
            {testimonials.map((testimonial) => (
              <motion.div 
                key={`duplicate-${testimonial.id}`} 
                className="flex-shrink-0 w-[400px] bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-base md:text-lg italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}