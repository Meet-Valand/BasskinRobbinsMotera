"use client";
import { useState, useEffect } from "react";
import { motion ,  AnimatePresence } from "framer-motion";

export default function Footer() {
    const [index, setIndex] = useState(0);
    const colors = [
      "#52402c", // Color 1
      "#44372c", // Color 2
      "#2f3a2b", // Color 3
      "#54514a", // Color 4
      "#351b2f", // Color 5
      "#44453e", // Color 6
    ];
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 5000);
        return () => clearInterval(interval);
      }, []);
    return(
        <div>
              <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-60 top-228 backdrop-blur-4xl"
          style={{ backgroundColor: colors[index] }}
        />
      </AnimatePresence>
 
      
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-blend-saturation mx-2 px-8 my-3 py-3 rounded-lg flex gap-6 text-white text-sm font-semibold backdrop-blur-md"
        >
          {[
            "100+ Customers Weekly",
            "300+ Customers Monthly",
            "100+ Online Orders Weekly",
          ].map((text, i) => (
            <div key={i} className="px-3 py-2 bg-white/10 rounded-md">
              {text}
            </div>
          ))}
        </motion.div>

        
    <div className="relative mx-9 my-3 left-1/2 transform -translate-x-1/2 flex gap-6">
         <a
          href="https://g.co/kgs/bkULVz3
"
          className="px-6 py-3 text-lg font-semibold text-white bg-white/20 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/30"
        >
          Rate Us
        </a>
        <a
          href=" https://wa.me/message/4IO56AZIW656D1
"
          className="px-6 py-3 text-lg font-semibold text-white bg-white/20 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/30"
        >
          Contact Us
        </a>

      </div>
      
        </div>
    )
}
//1 -
//2 -
//3 -  
// 4 -
// 5 -
//6 -