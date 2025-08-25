"use client"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./chart";

const chartConfig = {
    frequency:{
        label:"Frekuensi",
        color:"#2563eb"
    }
}

export default function ChartPage({
    title,
    data,
    minValue,
    avgValue
}:{
    title:string,
    data:Array<{range: string, frequency: number}>,
    minValue:number,
    avgValue:number
}) {
    return (
        <Card className="w-full shadow-none">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-center dark:text-white text-black">
                    {title}
                </CardTitle>
                <CardDescription className="text-center space-y-1 dark:text-white text-black">
                    <div>Nilai Mininum ={minValue}</div>
                    <div>Rata-Rata={avgValue}</div>
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <ChartContainer config={chartConfig} className="h-[300px] dark:text-white text-black w-full">
                    <ResponsiveContainer width={"100%"}height={"100%"}>
                        <BarChart data={data} accessibilityLayer>
                            <CartesianGrid vertical={false} strokeDasharray={"3 3"}/>
                            <XAxis
                            dataKey={"range"}
                            tick={{fontSize:12}}
                            angle={-45}
                            textAnchor="end"
                            height={60}
                            />
                            <YAxis/>
                            <ChartTooltip content={<ChartTooltipContent/>}/>
                            <Bar dataKey="frequency" fill="var(--color-frequency)" radius={[4, 4, 0, 0]}/>
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}