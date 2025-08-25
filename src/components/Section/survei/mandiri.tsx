
import { mandiriFTI, mandiriFTINon, mandiriFTIPem, mandiriUTBk } from "@/components/constants"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import ChartPage from "@/components/ui/chartComponents"
import ChartIndexMandiri from "@/components/ui/ChartMandiri"
import ChartIndex from "@/components/ui/indexSnbt"

export default function MandiriPage() {
    return (
        <section>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center space-y-4">
                                <h1 className="text-xl lg:text-2xl">Persebaran Nilai Mandiri</h1>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <ChartPage title="Rapor Mandiri-FTI" data={mandiriFTI} minValue={85} avgValue={89.9}/>
                            <ChartPage title="Rapor Mandiri-FTI Non Peminatan" data={mandiriFTINon} minValue={85} avgValue={90.2}/>
                            <ChartPage title="Rapor Mandiri-FTI Peminatan" data={mandiriFTIPem} minValue={86} avgValue={89.25}/>
                            <ChartPage title="UTBK Mandiri-FTI" data={mandiriUTBk} minValue={575.75} avgValue={668.39}/>
                        </div>
                        <div className="items-center flex justify-center">
                            <ChartIndexMandiri/>        
                        </div>
                        </CardContent>
                    </Card>
        </section>
    )
}