"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function JoinAsMentor() {
  return (
    <section id="join-mentor" className="w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row mx-auto">
        {/* Left side - Black background */}
        <motion.div 
          className="lg:w-1/2 bg-[#1A1A1A] text-white px-6 sm:px-10 lg:px-20 py-16 lg:py-24 
                    flex flex-col justify-between relative overflow-hidden min-h-[500px] lg:min-h-[700px]"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Background circle decoration */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full border border-gray-800 -translate-x-1/2 -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10">
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 lg:mb-12 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join us as<br />Mentor
            </motion.h2>
            
            <motion.p 
              className="text-lg lg:text-xl mb-12 lg:mb-20"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
            </motion.p>
            
            <motion.div 
              className="flex mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#FFD700" className="mr-1">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
              ))}
            </motion.div>
            
            <motion.p 
              className="text-lg lg:text-xl mb-12 lg:mb-20"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              If you&apos;re passionate about helping young people <br/> build their careers, we have the perfect opportunity <br/> for you. With just 20 minutes a week, you can make <br/> a real difference in someone&apos;s future. We provide <br/> the platform you need to give back to society and <br/> help shape the next generation of leaders. Join us <br/> today and be a part of something truly meaningful.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex items-center relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white mr-4 flex-shrink-0 relative">
              <Image 
                src="/images/founder.png" 
                alt="Founder" 
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium">Maharshi Vyas</p>
              <p className="text-sm text-gray-400">Founder, The Career Company</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right side - White background with form */}
        <motion.div 
          className="lg:w-1/2 bg-white px-6 sm:px-10 lg:px-20 py-16 lg:py-24"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join Us as Mentor
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-8 lg:mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            If you&apos;re passionate about helping young people build their careers,<br className="hidden md:block" />
            we have the perfect opportunity for you.
          </motion.p>

          <motion.div
            className="w-full min-h-[600px]"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <iframe 
              src="https://forms.zohopublic.in/thecareercompany1/form/JoinUsAsaMentor/formperma/-oe1GnlpRNkvzV6ptKFn7jLwI8cN-KbhHxubK2Q32J8"
              className="w-full h-[600px] border-none"
              aria-label="Contact Us"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}