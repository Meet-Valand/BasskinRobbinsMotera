"use client";
import { useState, useEffect } from "react";
import { motion ,  AnimatePresence } from "framer-motion";
import Image from "next/image";
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
       <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-6 bg-white/10 px-4 py-2 rounded-full">
              {[
                 { name: "Google Maps", icon: "/map.svg", link: "https://maps.app.goo.gl/XJA61C2btZYZqCpm8" },
                { name: "Instagram", icon: "/instagram.svg", link: "https://www.instagram.com/baskinrobbins_motera" },
                { name: "Swiggy", icon: "/swiggy.svg", link: "https://www.swiggy.com/menu/960231" },
               { name: "Zomato", icon: "/zomato.svg", link: "https://link.zomato.com/xqzv/rshare?id=8885658330563de5" },
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" className="flex items-center justify-center w-10 h-10">
                  <Image src={item.icon} alt={item.name} width={30} height={30} className="hover:scale-110 transition-transform" />
                </a>
              ))}
            </footer>
      
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