import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import ChartPage from "@/components/ui/chartComponents"
import { FTI, FTIC, FTIRI, FTISP } from "@/components/constants/snbt"

export default function SnbtSection() {
    return (
        <section className="py-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center space-y-4">
                                <h1 className="text-xl lg:text-2xl">Persebaran Nilai SNBT</h1>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <ChartPage title="FTI" data={FTI} minValue={681.8} avgValue={738}/>
                                <ChartPage title="FTI-SP" data={FTISP} minValue={692.9} avgValue={734.61}/>
                                <ChartPage title="FTI-RI" data={FTIRI} minValue={725.24} avgValue={754.56}/>
                                <ChartPage title="FTI-C" data={FTIC} minValue={681.8} avgValue={705.77}/>
                            </div>
                        </CardContent>
                    </Card>
            </section>
    )
}