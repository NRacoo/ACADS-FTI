import Image from "next/image";


export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-linear-to-t from-sky-400">
            <section className="py-20">
                <div className="flex flex-col items-center justify-center translate-y-50">
                    <div className="text-center">
                        <h1 className="dark:text-white text-4xl font-bold">Oops. page ini masih ditahap pengembangan</h1>
                    </div>
                    <Image src={"/dev.png"} width={500} height={500} alt="dev" className="object-cover"/>
                </div>
            </section>
        </div>
    )
}