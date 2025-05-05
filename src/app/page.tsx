"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import AboutUs from "@/components/AboutUs";
import StatsBar from "@/components/StatsBar";
import SuccessStories from "@/components/SuccessStories";
import TopMentors from "@/components/TopMentors";
import JoinAsMentor from "@/components/JoinAsMentor";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import ServiceShowcase from "@/components/ServiceShowcase";
import MentorFrom from "@/components/MentorsFrom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const [formSource, setFormSource] = useState<"Institutions" | "Companies" | null>(null);

  return (
    <div className="">
      {/* Hero Section */}
      <Hero setFormSource={setFormSource} />

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Mentor From Section */}
      <MentorFrom />

      {/* About Us Section */}
      <AboutUs />

      {/* Stats Bar */}
      <StatsBar />

      {/* Service Showcase Section */}
      <ServiceShowcase />
      
      {/* Success Stories */}
      <SuccessStories />

      {/* Top Mentors */}
      <TopMentors />
      
      {/* Join As Mentor */}
      <JoinAsMentor />
      
      {/* FAQ Section */}
      <FAQ />

      {/* Contact Us */}
      <ContactUs formSource={formSource ?? undefined} />
      
      {/* Top section with tagline and signup */}
      <div className="py-10 md:py-16 px-6 md:px-32 flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center border-b border-white/20">
          <div className="flex items-center gap-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold max-w-2xl text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Empowering Careers, Connecting Talent, Shaping Futures{" "}
              <span className="ml-1">💎</span>
            </motion.h2>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/coming-soon">
              <Button className="bg-[#FF9E44] hover:bg-[#FF9E44]/90 text-white rounded-full px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium w-auto h-12">
                Build your Profile
              </Button>
            </Link>
          </motion.div>
        </div>
    </div>
  );
}
