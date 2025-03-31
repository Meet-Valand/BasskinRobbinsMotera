

"use client";
import Image from "next/image";
import { Sour_Gummy } from "next/font/google"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sourGummy =  Sour_Gummy({
   subsets : ["latin"],
   weight : "400",
   variable : "--font-sourGummy"
}) 

export default function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);
  const images = [
    "/Bg1.webp",
    "/Bg2.webp",
    "/Bg3.webp",
    "/Bg4.webp",
    "/Bg5.webp",
    "/Bg7.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${sourGummy.className} relative min-h-screen flex flex-col justify-center items-center overflow-y-auto bg-black text-white`}>
      
      {/* Background Slideshow */}
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          layout="fill"
          objectFit="cover"
          className={`absolute transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Smooth Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70"></div>

      <div className="relative top-10 flex flex-col items-center text-center  mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/shopLogo.png"
            alt="Logo"
            width={120}
            height={120}
            className="rounded-full"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className=" relative text-white  text-4xl font-bold"
        >
          Anand Dessert
        </motion.h1>
      </div>

      {/* Rate Us & Contact Us Buttons */}
      <div className="relative mt-6 top-25 flex gap-6">
        <a
          href="https://g.co/kgs/bkULVz3"
          className="px-6 py-3 text-lg   text-white bg-white/20 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/30"
        >
          Rate Us
        </a>
        <a
          href="https://wa.me/message/4IO56AZIW656D1"
          className="px-6 py-3 text-lg  text-white bg-white/20 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/30"
        >
          Contact Us
        </a>
      </div>

 
      
      {/* Footer with Social Links */}
      <footer className="absolute bottom-0 flex space-x-6 bg-white/10 px-4 py-2 rounded-full">
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
      </div>
    
  );
}
