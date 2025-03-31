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
 
      

        
  
      
        </div>
    )
}
