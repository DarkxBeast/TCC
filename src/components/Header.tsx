"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCompanySubMenu, setMobileCompanySubMenu] = useState(false);
  const [mobileExploreSchoolsSubMenu, setMobileExploreSchoolsSubMenu] = useState(false);
  const [mobileInstitutionSubMenu, setMobileInstitutionSubMenu] = useState(false);
  const [mobileStudentSubMenu, setMobileStudentSubMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1200); // Default to desktop
  const scrollThreshold = 30; // Reduced from 100 to 30 to trigger animation earlier
  const controls = useAnimation();

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    // Set initial size
    setScreenWidth(window.innerWidth);
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > scrollThreshold);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animate logo based on scroll position with responsive sizing
  useEffect(() => {
    if (isScrolled) {
      controls.start({
        top: screenWidth < 768 ? "-20px" : "-30px",
        left: screenWidth < 768 ? "-20px" : "-30px",
        marginTop: 0,
        marginLeft: 0,
        scale: screenWidth < 768 ? 0.5 : 0.5,
        transition: { duration: 0.3, ease: "easeInOut" }
      });
    } else {
      // Responsive positioning based on screen size
      const isMobile = screenWidth < 768;
      const isTablet = screenWidth >= 768 && screenWidth < 1024;
      
      controls.start({
        top: 0,
        left: isMobile ? "0.5rem" : isTablet ? "1.5rem" : "2rem",
        marginTop: isMobile ? "0.75rem" : "2rem",
        marginLeft: isMobile ? "0.75rem" : isTablet ? "2rem" : "4rem",
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" }
      });
    }
  }, [isScrolled, controls, screenWidth]);

  const companyOptions = [
    { title: "Post a Job", href: "/coming-soon" },
    { title: "Post a Project", href: "/coming-soon" },
    { title: "Explore Schools", href: "/coming-soon", hasSubmenu: true },
    { title: "Compare Institutions", href: "/coming-soon" },
    { title: "Find right talent for me", href: "/coming-soon" },
  ];

  const exploreSchoolsOptions = [
    { title: "Explore B Schools", href: "/coming-soon" },
    { title: "Explore T Schools", href: "/coming-soon" },
    { title: "Explore Universities", href: "/coming-soon" },
  ];

  const institutionOptions = [
    { title: "Partner with us", href: "/coming-soon" },
    { title: "Campus ambassador", href: "/coming-soon" },
    { title: "Placement support", href: "/coming-soon" },
    { title: "Hire our students", href: "/coming-soon" },
  ];

  const studentOptions = [
    { title: "Find Courses", href: "/coming-soon" },
    { title: "Find Jobs & Internships", href: "/coming-soon" },
    { title: "Find Projects", href: "/coming-soon" },
    { title: "Find Mentors", href: "/coming-soon" },
    { title: "Build Resume", href: "/coming-soon" },
  ];

  return (
    <header className="w-full h-[88px] border-b fixed top-0 left-0 bg-[#161616] z-50">
      <div className="flex items-center relative h-[80px]">
        {/* Logo Section with animation */}
        <motion.div 
          className="absolute z-[51]"
          initial={{ 
            top: 0, 
            left: "2rem", 
            marginTop: "2rem", 
            marginLeft: "4rem", 
            scale: 1 
          }}
          animate={controls}
        >
          <Image
            src="/images/logo.jpg"
            alt="The Career Company Logo"
            width={screenWidth < 768 ? 150 : screenWidth < 1024 ? 150 : 180}
            height={screenWidth < 768 ? 150 : screenWidth < 1024 ? 150 : 180}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Spacer for logo - adjust based on screen size */}
        <div className={`${screenWidth < 768 ? "w-[150px]" : "w-[180px]"} h-[80px]`}></div>

        {/* Main Navigation */}
        <nav className="flex-1 flex items-center justify-end pr-6">
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[15px] text-white font-medium bg-transparent hover:bg-transparent hover:text-white transition-colors">
                      For Companies
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[240px] gap-2 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/companies"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                            >
                              <div className="text-sm font-medium leading-none">
                                Overview
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {companyOptions.map((option) => (
                          <li key={option.title} className="relative">
                            {option.hasSubmenu ? (
                              <div className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-accent group relative">
                                <div className="flex justify-between items-center text-sm font-medium">
                                  {option.title}
                                  <ChevronRight className="h-4 w-4 ml-1" />
                                </div>
                                
                                {/* Submenu container that appears on hover */}
                                <div className="invisible group-hover:visible absolute left-0 z-20 top-0 ml-1 w-[220px] rounded-md border bg-white shadow-md">
                                  <ul className="grid gap-2 p-4">
                                    {exploreSchoolsOptions.map((subOption) => (
                                      <li key={subOption.title}>
                                        <Link
                                          href={subOption.href}
                                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                                        >
                                          <div className="text-sm font-medium leading-none">
                                            {subOption.title}
                                          </div>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ) : (
                              <NavigationMenuLink asChild>
                                <Link
                                  href={option.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {option.title}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            )}
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <Link
                href="/institutions"
                className="text-[15px] text-white font-medium hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                For Institutions
              </Link>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[15px] text-white font-medium bg-transparent hover:bg-transparent hover:text-white transition-colors">
                      For Students & Professionals
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[240px] gap-2 p-4">
                        {studentOptions.map((option) => (
                          <li key={option.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={option.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {option.title}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <Link
                href="/coming-soon"
                className="text-[15px] font-medium bg-[#FF9E44] hover:bg-[#ff9431] text-white px-6 py-2 rounded-full transition-colors"
              >
                Login
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden overflow-hidden transition-all duration-300 ease-in-out", mobileMenuOpen ? "max-h-[800px]" : "max-h-0")}>
        <div className="px-6 py-6 space-y-4 bg-[#161616] border-t">
          <div className="border-b pb-4">
            <div className="flex items-center justify-between" 
              onClick={() => setMobileCompanySubMenu(!mobileCompanySubMenu)}>
              <div className="text-base text-white font-medium">For Companies</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className={`w-4 h-4 transition-transform ${mobileCompanySubMenu ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {mobileCompanySubMenu && (
              <div className="mt-4 ml-4 space-y-2">
                <div>
                  <Link href="/companies" className="text-sm text-white hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" onClick={() => setMobileMenuOpen(false)}>
                    Overview
                  </Link>
                </div>
                {companyOptions.map((option, index) => (
                  <div key={index}>
                    {option.hasSubmenu ? (
                      <>
                        <div className="flex items-center justify-between" 
                          onClick={() => setMobileExploreSchoolsSubMenu(!mobileExploreSchoolsSubMenu)}>
                          <div className="text-sm text-white">{option.title}</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className={`w-3 h-3 transition-transform ${mobileExploreSchoolsSubMenu ? "rotate-180" : ""}`}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {mobileExploreSchoolsSubMenu && (
                          <div className="mt-2 ml-4 space-y-2">
                            {exploreSchoolsOptions.map((subOption, subIndex) => (
                              <div key={subIndex}>
                                <Link href={subOption.href} className="text-sm text-white hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" onClick={() => setMobileMenuOpen(false)}>
                                  {subOption.title}
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link href={option.href} className="text-sm text-white hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" onClick={() => setMobileMenuOpen(false)}>
                        {option.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-b pb-4">
            <div className="flex items-center justify-between" 
              onClick={() => setMobileInstitutionSubMenu(!mobileInstitutionSubMenu)}>
              <div className="text-base text-white font-medium">For Institutions</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className={`w-4 h-4 transition-transform ${mobileInstitutionSubMenu ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {mobileInstitutionSubMenu && (
              <div className="mt-4 ml-4 space-y-2">
                <div>
                  <Link href="/institutions" className="text-sm text-white hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" onClick={() => setMobileMenuOpen(false)}>
                    Overview
                  </Link>
                </div>
                {institutionOptions.map((option, index) => (
                  <div key={index}>
                    <Link href={option.href} className="text-sm text-white hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" onClick={() => setMobileMenuOpen(false)}>
                      {option.title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-b pb-4">
            <div className="flex items-center justify-between" 
              onClick={() => setMobileStudentSubMenu(!mobileStudentSubMenu)}>
              <div className="text-base text-white font-medium">For Students & Professionals</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className={`w-4 h-4 transition-transform ${mobileStudentSubMenu ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {mobileStudentSubMenu && (
              <div className="mt-4 ml-4 space-y-2">
                {studentOptions.map((option, index) => (
                  <div key={index}>
                    <Link href={option.href} className="text-sm text-white hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" onClick={() => setMobileMenuOpen(false)}>
                      {option.title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <Link
              href="/coming-soon"
              className="inline-block text-[15px] font-medium bg-[#FF9E44] hover:bg-[#ff9431] text-white px-6 py-2 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}