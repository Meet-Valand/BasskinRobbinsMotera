
"use client";
import Image from "next/image";
import { Sour_Gummy } from "next/font/google";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sourGummy",
});

export default function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);
  const images = ["/NewBg5.jpg", "/NewBg2.jpg","/NewBg10.jpg","/NewBg4.jpg","/NewBg1.jpg","/NewBg6.jpg","/NewBg7.jpg","/NewBg8.jpg","/NewBg9.jpg","/NewBg3.jpg",];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${sourGummy.className} relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white px-4`}
    >
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[index]}
            alt={`Slide ${index + 1}`}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 z-10"></div>

      {/* Logo & Heading */}
      <div className="relative z-20 mt-24 flex flex-col items-center text-center space-y-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/shopLogo.png"
            alt="Logo"
            width={120}
            height={120}
            className=""
          />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold drop-shadow-lg"
        >
          Anand Dessert
        </motion.h1>
      </div>

      {/* Buttons */}
      <motion.div
        className="relative z-20 mt-10 flex gap-4 flex-wrap justify-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {[
          {
            label: "Rate Us",
            href: "https://g.co/kgs/bkULVz3",
          },
          {
            label: "Contact Us",
            href: "https://wa.me/message/4IO56AZIW656D1",
          },
        ].map((btn, i) => (
          <a
            key={i}
            href={btn.href}
            className="px-6 py-3 text-lg text-white bg-white/20 rounded-full backdrop-blur-md shadow-md hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            {btn.label}
          </a>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="fixed bottom-13 z-20 flex space-x-4 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {[
          { name: "Maps", icon: "/map.svg", link: "https://maps.app.goo.gl/XJA61C2btZYZqCpm8" },
          { name: "Instagram", icon: "/instagram.svg", link: "https://www.instagram.com/baskinrobbins_motera" },
          { name: "Swiggy", icon: "/swiggy.svg", link: "https://www.swiggy.com/menu/960231" },
          { name: "Zomato", icon: "/zomato.svg", link: "https://link.zomato.com/xqzv/rshare?id=8885658330563de5" },
        ].map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
            <Image src={item.icon} alt={item.name} width={28} height={28} />
          </a>
        ))}
      </motion.footer>

      {/* Fun Facts */}
      <motion.div
        className="absolute bottom-24 md:bottom-32 left-4 text-white text-sm md:text-lg z-20 space-y-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p>Did you know?</p>
        <p>🏆 We are currently the best Baskin Robbins in Gujarat</p>
      <p className="fixed bottom-4 right-4 text-sm md:text-base text-white bg-black/40 px-3 py-1 rounded-lg shadow-md backdrop-blur-sm">
        * We accept bulk orders
      </p>
      </motion.div>
    </div>
  );
}
