import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormPopup({ isOpen, onClose }: FormPopupProps) {
  // Handle body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle form initialization
  useEffect(() => {
    if (isOpen) {
      const formContainer = document.getElementById("zf_div_rD9RNlQ9iFCQjN5Db4nsbnGxm_cTapujtYt6ZppwDHM");
      if (formContainer) {
        formContainer.innerHTML = ""; // Clear any existing content
        
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = `
          (function() {
            try {
              var f = document.createElement("iframe");
              f.src = 'https://forms.zohopublic.in/thecareercompany1/form/JoinourWaitlist/formperma/rD9RNlQ9iFCQjN5Db4nsbnGxm_cTapujtYt6ZppwDHM?zf_rszfm=1';
              f.style.border = "none";
              f.style.width = "100%";
              f.style.height = "100%";
              f.style.minHeight = "600px";
              f.style.overflow = "hidden";
              f.setAttribute("aria-label", 'Join our Waitlist');
              var d = document.getElementById("zf_div_rD9RNlQ9iFCQjN5Db4nsbnGxm_cTapujtYt6ZppwDHM");
              d.appendChild(f);
            } catch (e) {}
          })();
        `;
        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
      }
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-3 sm:px-0"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-white rounded-lg shadow-lg w-full max-w-[600px] h-[88vh] mt-24 flex flex-col overflow-hidden"
          >
            {/* Close Button */}
            <button
              type="button"
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-black text-2xl font-bold z-10"
              onClick={onClose}
              aria-label="Close"
            >
              &times;
            </button>
            {/* Zoho Form */}
            <div
              id="zf_div_rD9RNlQ9iFCQjN5Db4nsbnGxm_cTapujtYt6ZppwDHM"
              className="w-full h-full"
              style={{ overflow: "hidden" }}
            ></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}