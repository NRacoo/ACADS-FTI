"use client"
import SnbpSection from "@/components/Section/survei/snbp"
import SnbtSection from "@/components/Section/survei/snbt"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ChartPage from "@/components/ui/chartComponents"
import ChartIndex from "@/components/ui/indexSnbt"

export default function Survei() {
    return (
        <div className="min-h-screen bg-linear-to-t from-sky-400 py-20 p-6">
            <h1 className="text-2xl md:text-4xl text-center pb-4 font-bold">Jalur Masuk</h1>
           <SnbpSection/>
           <section className="pt-4 pb-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="space-y-4">
                            <div className="flex flex-row gap-2 items-center justify-center">
                                <div className="flex flex-row justify-center items-center gap-2">
                                    <div className="w-12 h-2 rounded-lg bg-[#2563eb]"/>
                                    <h1>Nilai Minimum</h1>
                                </div>
                                <div className="flex flex-row justify-center items-center gap-2">
                                    <div className="w-12 h-2 rounded-lg bg-[#60a5fa]"/>
                                    <h1>Rata-Rata</h1>
                                </div>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartIndex/>
                    </CardContent>
                </Card>
           </section>
           <SnbtSection/>
        </div>
    )
}