import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "./chart";
import { charDataJurusan } from "../constants/indexJurusan";
const charConfig = {
    tekdus:{
        label:"Teknik Industri: ",
        color:"#2563eb"
    },
    manajemen:{
        label:"Manajemen Rekayasa: ",
        color:"#60a5fa"
    }
};

export default function ChartIndexJurusan(){
    return (
        <ChartContainer config={charConfig} className="h-[300px] w-full">
            <BarChart accessibilityLayer data={charDataJurusan}>
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
                <Bar dataKey={"tekdus"} fill="var(--color-tekdus)" radius={4}/>
                <Bar dataKey={"manajemen"} fill="var(--color-manajemen)" radius={4}/>
            </BarChart>
        </ChartContainer>
    )
}