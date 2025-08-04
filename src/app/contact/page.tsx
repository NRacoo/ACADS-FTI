
import Android from "@/components/magicui/android";
import { Ripple } from "@/components/magicui/ripple";
import { Phone, Globe, Mail, MapPin } from "lucide-react";
import Link from "next/link";


export default function ContactPage() {
    return (
    <div className="min-h-screen bg-linear-to-t from-sky-400 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl lg:text-7xl font-bold">
              <span className="text-black dark:text-white">Contact </span>
              <span className="dark:text-sky-400 text-sky-600">Us</span>
            </h1>
            <p className="pt-2">Ada yang ingin ditanyakan? Butuh informasi seputar kegiatan? Hubungi kami melalui kontak dibawah ini.</p>
          </div>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center space-x-4">
            <Link className="cursor-pointer flex items-center gap-2"  href={"https://api.whatsapp.com/send/?phone=6281909472654&text&type=phone_number&app_absent=0"}>
                <div className="w-10 h-10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                            <path fill="#fff" fillRule='evenodd' d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path>
                            <path fill="#fff" fillRule='evenodd' d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path>
                            <path fill="#cfd8dc" fillRule='evenodd' d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path>
                            <path fill="#40c351" fillRule='evenodd' d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path>
                            <path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
                        </svg>
                </div>
                <span className="text-lg dark:text-white font-semibold">WhatsApp</span>
            </Link>
            </div>

            {/* Website */}
            <div className="flex items-center space-x-4">
                <Link className="cursor-pointer flex items-center gap-2" href={"https://lin.ee/0bkbFZD"}>
                    <div className="w-10 h-10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#00c300" fillRule='evenodd' d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"></path><path fill="#fff" fillRule='evenodd' d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z"></path>
                        </svg>
                    </div>
                    <span className="text-lg text-gray-800 dark:text-white font-semibold">Official Account Line</span>
                </Link>
            </div>

            {/* Email 
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-gray-800">Wwwwwwwwwwwww</span>
            </div>

           
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-gray-800">123 Anywhere ST., Any City, ST 12345</span>
            </div>*/}
          </div>
        </div>

        {/* Right side - Mobile Phones Illustration */}
        <div className="relative flex items-center justify-center mx-auto">
          {/* Background Circle */}
          <div className="absolute inset-0 z-10 overflow-hidden rounded-full hidden md:block"><Ripple/></div>

          {/* Phone 1 */}
          <div className="relative z-10 transform -translate-x-8">
            <div className="w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-sky-300 to-sky-500 rounded-2xl relative overflow-hidden">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-black rounded-full"></div>
                {/* Screen content area */}
                <div className="pt-8 h-full"></div>
              </div>
            </div>
          </div>

          {/* Phone 2 */}
          <div className="relative z-20 transform rotate-5 md:rotate-20 -translate-x-10 md:-translate-y-4 ">
            <div className="w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-sky-300 to-sky-500 rounded-2xl relative overflow-hidden">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-black rounded-full"></div>
                {/* Screen content area */}
                <div className="pt-8 h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}