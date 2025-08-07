"use client"
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


export default function Footer() {
     const items = [{
        name:"Home", item:"/"
    },
    {
        name:"About Us", item:"/aboutus"
    },
    {
        name:"Library", item:"/library"
    },
    {
        name:"Major", item:"/major"
    },
    {
        name:"Calc", item:"/gpa"
    }, 
    {
        name:"PomoTimer", item:"/pomo",
    },
    {
        name:"Contact Us", item:"/contact"
    },
]

    return(
        <footer className="bg-linear-to-t from-indigo-600 to-sky-400  backdrop-blur-[1px]">
            <div className="container mx-auto px-4 py-8">
                <div className="flex md:flex-row flex-col gap-4 md:items-center justify-between">
                    <div>
                        <div className="flex items-start space-x-2">
                            <Link className="cursor-pointer flex items-center" href={"/"}>
                                <Image src={"/ftilogo.png"} width={50} height={50} alt="logo"/>
                                <span className="font-bold text-2xl">ACADS-FTI</span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl">Content</h3>
                        <div className="space-y-2 grid grid-cols-3">
                            {items.map((item, index) => (
                                <div className="cursor-pointer" key={index}>
                                    <Link href={item.item} className="text-white/20 hover:text-white">{item.name}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}