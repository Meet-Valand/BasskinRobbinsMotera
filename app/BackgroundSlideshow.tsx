// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { Sour_Gummy } from "next/font/google";

// const sourGummy = Sour_Gummy({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-sour-gummy", // Define a CSS variable
// });


// export default function BackgroundSlideshow() {
//   const [index, setIndex] = useState(0);
//   const images = [
//     "/Bg1.webp",
//     "/Bg2.webp",
//     "/Bg3.webp",
//     "/Bg4.webp",
//     "/Bg5.webp",
//     "/Bg6.webp",
//     "/Bg7.webp",
//     "/Bg8.webp",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={`${sourGummy.variable} relative w-full h-screen overflow-hidden`}>
//       {images.map((img, i) => (
//         <Image
//           key={i}
//           src={img}
//           alt={`Slide ${i + 1}`}
//           layout="fill"
//           objectFit="cover"
//           className={`absolute transition-opacity duration-1000 ${
//             i === index ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       ))}
//    {/* Smooth Gradient Blur Effect */}
//    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 backdrop-blur-[2px]"></div>

// {/* Centered Logo */}
// <div className="absolute inset-0 flex justify-center items-center">
//   <div className="w-30 h-30 absolute top-1 left-1/2.3 rounded-full flex justify-center items-center  ">
//     <Image
//       src="/shopLogo.png"
//       alt="Logo"
//       width={100}
//       height={100}
//       className="rounded-full"
//     />
//   </div>
//   <h1 className={`${sourGummy.variable} text-black size-6 absolute top-[100px] left-1/4 w-60 font-bold text-3xl`}>Anand Dessert</h1>
// </div>
    
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Sour_Gummy } from "next/font/google";

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sour-gummy", // Define a CSS variable
});

export default function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);
  const images = [
    "/Bg1.webp",
    "/Bg2.webp",
    "/Bg3.webp",
    "/Bg4.webp",
    "/Bg5.webp",
    "/Bg6.webp",
    "/Bg7.webp",
    "/Bg8.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${sourGummy.variable} relative w-full h-screen overflow-hidden`}>
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
      {/* Smooth Gradient Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 backdrop-blur-[2px]"></div>

      {/* Centered Logo */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-30 h-30 absolute top-1 left-1/2.3 rounded-full flex justify-center items-center">
          <Image
            src="/shopLogo.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <h1 className={`${sourGummy.variable} text-black size-6 absolute top-[100px] left-1/4 w-60 font-bold text-3xl`}>
          Anand Dessert
        </h1>
      </div>
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 animate-fadeIn">
  <a
    href="https://www.google.com/search?sca_esv=c2b470a1b23ad7ba&sxsrf=AHTn8zplrAmGPGFiW0JSJPe5u-j02sHBDQ:1742917098225&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzSLIHTo_72vJ3KXIf1Ga0maFKpL4uHs22vbqYK_3M4uCap7qIlJdRe_pT2T_2wbstu94QHvovnyODFdTkdUZAUF7FVS6&q=Baskin+Robbins+Reviews&sa=X&ved=2ahUKEwiHzoyUyKWMAxV678kDHdy5NXIQ0bkNegQIOhAE&biw=1280&bih=665&dpr=1.5#lrd=0x395e839b036bfaab:0xc29f39f71d15ad1f,3,,,,"
    className="px-6 py-3 text-lg font-semibold text-white rounded-full shadow-md border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-lg hover:bg-white/20 hover:backdrop-blur-lg 
      animate-pulse"
  >
    Rate Us !
  </a>
</div>
      {/* Footer with Social Media Links */}
      <footer className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 bg-blend-color px-4 py-2 rounded-full">
  {[
     { name: "Google Maps", icon: "/map.svg", link: "https://maps.app.goo.gl/XJA61C2btZYZqCpm8" },
     { name: "Instagram", icon: "/instagram.svg", link: " https://www.instagram.com/baskinrobbins_motera?igsh=MWpoajkydmtybHJudQ==" },
    { name: "WhatsApp", icon: "/whatsApp.svg", link: "  https://wa.me/message/4IO56AZIW656D1" },
    { name: "Swiggy", icon: "/swiggy.svg", link: "https://www.swiggy.com/menu/960231?source=sharing " },
    { name: "Zomato", icon: "/zomato.svg", link: " https://link.zomato.com/xqzv/rshare?id=8885658330563de5" },  
  ].map((item) => (
    <a
      key={item.name}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10"
    >
      <Image
        src={item.icon}
        alt={item.name}
        width={30}
        height={30}
        className="hover:scale-110 transition-transform"
      />
    </a>
  ))}
</footer>
    </div>
  );
}
