"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How do you help institutes in accelerating placements?",
      answer: "We work closely with institutes in two ways:To create career development modules that align with the unique needs of their students.Help campuses by bringing more companies for placements."
    },
    {
      id: 2,
      question: "How do you help companies with hiring?",
      answer: "We offer a plug-and-play hiring model:Campus Hiring: Gain seamless access to top-tier talent from leading institutions.Lateral Hiring: Our in-house staffing firm helps you quickly fill mid-to-senior roles with pre-vetted candidates."
    },
    {
      id: 3,
      question: "Do you only help companies with campus hiring, or also lateral roles?",
      answer: "We operate two distinct verticals:Campus Placements for fresh talent.Lateral Hiring through our recruitment services.📩 Contact us to explore hiring solutions that fit your needs."
    },
    {
      id: 4,
      question: "I’m an IIM alum and actively seeking new roles. Can you help?",
      answer: "Absolutely. Join our exclusive “1% Club”—a curated network of top professionals from elite institutions, designed for high-impact career moves."
    },
    {
      id: 5,
      question: "Can individual students enroll in your training programs?",
      answer: "Currently, our training programs are delivered exclusively through our partner institutions. We’ll notify you when individual access becomes available."
    },
    {
      id: 6,
      question: "When is your web app launching?",
      answer: "We’re launching in 6–8 weeks! Join our wait-list now and receive an exclusive 25% early-access discount."
    },
    {
      id: 7,
      question: "How many institutions are you partnered with?",
      answer: "We currently work with 15+ premier institutions, including all three generation IIMs and leading private B-schools across India."
    },
    {
      id: 8,
      question: "How can my college become a partner?",
      answer: "We’re always excited to collaborate with forward-thinking institutions. Fill out the above form or write to cdm@thecareercompany.in to initiate the conversation."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently asked questions
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about the TCC platform.
          </motion.p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqItems.map((item) => (
            <motion.div 
              key={item.id}
              className="border-b border-gray-200 pb-4 md:pb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * item.id }}
              viewport={{ once: true }}
            >
              <div
                className="flex justify-between items-center w-full text-left py-2 cursor-pointer"
                onClick={() => toggleQuestion(item.id)}
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-900">
                  {item.question}
                </h3>
                <span className="ml-6 flex-shrink-0">
                  <svg 
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${activeIndex === item.id ? 'rotate-45' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </div>
              
              <AnimatePresence>
                {activeIndex === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-gray-600">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 