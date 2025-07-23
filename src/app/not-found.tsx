"use client"
import LightRays from "@/components/Section/dark-veil";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";


export default function NotFound() {
    const Router = useRouter()
    return (
        <div className="min-h-screen dark:bg-gray-950">
            <div className="absolute inset-0 z-0">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00000"
                    raysSpeed={1}
                    lightSpread={1}
                    fadeDistance={1}
                    saturation={1}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0}/>
            </div>

            <section className="relative z-10 py-20 items-center translate-y-50">
                <div className="flex flex-col justify-center">
                    <div className="text-center">
                        <h1 className="text-7xl md:text-9xl font-bold">404</h1>
                        <p className="text-2xl md:text-3xl">PAGE NOT FOUND</p>
                    </div>
                    <div className="flex justify-center flex-col md:flex-row gap-2 w-fit mx-auto md:w-full py-4">
                        <Button onClick={() => Router.push("/")}>
                            <Home/>
                            Kembali ke Beranda
                        </Button>
                        <Button onClick={() => Router.back()}>
                            <ArrowLeft/>
                            Halaman sebelumnya
                        </Button>
                    </div>
                </div>
               
            </section>
        </div>
    )
}