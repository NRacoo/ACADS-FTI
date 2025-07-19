"use client"
import { forwardRef} from "react";
import {motion} from "framer-motion";
import { ExpandableCardDemo } from "../expandables-card";

const Feature = forwardRef<HTMLElement>((props, externalref) => {
    
    return(
        <motion.section ref ={externalref} 
        id="Feature" 
        className="min-h-screen md:py-16">
                <div className="text-center">
                    <h2 className="font-bold text-6xl md:py-4">Features</h2>
                </div>

                <motion.div
                className="py-2"
                whileInView={{opacity: 1, y:0}}
                initial={{opacity:0, y:100}}
                transition={{ease:"easeInOut", duration: 0.7}}>
                    <ExpandableCardDemo/>
                </motion.div>
        </motion.section>
    )
})

export default Feature;