"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import FormPopup from "./ui/form-popup";

interface HeroProps {
  setFormSource: Dispatch<SetStateAction<"Institutions" | "Companies" | null>>;
}

// Define card type
interface Card {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export default function Hero({ setFormSource }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"Institutions" | "Companies" | "Students">("Students");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Animation controls for auto-scrolling
  const studentsAnimationControls = useAnimation();
  const companiesAnimationControls = useAnimation();
  
  // Store hover state
  const [studentsHover, setStudentsHover] = useState(false);
  const [companiesHover, setCompaniesHover] = useState(false);

  // Card data for Students and Professionals
  const studentProfessionalCards = [
    {
      id: 1,
      title: "Career Path Finder",
      description: "Discover the right career path for you",
      icon: "/images/icons/S1.png",
      href: "/career-path-finder",
    },
    {
      id: 2,
      title: "Find Mentors",
      description: "Connect with industry experts",
      icon: "/images/icons/S2.png",
      href: "/mentors",
    },
    {
      id: 3,
      title: "Build Resumes",
      description: "Create standout professional resumes",
      icon: "/images/icons/S3.png",
      href: "/resumes",
    },
    {
      id: 4,
      title: "Course Suggestions",
      description: "Find courses aligned with your goals",
      icon: "/images/icons/S4.png",
      href: "/courses",
    },
    {
      id: 5,
      title: "Find a Job",
      description: "Discover opportunities that match your skills",
      icon: "/images/icons/S5.png",
      href: "/jobs",
    },
    {
      id: 6,
      title: "Find Projects",
      description: "Stay informed about your field",
      icon: "/images/icons/S6.png",
      href: "/industry-updates",
    },
    {
      id: 7,
      title: "Industry Updates",
      description: "Work on real-world practical projects",
      icon: "/images/icons/S7.png",
      href: "/projects",
    },
  ];

  // Card data for Institutions
  const institutionCards = [
    {
      id: 1,
      title: "Customized Placement Training",
      description: "Customized training programs for your organization's needs",
      icon: "/images/icons/I1.png",
      href: "/institutions/training",
    },
    {
      id: 2,
      title: "Accelerating Placements",
      description: "Connect your students with top employers",
      icon: "/images/icons/I2.png",
      href: "/institutions/placement",
    },
    {
      id: 3,
      title: "Process Tracker",
      description: "Collaborative programs to enhance student outcomes",
      icon: "/images/icons/I3.png",
      href: "/institutions/partnerships",
    },
    {
      id: 4,
      title: "Build profile for your institute",
      description: "Host career events with industry leaders",
      icon: "/images/icons/I4.png",
      href: "/institutions/fairs",
    },
  ];

  // Card data for Companies
  const companyCards = [
    {
      id: 1,
      title: "Post Jobs & Projects",
      description: "Find the right talent for your organization",
      icon: "/images/icons/C1.png",
      href: "/companies/talent",
    },
    {
      id: 2,
      title: "Explore Universities",
      description: "Enhance your company's reputation as an employer",
      icon: "/images/icons/C2.png",
      href: "/companies/branding",
    },
    {
      id: 3,
      title: "Explore T Schools",
      description: "Upskill your workforce with targeted training",
      icon: "/images/icons/C3.png",
      href: "/companies/skills",
    },
    {
      id: 4,
      title: "Explore B School",
      description: "Build a diverse and inclusive workplace",
      icon: "/images/icons/C4.png",
      href: "/companies/diversity",
    },
    {
      id: 5,
      title: "Compare Universities",
      description: "End-to-end recruitment services for your needs",
      icon: "/images/icons/C5.png",
      href: "/companies/recruitment",
    },
  ];

  const handleModalOpen = () => setIsModalOpen(true);

  // Start the animations when the component mounts
  useEffect(() => {
    // Start both animations immediately, regardless of active tab
    // This ensures the animations are always running even when tabs change
    if (!studentsHover) {
      studentsAnimationControls.start({
        x: [0, -2500],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 45,
            ease: "linear",
          },
        },
      });
    }
    
    if (!companiesHover) {
      companiesAnimationControls.start({
        x: [0, -2800],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        },
      });
    }
    
