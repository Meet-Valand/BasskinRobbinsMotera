
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className="relative min-h-screen overflow-y-auto bg-black text-white">
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

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/shopLogo.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-4xl font-bold mt-4"
        >
          Anand Dessert
        </motion.h1>
      </div>

      {/* Best-Selling Ice Creams - Scrollable */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 top-150 flex gap-6 px-6 py-6 overflow-x-auto scrollbar-hidden"
      >
        {["Mississippi Mud","Beligan Bliss", , "Fruit Overload", "California Pistachio", ].map((name, i) => (
          <div
            key={i}
            className="bg-white/20 p-4 rounded-lg min-w-[160px] text-center backdrop-blur-md"
          >
            <p className="font-semibold">{name}</p>
            <a href="https://www.swiggy.com/menu/960231" className="mt-2 block text-sm bg-pink-500 px-3  py-2 rounded-md">
              Order Now
            </a>
          </div>
        ))}
      </motion.div>
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

    </div>
  );
}
