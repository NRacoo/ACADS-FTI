import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "./chart";
import { charData, charDataMandiri } from "../constants/indexSnbt";
const charConfig = {
    minimum:{
        label:"Nilai Minimum: ",
        color:"#2563eb"
    },
    rata:{
        label:"Nilai Rata-Rata:  ",
        color:"#60a5fa"
    }
};

export default function ChartIndexMandiri(){
    return (
        <>
        <div className="flex-col flex items-center justify-center w-full">

            <div className="flex-row flex gap-4">
                <div className="flex flex-row justify-center items-center gap-2">
                    <div className="w-12 h-2 rounded-lg bg-[#2563eb]"/>
                    <h1>Nilai Minimum</h1>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                    <div className="w-12 h-2 rounded-lg bg-[#60a5fa]"/>
                    <h1>Rata-Rata</h1>
                </div>
            </div>
                <ChartContainer config={charConfig} className="h-[300px] w-full">
                    <BarChart accessibilityLayer data={charDataMandiri}>
                        <CartesianGrid vertical={false}/>
                        <XAxis
                        dataKey="materi"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis/>
                        <ChartTooltip content={<ChartTooltipContent/>}/>
                        <ChartLegend content={<ChartLegendContent/>}/>
                        <Bar dataKey={"minimum"} fill="var(--color-minimum)" radius={4}/>
                        <Bar dataKey={"rata"} fill="var(--color-rata)" radius={4}/>
                    </BarChart>
                </ChartContainer>
        </div>
        </>
    )
}