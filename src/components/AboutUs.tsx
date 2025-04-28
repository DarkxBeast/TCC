"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
  // Create ref for the video element
  const videoRef = useRef<HTMLVideoElement>(null);
  // State to track if video is playing
  const [isPlaying, setIsPlaying] = useState(false);
  // State for video time tracking
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // State to track hover
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle play/pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(error => {
        console.log("Play was prevented:", error);
        // If autoplay is prevented, we should update our state to match reality
        setIsPlaying(false);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  // Function to format time in MM:SS format
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Update time state when video time changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    };

    // Set up event listeners
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('durationchange', updateDuration);

    return () => {
      // Clean up event listeners
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('durationchange', updateDuration);
    };
  }, [videoRef]);

  // Handle seekbar interaction
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTime = parseFloat(e.target.value);
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <section id="about-us" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 relative">
        {/* White container with content */}
        <div className="ml-auto w-full md:w-[85%] lg:w-[75%] p-6 md:p-12 pt-12 md:pt-16 bg-white rounded-[50px] shadow-lg border border-[#D9D9D9] relative z-10">
          <div className="md:ml-[35%] lg:ml-[30%] xl:ml-[25%]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#090914] mb-8">
              About Us
            </h2>

            <div className="space-y-6 text-[#18181B] text-sm md:text-[14px] leading-6">
              <p>
                The Career Company was born out of a passion to accelerate
                career journeys. Our founder, with years of experience leading
                Career Development Services at two premier institutes— IIM
                Nagpur and IIM Udaipur—has successfully guided over 1,500 IIM
                graduates to the right roles. At the IIMs, every student
                received 1:1 career support, yet it still takes them 3-4 years
                to figure out the right role.
              </p>
              <p>
                On the other hand, 10 million people join the workforce in India
                every year, and most don&apos;t get any 1:1 career support. The
                Career Company started with a vision to provide 1:1 career
                support at scale, helping people visualize their careers 10-15
                years so they can make conscious decisions early on, saving
                years of trial and error. We support you at every step of your
                career —just like a Journey with Saarthi for your career.
                Therefore, we are not just a resume company or a preparation
                company, or placement company but The Career Company.
              </p>
            </div>

            <div className="mt-8 md:mt-12">
  <Link
    href="https://tally.so/r/3xjJyJ"
    target="_blank" // Opens the link in a new tab
    rel="noopener noreferrer" // Improves security for external links
    className="inline-block bg-[#FF9E44] text-black font-bold py-3 px-6 md:py-3.5 md:px-8 rounded-full text-sm md:text-base transition-transform hover:scale-105"
  >
    Join Our Talent Pool
  </Link>
</div>
          </div>
        </div>

        {/* Video container with responsive positioning */}
        <div className="w-full lg:w-[40%] mt-8 lg:mt-0 lg:absolute lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:z-20">
          <motion.div
            className="rounded-[15px] overflow-hidden shadow-xl bg-black aspect-[750/600] border border-gray-200/20 relative"
            style={{
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              suppressHydrationWarning
            >
              <source src="/videos/career-company.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Custom play/pause button */}
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={togglePlay}
            >
              <div className={`${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'} transition-opacity duration-300 bg-black/30 w-20 h-20 rounded-full flex items-center justify-center`}>
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>

            {/* Custom video controls overlay */}
            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              {/* Seekbar */}
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="video-seekbar"
                aria-label="Video progress"
                style={{
                  backgroundSize: `${(currentTime / (duration || 1)) * 100}% 100%`
                }}
              />
              
              {/* Timer display */}
              <div className="flex justify-between text-white text-xs mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
