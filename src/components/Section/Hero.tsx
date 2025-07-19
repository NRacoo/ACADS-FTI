"use client"
import { Button } from "../ui/button";
import Ballpit from "../ui/Ballpit";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";


export default function HeroSection({featureRef} : {featureRef : React.RefObject<HTMLElement | null>}) {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
      target: ref,
      offset:["start start", "end start"]

    })

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    

    return (
      <motion.section
      ref={ref}
      style={{opacity}}
        className="
          relative min-h-screen flex items-center justify-center
                       
          md:bg-[url('/Background.jpg')]
          md:bg-cover md:bg-center md:bg-no-repeat
        "
      >
       
        <div className="absolute inset-0 hidden md:block bg-black/40 backdrop-blur-sm z-0" />

        <div className="absolute inset-0 md:hidden block z-0">
            <Ballpit
            count={50}
            gravity={0.5}
            friction={1}
            wallbounce={0.95}
            followCursor={true}
            />
        </div>
  
        
        <div className="relative z-10 text-center sm:text-justify dark:text-white md:text-white px-4  grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-7"> 
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold ">Selamat Datang</h1>
                <p className="mt-2 text-xl font-semibold md:text-4xl "> ACADS FTI</p>
            </div>

            <div className=" flex flex-col sm:flex-row gap-2 mt-2 rounded-full col-span-6 dark">
                <Button
                className=" bg-[#B1C9EF]  hover:bg-[#D5DEEF]sm:w-fit md:w-full px-6 py-2  "
                >Mulai Belajar</Button>
                <Button
                className="bg-[#F0F3FA] hover:bg-[#D5DEEF] sm:w-fit md:w-full px-6 py-2"
                onClick={() => featureRef.current?.scrollIntoView({behavior:"smooth"})}
                >Lihat Semua Tautan</Button>
                
                
            </div>
        </div>
      </motion.section>
    );
  }
  