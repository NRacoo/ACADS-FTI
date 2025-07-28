import { useState } from "react"
import { materiSemester1, materiSemester2 } from "../hooks/data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";


export default function Semester2Page() {
    const [selectDept, setSelectDept] = useState<string>("");
    const selectDeptData = materiSemester2.find((dept) => dept.id === selectDept);

    return (
        <div className="min-h-screen bg-linear-to-t from-sky-400">
            <section className="py-20">
                <div className="text-center text-4xl md:text-6xl">
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
                                    <div>
                                        <SelectItem
                                        value={dept.id}
                                        key={dept.id}>
                                            {dept.name}
                                        </SelectItem>
                                    </div>
                                    
                                ))}
                            </SelectContent>
                        </Select>
                        {selectDeptData ? (
                            <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-6 mb-8 py-20">
                                {selectDeptData.course.map((course) => (
                                    <Card key={course.id} className="overflow-hidden cursor-pointer">
                                        <div className="relative">
                                            <div className="aspect-video overflow-hidden px-4">
                                            <Image
                                            src={course.image || "Gambar tidak tersedia"}
                                            alt={course.imageAlt}
                                            width={300}
                                            height={200}
                                            unoptimized
                                            className="object-cover w-full h-full"/>
                                            </div>
                                        </div>

                                        <CardContent className="space-y-4">
                                            <h3 className="text-lg font-semibold truncate">{course.name}</h3>
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