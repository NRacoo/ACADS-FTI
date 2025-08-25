import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "./chart";
import { charData } from "../constants/indexSnbt";
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

export default function ChartIndex(){
    return (
        <ChartContainer config={charConfig} className="h-[300px] w-full">
            <BarChart accessibilityLayer data={charData}>
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
    )
}