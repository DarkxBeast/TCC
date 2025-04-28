"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function InstitutionsPage() {
  return (
    <main className="flex h-[calc(100vh-80px)] flex-col items-center justify-center bg-white text-black">
      <div className="container max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 md:space-y-8"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            For <span className="text-[#FF9E44]">Institutions</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative mx-auto w-20 h-20 md:w-28 md:h-28 my-4 md:my-6"
          >
            <div className="absolute inset-0 border-4 border-[#FF9E44] rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 md:w-14 md:h-14">
                <path d="M21 10H3M16 2V6M8 2V6M10.5 14L12 13V17M10.9998 16.9585H13.0002M7.99979 22H15.9998C19.9998 22 21.9998 20 21.9998 16V8C21.9998 4 19.9998 2 15.9998 2H7.99979C3.99979 2 1.99979 4 1.99979 8V16C1.99979 20 3.99979 22 7.99979 22Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Coming Soon
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            We&apos;re building something special for educational institutions. Our platform will help you connect with industry partners, improve placement rates, and provide better opportunities for your students.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#FF9E44] hover:bg-[#ff9431] text-white px-8 py-5 rounded-full text-lg font-medium">
                Register Your Interest
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-6"
          >
            <Link href="/" className="text-gray-700 hover:text-[#FF9E44] transition-colors text-lg">
              ← Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 