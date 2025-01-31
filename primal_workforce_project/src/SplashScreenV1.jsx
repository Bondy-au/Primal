
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaHardHat, FaTools, FaArrowRight, FaTruck } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SplashScreenV1({ onComplete }) {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(true);
    }, 2000);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-orange-700 text-white p-6 text-center"
    >
      <motion.div 
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1, rotate: [0, 2, -2, 0] }} 
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="text-center"
      >
        <h1 className="text-7xl whitespace-nowrap font-extrabold tracking-wide">PRIMAL WORKFORCE</h1>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, y: [-10, 0] }} 
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-lg mt-3 font-light">The easiest way to hire, manage, and equip your workforce</p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="flex flex-col gap-4 mt-10 w-full max-w-xs"
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-lg px-6 py-3 shadow-lg" onClick={() => window.open('https://form.jotform.com/243310022884852', '_blank', 'noopener,noreferrer')}> 
            Get Labour Now
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button className="bg-blue-500 hover:bg-blue-600 text-lg px-6 py-3 shadow-lg" onClick={() => window.open('https://form.jotform.com/250305470749053', '_blank', 'noopener,noreferrer')}>
            Equipment Delivered Yesterday
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