    // Cleanup animations on unmount
    return () => {
      studentsAnimationControls.stop();
      companiesAnimationControls.stop();
    };
  }, [studentsAnimationControls, companiesAnimationControls, studentsHover, companiesHover]);

  // Handlers for pausing and resuming animations on hover
  const handleStudentsHoverStart = () => {
    setStudentsHover(true);
    studentsAnimationControls.stop();
  };

  const handleStudentsHoverEnd = () => {
    setStudentsHover(false);
    studentsAnimationControls.start({
      x: [0, -2500],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 45,
          ease: "linear",
        },
      },
    });
  };

  const handleCompaniesHoverStart = () => {
    setCompaniesHover(true);
    companiesAnimationControls.stop();
  };

  const handleCompaniesHoverEnd = () => {
    setCompaniesHover(false);
    companiesAnimationControls.start({
      x: [0, -2800],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    });
  };

  // Render card component to reuse
  const renderCard = (card: Card, key: string) => (
    <Link
      href={card.href}
      key={key}
      className="relative flex flex-row sm:flex-col items-center rounded-lg border border-gray-200 p-3 transition-transform duration-300 hover:shadow-md bg-white w-full sm:h-[180px] md:h-[200px] sm:max-w-[220px] md:max-w-[200px] mx-auto flex-shrink-0 mb-3 sm:mb-0 justify-center"
    >
      {/* Image Container - Left on mobile, Top on larger screens */}
      <div className="w-20 h-20 sm:w-24 md:w-28 sm:h-24 md:h-28 sm:mb-3 md:mb-4 relative mr-3 sm:mr-0 flex-shrink-0">
        <Image
          src={card.icon}
          alt={card.title}
          fill
          className="object-contain"
          onError={(e) => {
            console.log(`Failed to load image for card: ${card.title}`);
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.jpg";
            // Prevent potential infinite error loops if placeholder also fails
            target.onerror = null;
          }}
        />
      </div>

      {/* Text Content - Right on mobile, Bottom on larger screens */}
      <div className="flex flex-col flex-grow sm:flex-grow-0 sm:items-center">
        {/* Card Title */}
        <h3 className="text-xs sm:text-sm md:text-base font-medium text-left sm:text-center text-gray-800">
          {card.title}
        </h3>
        
        {/* Card Description - visible only on mobile */}
        <p className="text-xs text-gray-600 mt-1 text-left sm:hidden">
          {card.description && card.description.length > 60 
            ? `${card.description.substring(0, 60)}...` 
            : card.description}
        </p>
      </div>
    </Link>
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="w-full bg-white relative overflow-hidden mt-16"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-[1440px] mx-auto px-4 pt-6 md:pt-24 pb-12 md:pb-32 flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.11, 0.95, 0.32, 1],
          }}
          className="text-[28px] sm:text-[36px] md:text-[56px] font-bold text-left sm:text-center leading-tight text-[#1A1A1A] mb-3 md:mb-6 max-w-[1200px] px-2 sm:px-4"
        >
          We help you build more{" "}
          <span className="text-[#FF9E44] text-[34px] sm:text-[42px] md:text-[64px] font-extrabold relative inline-block">
            Clarity
          </span>{" "}
          in your career.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.11, 0.95, 0.32, 1],
          }}
          className="text-sm sm:text-base md:text-lg text-[#666666] text-left sm:text-center max-w-[800px] mb-6 md:mb-16 px-2 sm:px-4"
        >
          We help students and working professionals reach their ideal role
          faster with clarity. Help institutions accelerate their placements and provide
          companies with top talent.
        </motion.p>

        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full max-w-[1230px] px-2 sm:px-6"
        >
          {/* Black rectangle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] md:w-[1400px] h-[180px] sm:h-[214px] bg-black rounded-2xl"></div>

          {/* White box */}
          <div className="relative w-full max-w-[1230px] h-auto md:h-[548px] bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-2 z-10 overflow-hidden">
            <div className="flex justify-center pt-4 md:pt-8 pb-2 md:pb-6 relative">
              <div className="flex flex-row w-full md:w-auto px-2 sm:px-4 space-y-0 space-x-2 md:space-x-12 items-end justify-start md:justify-center overflow-x-auto snap-x scrollbar-hide">
                <button
                  type="button"
                  className={`text-sm md:text-lg font-medium px-2 sm:px-3 md:px-6 py-2 md:py-3 transition-colors relative flex-shrink-0 snap-start min-w-[145px] sm:min-w-0 ${activeTab === "Students"
                    ? "text-[#FF9E44]"
                    : "text-[#666666] hover:text-[#333333]"
                    }`}
                  onClick={() => setActiveTab("Students")}
                >
                  <span className="relative whitespace-normal sm:whitespace-nowrap text-center max-w-[120px] sm:max-w-none">
                    For Students <br className="sm:hidden" />& Professionals
                    {activeTab === "Students" && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[110%] h-0.5 bg-[#FF9E44] rounded-full" />
                    )}
                  </span>
                </button>
                <button
                  type="button"
                  className={`text-sm md:text-lg font-medium px-2 sm:px-3 md:px-6 py-2 md:py-3 transition-colors relative flex-shrink-0 snap-start min-w-[120px] sm:min-w-0 ${activeTab === "Institutions"
                    ? "text-[#FF9E44]"
                    : "text-[#666666] hover:text-[#333333]"
                    }`}
                  onClick={() => setActiveTab("Institutions")}
                >
                  <span className="relative whitespace-nowrap">
                    For Institutions
                    {activeTab === "Institutions" && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[110%] h-0.5 bg-[#FF9E44] rounded-full" />
                    )}
                  </span>
                </button>
                <button
                  type="button"
                  className={`text-sm md:text-lg font-medium px-2 sm:px-3 md:px-6 py-2 md:py-3 transition-colors relative flex-shrink-0 snap-start min-w-[120px] sm:min-w-0 ${activeTab === "Companies"
                    ? "text-[#FF9E44]"
                    : "text-[#666666] hover:text-[#333333]"
                    }`}
                  onClick={() => setActiveTab("Companies")}
                >
                  <span className="relative whitespace-nowrap">
                    For Companies
                    {activeTab === "Companies" && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[110%] h-0.5 bg-[#FF9E44] rounded-full" />
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Card Container and Button in Column Group */}
            <div className="flex flex-col items-center mt-4 md:mt-10">
              {/* Card Container */}
              <div className="px-2 sm:px-4 md:px-16 py-2 md:py-4 relative mb-4 w-full overflow-hidden">
                <div className="flex justify-center">
                  {/* Mobile Views - conditionally rendered based on active tab */}
                  {activeTab === "Students" && (
                    <div className="flex flex-col w-full sm:hidden">
                      {studentProfessionalCards.map(card => renderCard(card, `student-mobile-${card.id}`))}
                    </div>
                  )}
                  
                  {activeTab === "Institutions" && (
                    <div className="flex flex-col w-full sm:hidden">
                      {institutionCards.map(card => renderCard(card, `institution-mobile-${card.id}`))}
                    </div>
                  )}
                  
                  {activeTab === "Companies" && (
                    <div className="flex flex-col w-full sm:hidden">
                      {companyCards.map(card => renderCard(card, `company-mobile-${card.id}`))}
                    </div>
                  )}
                  
                  {/* Desktop Views - always rendered but visibility controlled by CSS */}
                  {/* Students carousel - always present and animating */}
                  <div 
                    className={`hidden ${activeTab === "Students" ? "sm:block" : ""} w-full overflow-hidden`}
                    onMouseEnter={handleStudentsHoverStart}
                    onMouseLeave={handleStudentsHoverEnd}
                  >
                    <motion.div 
                      className="flex space-x-4 gap-8 md:space-x-6 w-max"
                      animate={studentsAnimationControls}
                      initial={{ x: 0 }}
                    >
                      {/* First set of cards */}
                      {studentProfessionalCards.map(card => renderCard(card, `student-${card.id}`))}
                      
                      {/* Duplicate set for infinite scrolling */}
                      {studentProfessionalCards.map(card => renderCard(card, `student-duplicate-${card.id}`))}
                      
                      {/* Third set for smoother looping */}
                      {studentProfessionalCards.map(card => renderCard(card, `student-triplicate-${card.id}`))}
                    </motion.div>
                  </div>
                  
                  {/* Institutions grid - always present */}
                  <div className={`hidden ${activeTab === "Institutions" ? "sm:grid" : ""} sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 md:gap-6 w-full`}>
                    {institutionCards.map((card) => renderCard(card, `institution-${card.id}`))}
                  </div>
                  
                  {/* Companies carousel - always present and animating */}
                  <div 
                    className={`hidden ${activeTab === "Companies" ? "sm:block" : ""} w-full overflow-hidden`}
                    onMouseEnter={handleCompaniesHoverStart}
                    onMouseLeave={handleCompaniesHoverEnd}
                  >
                    <motion.div 
                      className="flex space-x-4 gap-8 md:space-x-6 w-max"
                      animate={companiesAnimationControls}
                      initial={{ x: 0 }}
                    >
                      {/* First set of cards */}
                      {companyCards.map(card => renderCard(card, `company-${card.id}`))}
                      
                      {/* Duplicate set for infinite scrolling */}
                      {companyCards.map(card => renderCard(card, `company-duplicate-${card.id}`))}
                      
                      {/* Third set for smoother looping */}
                      {companyCards.map(card => renderCard(card, `company-triplicate-${card.id}`))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              {activeTab === "Students" && (
                <div className="mt-2 mb-4 md:mb-6">
                  <button
                    type="button"
                    className="bg-[#FF9E44] text-black text-sm md:text-base font-semibold py-2 md:py-3 px-6 md:px-8 rounded-full shadow-md hover:bg-[#ff9431] transition-colors"
                    onClick={handleModalOpen}
                  >
                    Join our waitlist
                  </button>
                </div>
              )}

              <FormPopup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

              {/* Contact Us Button */}
              {(activeTab === "Institutions" || activeTab === "Companies") && (
                <div className="mt-2 mb-4 md:mb-6">
                  <button
                    type="button"
                    className="bg-[#FF9E44] text-black text-sm md:text-base font-semibold py-2 md:py-3 px-6 md:px-8 rounded-full shadow-md hover:bg-[#ff9431] transition-colors"
                    onClick={() => {
                      const contactSection = document.getElementById("contact-us");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                      setFormSource(activeTab);
                    }}
                  >
                    Join our waitlist
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
