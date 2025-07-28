import { useState } from "react"
import { departments } from "../hooks/data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


export default function Semester2Page() {
    const [selectDept, setSelectDept] = useState<string>("");
    const selectDeptData = departments.find((dept) => dept.id === selectDept);

    return (
        <div className="min-h-screen bg-linear-to-t from-sky-400">
            <section className="py-20">
                <div className="text-center text-4xl md:text-6xl">
                    <h1 className="font-bold">Semester 2</h1>  
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold dark:text-white text-center">Pilih Jurusan</h2>
                    <div className="items-center justify-center flex">
                        <Select value={selectDept} onValueChange={setSelectDept}>
                            <SelectTrigger>
                                <SelectValue 
                                placeholder="Pilih Jurusan"/>
                            </SelectTrigger>
                            <SelectContent>
                                {departments.map((dept) => (
                                    <div>
                                        <SelectItem
                                        value={dept.name}
                                        key={dept.id}>
                                            {dept.name}
                                        </SelectItem>
                                    </div>
                                    
                                ))}
                            </SelectContent>
                        </Select>
                        {selectDept && (
                            <div className="">
                                
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}