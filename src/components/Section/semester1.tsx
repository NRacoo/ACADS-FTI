"use client";
import Image from "next/image";
import { materiList1 } from "../hooks/data";
import { Card, CardContent } from "../ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";


export default function SemesterIPage(){
    return(
        <div className="min-h-screen bg-linear-to-t from-sky-400">
            <section className="px-4 py-20">
                <div className="text-center">
                    <h1 className="font-bold text-4xl md:text-6xl"> Semester 1 </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 py-5">
                    {materiList1.map((materi) => (
                        <Card 
                        key={materi.id}
                        className="overflow-hidden cursor-pointer bg-white/20 backdrop-blur-md ">
                            <div className="relative">
                                <div className="aspect-video overflow-hidden px-4">
                                    <Image
                                    src={materi.image || "Gambar tidak tersedia"}
                                    width={300}
                                    height={200}
                                    alt={materi.imageAlt}
                                    unoptimized
                                    className="object-cover w-full h-full"/>
                                </div>
                            </div>
                            <CardContent className="space-y-4">
                                <h3 className="text-xl font-bold truncate">{materi.name}</h3>
                                <div className="flex flex-col">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="bg-[#164b82] hover:bg-[#638ECB] dark:bg-[#638ECB] dark:hover:bg-[#164b82]">
                                                Belajar
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="dark:bg-gradient-to-br dark:from-cyan-500/20 dark:to-gray-600/20">
                                            <div className="space-y-2">
                                                <DialogTitle className="text-center font-semibold text-xl">Pustaka</DialogTitle>
                                                <ScrollArea className="h-[50vh] overflow-y-auto px-6 py-2">
                                                        <div className="relative">
                                                            {materi.file.map((item) => (
                                                                <div className="flex justify-between p-2"
                                                                key={item.id}>
                                                                    <p className="text-stat">{item.name}</p>
                                                                    <Button className="cursor-pointer bg-[#164b82] hover:bg-[#638ECB] dark:bg-[#638ECB] dark:hover:bg-[#164b82]" onClick={() => window.open(item.link ,"_blank")}>Visit <ChevronRight className="w-4 h-4"/> </Button>
                                                                </div>
                                                            )) }
                                                        </div>
                                                    <ScrollBar orientation="vertical"/>        
                                                </ScrollArea>
                                            </div>  
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}