import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ChartIndexJurusan from "@/components/ui/jurusan"
export default function JurusanPage() {
    return(
        <section className="pt-4 pb-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="space-y-4">
                            <div className="flex flex-row gap-2 items-center justify-center">
                                <div className="flex flex-row justify-center items-center gap-2">
                                    <div className="w-12 h-2 rounded-lg bg-[#2563eb]"/>
                                    <h1>Teknik Industri</h1>
                                </div>
                                <div className="flex flex-row justify-center items-center gap-2">
                                    <div className="w-12 h-2 rounded-lg bg-[#60a5fa]"/>
                                    <h1>Manajemen Rekayasa</h1>
                                </div>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartIndexJurusan/>
                    </CardContent>
                </Card>
           </section>
    )
}