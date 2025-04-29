"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";

export default function TopMentors() {
  const mentors = [
    {
      id: 1,
      name: "Gaurav Upadhyay",
      image: "/images/mentors/M1.png",
      position: "Senior Global Product Manager - Bain And Company - IIML",
      description: "Digital Product Leader driving AI-led growth across global B2B/B2C products in BFSI, Telecom & Retail."
    },
    {
      id: 2,
      name: "Ashish Pathak",
      image: "/images/mentors/M2.png",
      position: "Global Product Director, Digital & Supply Chain Practice - BCG- SPJIMR",
      description: "Strategy expert optimizing operations, mentoring leaders, driving industry transformation."
    },
    {
      id: 3,
      name: "Ajay Kumar",
      image: "/images/mentors/M3.png",
      position: "AD- BFSI - Protivity - IIM Cal",
      description: "Ajay is an Associate Director at Protiviti with 9+ years of experience in risk advisory, internal audit, and digital fintech solutions across banking services."
    },
    {
      id: 4,
      name: "Soumya Bose",
      image: "/images/mentors/M4.png",
      position: "Associate Director - Deloitte - IIM B",
      description: "Experienced management consultant in Consumer, Industrials, Automotive; mentors B-school aspirants for career success."
    },
    {
      id: 5,
      name: "Vinod Mathur",
      image: "/images/mentors/M5.png",
      position: "Director - Blue Yonder - IITB - IITM",
      description: "Strategic Consultant blending 25+ years of supply chain expertise with digital transformation and execution excellence."
    },
    {
      id: 6,
      name: "Vikram Dhawan",
      image: "/images/mentors/M6.png",
      position: "Senior Brand Manager - Dabur - FMS Delhi",
      description: "Senior Brand Manager at Dabur with expertise in shopper marketing, consumer insights, and strategic brand growth."
    },
    {
      id: 7,
      name: "Kanishak Chauhan",
      image: "/images/mentors/M7.png",
      position: "Jr Engagement Manager - McKinsey & Company - ISB",
      description: "Consultant with 10+ years' experience across McKinsey, EY, PWC, Deloitte; expert in cross-industry strategy and customer experience transformation."
    },
    {
      id: 8,
      name: "Jatin Gulbani",
      image: "/images/mentors/M8.png",
      position: "Director - HR COE - Tata Institute of Social Sciences, Mumbai - Clear",
      description: "Jatin Gulabani, Director – HR COE at Clear, leads rewards, performance, operations; TISS grad with global HR expertise."
    },
    {
      id: 9,
      name: "Kartik Misra",
      image: "/images/mentors/M9.png",
      position: "Program Manager - Procurement - IBM - IIM U",
      description: "MBA (IIM Udaipur), MS (Purdue), BE (Pune); Lean Six Sigma Green Belt; leadership roles in IEEE Delhi Section."
    },
    {
      id: 10,
      name: "Digwanta Chakraborty",
      image: "/images/mentors/M10.png",
      position: "Regional Head of Human Resources - Trinity LLP - ISB",
      description: "Seasoned HR leader with expertise in talent strategies, organizational transformations, and global team management across North America and India."
    },
    {
      id: 11,
      name: "Sumit Sanghwan",
      image: "/images/mentors/M11.png",
      position: "Vice President - Havells - Symboisis Pune",
      description: "Growth leader with 20 years in sales, marketing, and P&L management; leading Samsung India, with prior experience at OYO and Bharti Airtel."
    },
    {
      id: 12,
      name: "Kashmira Kolte",
      image: "/images/mentors/M12.png",
      position: "Manager - HR - TATA Play - IIM Ranchi",
      description: "HR professional skilled in operations, business partnering, L&D, and organizational effectiveness; experienced in IT and finance."
    },
    {
      id: 13,
      name: "Vijoy Basu",
      image: "/images/mentors/M13.png",
      position: "Director - Cognizant - IIMK",
      description: "Tech leader driving Fortune 200 firms from data to decisions with AI, analytics & digital transformation."
    },
    {
      id: 14,
      name: "Arun Singhal",
      image: "/images/mentors/M14.png",
      position: "Board Member - Cello World - IIM Banglore",
      description: "Founder of Enrichmentors, leveraging 26+ years in top FMCGs to empower SMEs and individuals in strategy, career, and wealth growth."
    }

  ];

  const sectionRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  
  useEffect(() => {
    // Function to update cards per page based on screen width
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(4);
      }
    };

    // Set initial value
    updateCardsPerPage();

    // Add event listener for resize
    window.addEventListener('resize', updateCardsPerPage);

    // Clean up
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);
  
  const totalPages = Math.ceil(mentors.length / cardsPerPage);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        if (currentPage < totalPages - 1) {
          scrollContainerRef.current.scrollBy({
            left: scrollContainerRef.current.offsetWidth,
            behavior: "smooth",
          });
          setCurrentPage((prev) => prev + 1);
        } else {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(0);
        }
      }
    }, 3250); // Auto-scroll every 3.25 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentPage, totalPages]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileCardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const handleNext = useCallback(() => {
    if (scrollContainerRef.current && currentPage < totalPages - 1) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, totalPages]);

  const handlePrev = useCallback(() => {
    if (scrollContainerRef.current && currentPage > 0) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage]);

  /* const visibleMentors = mentors.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  ); */

  return (
    <section id="top-mentors" className="py-12 sm:py-16 md:py-20 lg:py-8 bg-white" ref={sectionRef}>
      <div className=" mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Top Mentors for You
        </motion.h2>

        <motion.p
          className="text-center text-gray-700 text-base sm:text-lg mb-6 sm:mb-10"
          initial={{ opacity: 0, y: -15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Unlock the potential of personalized learning
        </motion.p>

        <div className="relative">
          {/* Left Arrow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 xs:-translate-x-5 sm:-translate-x-8 md:-translate-x-12 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 border border-gray-200 ${
              currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 xs:translate-x-5 sm:translate-x-8 md:translate-x-12 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 border border-gray-200 ${
              currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </motion.button>

          {/* Container with overflow hidden */}
          <div className="overflow-hidden">
            {cardsPerPage <= 2 ? (
              <motion.div
                className="relative flex justify-center items-center w-full min-h-[500px]"
                initial={false}
                custom={currentPage > 0 ? 1 : -1}
              >
                <motion.div
                  key={currentPage}
                  custom={currentPage > 0 ? 1 : -1}
                  variants={mobileCardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className={`relative ${cardsPerPage === 1 ? 'w-[300px]' : 'w-full max-w-[700px]'}`}
                  style={{
                    margin: '0 auto'
                  }}
                >
                  <div className={`flex ${cardsPerPage === 1 ? 'justify-center' : 'justify-between'} gap-6`}>
                    {mentors.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage).map((mentor) => (
                      <motion.div
                        key={mentor.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-between border border-gray-100"
                        style={{
                          width: cardsPerPage === 1 ? '300px' : 'calc(50% - 12px)',
                          height: '450px'
                        }}
                        whileHover={{ y: -5 }}
                      >
                        <motion.div
                          className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full overflow-hidden mb-3"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Image
                            src={mentor.image}
                            alt={mentor.name}
                            width={140}
                            height={140}
                            className="object-cover"
                          />
                        </motion.div>

                        <div className="flex flex-col items-center flex-grow justify-between w-full">
                          <div className="flex flex-col items-center text-center mb-0">
                            <div className="flex items-center justify-center gap-1">
                              <h3 className="text-lg font-semibold">{mentor.name}</h3>
                              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                                <Link href="#" aria-label={`${mentor.name}'s LinkedIn profile`}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="#0A66C2"
                                    className="w-[18px] h-[18px]"
                                  >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                  </svg>
                                </Link>
                              </motion.div>
                            </div>

                            <p className="text-gray-600 text-center text-sm mt-0.5 mb-2">
                              {mentor.position}
                            </p>
                          </div>

                          <p className="text-gray-700 text-center text-sm h-[100px] overflow-hidden mt-0 mb-3">
                            {mentor.description}
                          </p>

                          <motion.button
                            className="bg-black text-white w-full py-2 rounded-md font-medium hover:bg-gray-800 transition-colors flex-shrink-0 text-sm mt-1"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            View Profile
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              // Original grid layout for 4 cards
              <motion.div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scroll-smooth gap-6 pb-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  scrollSnapType: "x mandatory",
                  display: "grid",
                  gridTemplateColumns: `repeat(${mentors.length}, calc(25% - 18px))`,
                }}
              >
                {mentors.map((mentor) => (
                  <motion.div
                    key={mentor.id}
                    className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-3 sm:p-6 flex flex-col items-center ${
                      cardsPerPage === 1 
                        ? "h-[450px] w-[300px]" 
                        : cardsPerPage === 2 
                          ? "h-[400px] w-full" 
                          : "h-[300px] sm:h-[400px]"
                    } justify-between border border-gray-100 scroll-snap-align-start`}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className={`flex-shrink-0 ${
                        cardsPerPage === 1 
                          ? "w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]" 
                          : cardsPerPage === 2 
                            ? "w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]" 
                            : "w-[70px] h-[70px] sm:w-[110px] sm:h-[110px]"
                      } rounded-full overflow-hidden mb-2 sm:mb-3`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        width={110}
                        height={110}
                        className="object-cover"
                      />
                    </motion.div>

                    <div className="flex flex-col items-center flex-grow justify-between w-full">
                      <div className="flex flex-col items-center text-center mb-0">
                        <div className="flex items-center justify-center gap-1">
                          <h3 className="text-base sm:text-lg font-semibold">{mentor.name}</h3>
                          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                            <Link href="#" aria-label={`${mentor.name}'s LinkedIn profile`}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="#0A66C2"
                                className="w-4 sm:w-[18px] h-4 sm:h-[18px]"
                              >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            </Link>
                          </motion.div>
                        </div>

                        <p className="text-gray-600 text-center text-xs sm:text-sm mt-0.5 mb-1 sm:mb-2">
                          {mentor.position}
                        </p>
                      </div>

                      <p className={`text-gray-700 text-center ${
                        cardsPerPage === 1 
                          ? "text-sm sm:text-base h-[80px] sm:h-[100px]" 
                          : cardsPerPage === 2 
                            ? "text-xs sm:text-sm h-[70px] sm:h-[90px]" 
                            : "text-xs sm:text-sm h-[60px] sm:h-[85px]"
                      } overflow-hidden mt-0 mb-2 sm:mb-3`}>
                        {mentor.description}
                      </p>
                    </div>

                    <motion.button
                      className="bg-black text-white w-full py-1.5 sm:py-2 rounded-md font-medium hover:bg-gray-800 transition-colors flex-shrink-0 text-sm sm:text-sm mt-1"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Profile
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}