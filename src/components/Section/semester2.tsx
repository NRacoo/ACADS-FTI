import { useState } from "react"
import { materiSemester1, materiSemester2 } from "../hooks/data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";


export default function Semester2Page() {
    const [selectDept, setSelectDept] = useState<string>("");
    const selectDeptData = materiSemester2.find((dept) => dept.id === selectDept);

    return (
        <div className="min-h-screen bg-linear-to-t from-sky-400">
            <section className="py-20">
                <div className="text-center text-4xl md:text-6xl mb-8">
                    <h1 className="font-bold">Semester 2</h1>  
                </div>

                <div className="space-y-4">
                        <Select value={selectDept} onValueChange={setSelectDept}>
                                <div className="items-center justify-center flex">
                                    <SelectTrigger className="w-full max-w-lg">
                                        <SelectValue 
                                        placeholder="Pilih Jurusan"/>
                                    </SelectTrigger>
                                </div>
                            <SelectContent>
                                {materiSemester2.map((dept) => (
                                        <SelectItem
                                        value={dept.id}
                                        key={dept.id}>
                                            {dept.name}
                                        </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {selectDeptData ? (
                            <>
                            <h2 className="text-center text-4xl py-5 font-bold">
                                {selectDeptData.name}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-6 mb-8 py-5">
                                {selectDeptData.course.map((course) => (
                                    
                                        <Card key={course.id} className="overflow-hidden cursor-pointer bg-white/20 backdrop-blur-md ">
                                            <div className="relative">
                                                <div className="aspect-video overflow-hidden px-4">
                                                <Image
                                                src={course.image || "/placeholder.png"}
                                                alt={course.imageAlt}
                                                width={300}
                                                height={200}
                                                unoptimized
                                                className="object-cover w-full h-full"/>
                                                </div>
                                            </div>

                                            <CardContent className="space-y-4">
                                                <h3 className="text-lg font-semibold truncate">{course.name}</h3>
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <Button className="w-full mx-auto  bg-[#164b82] hover:bg-[#638ECB] dark:bg-[#638ECB] dark:hover:bg-[#164b82]">
                                                                Belajar
                                                            </Button>
                                                        </DialogTrigger>
                                                        <DialogContent>
                                                            <DialogTitle className="text-center">Pustaka</DialogTitle>
                                                            <ScrollArea className="overflow-y-auto h-[50vh] px-6 py-2">
                                                                {course.file.map((ref) => ( 
                                                                            <div className="flex justify-between p-2" key={ref.id}>
                                                                                <p className="text-stat">{ref.name}</p>
                                                                                <Button className="cursor-pointer bg-[#164b82] hover:bg-[#638ECB] dark:bg-[#638ECB] dark:hover:bg-[#164b82]"
                                                                                onClick={() => window.open(ref.link, "_blank")}>
                                                                                    Visit <ChevronRight/>
                                                                                </Button>
                                                                            </div>
                                                                ))}
                                                        <ScrollBar orientation="vertical"/>
                                                        </ScrollArea>
                                                        </DialogContent>
                                                    </Dialog>
                                            </CardContent>
                                        </Card>
                                ))}
                            </div>
                            </>
                        ) : (
                            <p className="text-center text-lg font-semibold dark:text-white">Silahkan pilih jurusan untuk melihat materi</p>
                        )}
                </div>
            </section>
        </div>
    )
}