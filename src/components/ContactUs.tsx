"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ContactUsProps {
  formSource?: "Institutions" | "Companies";
}

export default function ContactUs({ formSource }: ContactUsProps) {
  const [activeTab, setActiveTab] = useState<"Institutions" | "Companies">("Institutions");

  // Retrieve the active tab from localStorage or formSource on component mount
  useEffect(() => {
    if (formSource) {
      // If formSource is provided, prioritize it
      setActiveTab(formSource);
    } else {
      // Otherwise, fall back to localStorage
      const savedTab = localStorage.getItem("contactTab") as "Institutions" | "Companies";
      if (savedTab === "Institutions" || savedTab === "Companies") {
        setActiveTab(savedTab);
      }
    }
  }, [formSource]);

  // Save the active tab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("contactTab", activeTab);
  }, [activeTab]);

  // Mapping for forms
  const forms = {
    Institutions: "https://forms.zohopublic.in/thecareercompany1/form/ContactUs2/formperma/ZDy9VAOAz_VqWfGb_DWmANrg9R2K31-CdWWxDjQ7Zr8",
    Companies: "https://forms.zohopublic.in/thecareercompany1/form/ContactUsCompanies/formperma/Mm5jYNZ8wY1aaNwiI1jSFwl-_SVZPa6UZU6ACrKncfw",
  };

  return (
    <section id="contact-us" className="w-full overflow-hidden py-6 sm:py-8 md:py-16">
      <div className="flex flex-col md:flex-row mx-auto">
        {/* Left side - Contact text with background image */}
        <div className="md:w-1/2 relative min-h-[300px] sm:min-h-[400px] md:min-h-[600px] overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/contact-us.jpg"
              alt="Modern office interior"
              fill
              className="object-cover grayscale brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 p-4 sm:p-6 md:p-10 w-full flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white max-w-2xl">
              Contact Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl px-4">
              Have questions or need assistance? Feel free to reach out to us. We&apos;re here to help!
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="md:w-1/2 bg-white px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-10 md:py-16 flex items-center justify-center">
          <div className="w-full max-w-[600px] mx-auto">
            {/* Tab Switcher */}
            <div className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 p-1 rounded-full border-2 border-gray-900 w-fit mx-auto">
              <button
                className={`px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-all ${
                  activeTab === "Institutions"
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("Institutions")}
              >
                Institutions
              </button>
              <button
                className={`px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-all ${
                  activeTab === "Companies"
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("Companies")}
              >
                Companies
              </button>
            </div>

            {/* Form */}
            <div className="space-y-4 sm:space-y-5 flex justify-center">
              <div className="w-full h-[800px]">
                <iframe
                  src={forms[activeTab]} // Dynamically load the form based on activeTab
                  className="w-full h-full border-none"
                  aria-label={`Contact Us for ${activeTab}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}