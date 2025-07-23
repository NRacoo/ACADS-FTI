import HeroVideo from "../ui/hero-video";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Folder from "./folder";


export default function CarouselCard() {
    return(
        <div className="grid grid-cols-1 px-4">
            <Card className="">
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-center text-2xl">FTI Tracer</h2>
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-10">

                        <div className="flex flex-col">
                            <h3 className="text-center text-2xl font-semibold">Youtube FTI</h3>
                           <HeroVideo
                           className="block dark:hidden"
                           videoSrc="https://www.youtube.com/@AkademikBPAFTI24/videos"
                           animationStyle="from-center"
                           thumbnailSrc="/ytfti.png"
                           thumbnailAlt="Youtube FTI 24"/>
                           <HeroVideo
                           className="hidden dark:block"
                           videoSrc="https://www.youtube.com/@AkademikBPAFTI24/videos"
                           animationStyle="from-center"
                           thumbnailSrc="/ytfti.png"
                           thumbnailAlt="Youtube FTI 24"/>
                        </div>
                        <div className="flex flex-col pt-2">
                            <h3 className="z-10 font-semibold text-2xl text-center lg:mb-8">Survei FTI</h3>
                            <div className="flex justify-center items-center pt-20 md:pt-20 lg:pt-40 relative">
                                
                                <Folder
                                className="custom-folder text-center scale-[2] md:scale-[2] lg:scale-[3]"
                                items={[
                                    {content: <p className="text-center dark:text-black">Jalur Masuk</p>, url: "https://drive.google.com/file/d/1_DXmiTUhkAgq9CkdecOGBxutBa3Urm0l/view?usp=sharing"},
                                    {content: <p className="text-center text-lg dark:text-black">Tracer</p>, url: "https://drive.google.com/drive/folders/1kviLNzk3OLpXbCPwKq4KKx3GUnSH93H5?usp=drive_link"},
                                    {content: <p className="text-center text-sm dark:text-black">Penjurusan</p>, url: "https://drive.google.com/drive/folders/1LYAr0teFvIIBugoy8PKZaqIeEeRTZi1l?usp=drive_link"},
                                ]}
                                />
                            </div>
                        </div>
                </CardContent>
            </Card>
        </div>
    )

    
}