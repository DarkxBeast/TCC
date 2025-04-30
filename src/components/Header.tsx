"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
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
import { usePathname } from 'next/navigation';

export default function Header() {
  // State management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenus, setMobileSubMenus] = useState({
    company: false,
    exploreSchools: false,
    institution: false,
    student: false
  });

  const toggleMobileSubmenu = (key: keyof typeof mobileSubMenus) => {
    setMobileSubMenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const scrollThreshold = 30;
  const controls = useAnimation();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    if (path === '/companies') {
      return pathname === '/companies' || pathname.startsWith('/companies/');
    }
    if (path === '/institutions') {
      return pathname === '/institutions' || pathname.startsWith('/institutions/');
    }
    return false;
  };

  // Memoized navigation options
  const navigationOptions = useMemo(() => ({
    company: [
      { title: "Post a Job", href: "/coming-soon" },
      { title: "Post a Project", href: "/coming-soon" },
      { title: "Explore Schools", href: "/coming-soon", hasSubmenu: true },
      { title: "Compare Institutions", href: "/coming-soon" },
      { title: "Find right talent for me", href: "/coming-soon" },
    ],
    exploreSchools: [
      { title: "Explore B Schools", href: "/coming-soon" },
      { title: "Explore T Schools", href: "/coming-soon" },
      { title: "Explore Universities", href: "/coming-soon" },
    ],
    institution: [
      { title: "Partner with us", href: "/coming-soon" },
      { title: "Campus ambassador", href: "/coming-soon" },
      { title: "Placement support", href: "/coming-soon" },
      { title: "Hire our students", href: "/coming-soon" },
    ],
    student: [
      { title: "Find Courses", href: "/coming-soon" },
      { title: "Find Jobs & Internships", href: "/coming-soon" },
      { title: "Find Projects", href: "/coming-soon" },
      { title: "Find Mentors", href: "/coming-soon" },
      { title: "Build Resume", href: "/coming-soon" },
    ],
  }), []);

  // Track screen size with debounced resize handler
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 150); // Debounce resize events
    };
    
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Track scroll position with RAF for performance
  useEffect(() => {
    let rafId: number;
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          setIsScrolled(lastKnownScrollPosition > scrollThreshold);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (rafId) window.cancelAnimationFrame(rafId);
      };
    }
  }, [scrollThreshold]);

  // Add a function to check if the current page should have logo animation
  const shouldAnimateLogo = (path: string) => {
    return path === '/' || path.startsWith('/companies') || path.startsWith('/institutions');
  };

  // Logo dimensions based on page type
  const getLogoDimensions = () => {
    const isAnimatedPage = shouldAnimateLogo(pathname);
    if (isAnimatedPage) {
      return screenWidth < 768 ? 150 : screenWidth < 1024 ? 150 : 180;
    }
    // Larger dimensions for non-animated pages to fit header height
    return screenWidth < 768 ? 120 : screenWidth < 1024 ? 140 : 160;
  };

  // Animate logo with optimized animation controls
  useEffect(() => {
    if (!shouldAnimateLogo(pathname)) {
      // For pages without animation, keep the logo in a fixed position on the left
      controls.start({
        top: 0,
        left: screenWidth < 768 ? "1rem" : "1.5rem",
        marginTop: "0.5rem", // Reduced top margin to center vertically
        marginLeft: "-3.5rem",
        scale: 2,
        transition: { duration: 0.3, ease: "easeOut" }
      });
      return;
    }

    if (isScrolled) {
      controls.start({
        top: screenWidth < 768 ? "-20px" : "-30px",
        left: screenWidth < 768 ? "-20px" : "-30px",
        marginTop: 0,
        marginLeft: 0,
        scale: 0.5,
        transition: { duration: 0.3, ease: "easeInOut" }
      });
    } else {
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
  }, [isScrolled, controls, screenWidth, pathname]);

  const underlineStyles = "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left";

  return (
    <>
      <header className="w-full h-[88px] border-b fixed top-0 left-0 bg-[#161616] z-50">
        <div className="flex items-center relative h-[80px]">
          {/* Logo Section */}
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
            <Link href="/">
            <Image
              src="/images/logo.jpg"
              alt="The Career Company Logo"
              width={getLogoDimensions()}
              height={getLogoDimensions()}
              className={cn(
                "object-contain",
                !shouldAnimateLogo(pathname) && "max-h-[50px]"
              )}
              priority
            />
            </Link>
          </motion.div>

          {/* Spacer for logo */}
          <div className={cn(screenWidth < 768 ? "w-[150px]" : "w-[180px]", "h-[80px]")}></div>

          {/* Main Navigation */}
          <nav className="flex-1 flex items-center justify-end pr-6">
            {/* Desktop Navigation Menu */}
            <ul className="hidden md:flex space-x-8 items-center">
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href="/companies">
                        <NavigationMenuTrigger
                          className={`text-[15px] text-white font-medium bg-transparent hover:bg-transparent hover:text-white transition-colors relative ${underlineStyles} ${
                            isActive('/companies') ? 'after:scale-x-100' : ''
                          }`}
                        >
                          For Companies
                        </NavigationMenuTrigger>
                      </Link>
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
                          {navigationOptions.company.map((option) => (
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
                                      {navigationOptions.exploreSchools.map((subOption) => (
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
                  className={`text-[15px] text-white font-medium hover:text-white transition-colors inline-block relative ${underlineStyles} ${
                    isActive('/institutions') ? 'after:scale-x-100' : ''
                  }`}
                >
                  For Institutions
                </Link>
              </li>
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                    <Link href="/">
                      <NavigationMenuTrigger 
                        className={`text-[15px] text-white font-medium bg-transparent hover:bg-transparent hover:text-white transition-colors relative ${underlineStyles} ${
                          isActive('/') ? 'after:scale-x-100' : ''
                        }`}
                      >
                        For Students & Professionals
                      </NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="grid w-[240px] gap-2 p-4">
                          {navigationOptions.student.map((option) => (
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
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={cn("md:hidden overflow-hidden transition-all duration-300 ease-in-out", 
          mobileMenuOpen ? "max-h-[800px]" : "max-h-0")}>
          <div className="px-6 py-6 space-y-4 bg-[#161616] border-t">
            {/* Company Section */}
            <div className="border-b pb-4">
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => toggleMobileSubmenu('company')}
              >
                <div className="text-base text-white font-medium">For Companies</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className={cn("w-4 h-4 transition-transform", 
                    mobileSubMenus.company ? "rotate-180" : "")}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {mobileSubMenus.company && (
                <div className="mt-4 ml-4 space-y-2">
                  {navigationOptions.company.map((option, index) => (
                    <div key={index}>
                      {option.hasSubmenu ? (
                        <>
                          <div 
                            className="flex items-center justify-between cursor-pointer" 
                            onClick={() => toggleMobileSubmenu('exploreSchools')}
                          >
                            <div className="text-sm text-white">{option.title}</div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className={cn("w-3 h-3 transition-transform",
                                mobileSubMenus.exploreSchools ? "rotate-180" : "")}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          {mobileSubMenus.exploreSchools && (
                            <div className="mt-2 ml-4 space-y-2">
                              {navigationOptions.exploreSchools.map((subOption, subIndex) => (
                                <div key={subIndex}>
                                  <Link 
                                    href={subOption.href} 
                                    className="text-sm text-white hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subOption.title}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link 
                          href={option.href} 
                          className="text-sm text-white hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {option.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Institution Section */}
            <div className="border-b pb-4">
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => toggleMobileSubmenu('institution')}
              >
                <div className="text-base text-white font-medium">For Institutions</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className={cn("w-4 h-4 transition-transform",
                    mobileSubMenus.institution ? "rotate-180" : "")}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {mobileSubMenus.institution && (
                <div className="mt-4 ml-4 space-y-2">
                  {navigationOptions.institution.map((option, index) => (
                    <div key={index}>
                      <Link 
                        href={option.href} 
                        className="text-sm text-white hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {option.title}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Student Section */}
            <div className="border-b pb-4">
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => toggleMobileSubmenu('student')}
              >
                <div className="text-base text-white font-medium">For Students & Professionals</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className={cn("w-4 h-4 transition-transform",
                    mobileSubMenus.student ? "rotate-180" : "")}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {mobileSubMenus.student && (
                <div className="mt-4 ml-4 space-y-2">
                  {navigationOptions.student.map((option, index) => (
                    <div key={index}>
                      <Link 
                        href={option.href} 
                        className="text-sm text-white hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {option.title}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
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
      <div className="h-[80px]" />
    </>
  );
}