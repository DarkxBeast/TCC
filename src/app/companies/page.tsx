"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CompaniesPage() {
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
            For <span className="text-[#FF9E44]">Companies</span>
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
                <path d="M9.25 21.5V19.5C9.25 18.12 10.36 17 11.75 17H17.25C18.64 17 19.75 18.12 19.75 19.5V21.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 14C15.8807 14 17 12.8807 17 11.5C17 10.1193 15.8807 9 14.5 9C13.1193 9 12 10.1193 12 11.5C12 12.8807 13.1193 14 14.5 14Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.25 21.5V19.5C4.25 18.12 5.36 17 6.75 17H7.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 14C10.8807 14 12 12.8807 12 11.5C12 10.1193 10.8807 9 9.5 9C8.11929 9 7 10.1193 7 11.5C7 12.8807 8.11929 14 9.5 14Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 10.5H2" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2.5H2V6.5H22V2.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            We&apos;re building a powerful platform for companies to discover top talent, post jobs, and connect with the best educational institutions. Streamline your recruitment process and find the perfect candidates for your team.
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