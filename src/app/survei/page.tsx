"use client"

import { ftiCData, ftiData, ftiRiData, ftiSPData } from "@/components/constants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ChartPage from "@/components/ui/chartComponents"

export default function Survei() {
    return (
        <div className="min-h-screen bg-linear-to-t from-sky-400 py-20 p-6">
            <h1 className="text-2xl md:text-4xl text-center pb-4 font-bold">Jalur Masuk</h1>
            <section>
               <div className="grid-cols-1 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center space-y-4">
                            <h1 className="text-xl lg:text-2xl">Persebaran nilai SNBP</h1>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <ChartPage title="FTI-SP" data={ftiSPData} minValue={83} avgValue={91.5}/>
                        <ChartPage title="FTI" data={ftiData} minValue={84.6} avgValue={91.3}/>
                        <ChartPage title="FTI-RI" data={ftiRiData} minValue={86.3} avgValue={89.48}/>
                        <ChartPage title="FTI-C" data={ftiCData} minValue={89.1} avgValue={91.83}/>
                    </div>
                    </CardContent>
                </Card>
               </div>
            </section>
        </div>
    )
}