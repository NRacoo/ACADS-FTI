"use client"
import { jurusanDept } from "@/components/hooks/data";
import { Card } from "@/components/ui/card";
import {motion, AnimatePresence} from "framer-motion";
import { useState } from "react";


export default function MajorPage(){
    const [openIndex, setOpenIndex] = useState<number|null>(null)
    return(
        <div className="min-h-screen bg-linear-to-t from-sky-400 py-20">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold">Jurusan</h1>
            </div>

            <section className="py-10 mx-auto">
                <div className="grid grid-cols-1 px-4 gap-4">
                    {jurusanDept.map((item, index) => (
                        <Card key={index} className="bg-neutral-300/20 backdrop-blur-[1px] dark:hover:bg-neutral-300/30 border border-neutral-400/30">
                            <motion.button onClick={() => setOpenIndex(openIndex === index ?  null : index)}
                                className="w-full flex items-center justify-center">
                                    <h1 className="text-center font-bold">{item.name}</h1>
                            </motion.button>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}