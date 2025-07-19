"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "./hooks/use-outside-click";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] ">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-40 right-2 md:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-fit h-[90%] md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="w-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                    <motion.li
                     layout
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className=" text-sm rounded-full font-bold bg-green-500 text-white flex">
                        <Link
                            href={active.ctaLink}
                            target="_blank"
                            className="px-4 py-3 text-xl rounded-full font-semibold bg-green-500 text-white flex gap-2"
                        >
                            {active.ctaText}
                            <ChevronRight/>
                        </Link>
                    </motion.li>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-auto mx-auto w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-start gap-4 px-2">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={400}
                  height={400}
                  src={card.src}
                  alt={card.title}
                  sizes="(max-width: 768px) 100vw, 600px"
                  className=" w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base "
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Website ITB",
    title: "Institut Teknologi Bandung",
    src: "/webitb.png",
    ctaText: "Visit",
    ctaLink: "https://itb.ac.id",
    content: () => {
      return (
        <p>
         Situs resmi Institut Teknologi Bandung &#40;ITB&#41;
          yang menyajikan informasi umum tentang institusi,
           berita terbaru, kegiatan akademik, serta akses ke berbagai
            layanan universitas.
        </p>
      );
    },
  },
  {
    description: "Website FTI ITB",
    title: "Fakultas Teknologi Industri",
    src: "/webfti.png",
    ctaText: "Visit",
    ctaLink: "https://fti.itb.ac.id",
    content: () => {
      return (
        <p>
         Portal resmi Fakultas Teknologi Industri ITB yang memuat informasi seputar program studi, dosen, penelitian, berita fakultas,
          serta layanan akademik bagi mahasiswa dan staf.
        </p>
      );
    },
  },
  {
    description: "Kemahasiswaan ITB",
    title: "Direktorat Kemahasiswaan",
    src: "/webkm.png",
    ctaText: "Visit",
    ctaLink: "https://kemahasiswaan.itb.ac.id",
    content: () => {
      return (
        <p>
            Website resmi Direktorat Kemahasiswaan ITB yang menyediakan informasi tentang pengembangan minat dan bakat,
            kegiatan mahasiswa, layanan pembinaan, serta informasi beasiswa dan organisasi.
        </p>
      );
    },
  },
  {
    description: "DITSAMA ITB",
    title: "Direktorat Sarana dan Prasarana",
    src: "/webdm.png",
    ctaText: "Visit",
    ctaLink: "https://ditsama.itb.ac.id",
    content: () => {
      return (
        <p>
            Website resmi Direktorat Sarana dan Prasarana ITB yang menangani pengelolaan infrastruktur, fasilitas kampus,
             dan sistem pendukung kegiatan akademik maupun non-akademik.
        </p>
      );
    },
  },
  {
    description: "Konseling BK ITB",
    title: "Layanan Bimbingan dan Konseling Mahasiswa ITB",
    src: "/webbk.png",
    ctaText: "Visit",
    ctaLink: "https://kemahasiswaan.itb.ac.id/bk/",
    content: () => {
      return (
        <p>
            Layanan bimbingan dan konseling bagi mahasiswa ITB yang fokus pada kesehatan mental,
            pengembangan diri, dan dukungan emosional untuk menunjang keberhasilan studi.
        </p>
      );
    },
  },
  {
    description: "Admission ITB",
    title: "Penerimaan Mahasiswa Baru",
    src: "/webadm.png",
    ctaText: "Visit",
    ctaLink: "https://admission.itb.ac.id/",
    content: () => {
      return (
        <p>
            Layanan bimbingan dan konseling bagi mahasiswa ITB yang fokus pada kesehatan mental,
            pengembangan diri, dan dukungan emosional untuk menunjang keberhasilan studi.
        </p>
      );
    },
  },
  {
    description: "Beasiswa ITB",
    title: "Layanan Beasiswa dan Bantuan Keuangan",
    src: "/webbs.png",
    ctaText: "Visit",
    ctaLink: "https://finaid.itb.ac.id/",
    content: () => {
      return (
        <p>
           Situs resmi layanan bantuan keuangan dan beasiswa ITB, menyediakan
           informasi program beasiswa internal dan eksternal bagi mahasiswa dari berbagai latar belakang.
        </p>
      );
    },
  },
  {
    description: "Akademik ITB",
    title: "Informasi Akademik",
    src: "/webam.png",
    ctaText: "Visit",
    ctaLink: "https://akademik.itb.ac.id/",
    content: () => {
      return (
        <p>
           Website yang mengelola dan menyajikan informasi akademik ITB,
           termasuk kalender akademik, kurikulum, peraturan akademik, dan pengumuman terkait kegiatan perkuliahan.
        </p>
      );
    },
  },
  {
    description: "Sistem Informasi Akademik ITB",
    title: "SIX ITB",
    src: "/websix.png",
    ctaText: "Visit",
    ctaLink: "https://six.itb.ac.id/",
    content: () => {
      return (
        <p>
           Platform utama untuk pertukaran informasi akademik bagi mahasiswa dan dosen ITB,
             termasuk KRS, nilai, jadwal kuliah, dan data perkuliahan lainnya.
        </p>
      );
    },
  },
  {
    description: "Learning Management System ITB",
    title: "Edunex ITB",
    src: "/webedu.png",
    ctaText: "Visit",
    ctaLink: "https://edunex.itb.ac.id/",
    content: () => {
      return (
        <p>
           Learning Management System &#40;LMS&#41; resmi ITB berbasis Moodle yang digunakan untuk kegiatan pembelajaran daring,
           pengumpulan tugas, diskusi kelas, dan ujian online.
        </p>
      );
    },
  },
  {
    description: "Bantuan Sistem Akademik ITB",
    title: "HELPDESK SIX ITB",
    src: "/webhd.png",
    ctaText: "Visit",
    ctaLink: "https://helpdesk.six.itb.ac.id/",
    content: () => {
      return (
        <p>
           Layanan bantuan teknis terkait sistem informasi akademik ITB &#40;SIX&#41;,
            tempat mahasiswa dan dosen dapat melaporkan masalah serta mendapatkan panduan penggunaan sistem.
        </p>
      );
    },
  },
  {
    description: "Perpustakaan Institut Teknologi Bandung",
    title: "Library ITB",
    src: "/weblib.png",
    ctaText: "Visit",
    ctaLink: "https://lib.itb.ac.id/",
    content: () => {
      return (
        <p>
           Situs resmi Perpustakaan ITB yang menyediakan akses ke koleksi buku,
            jurnal elektronik, database ilmiah, layanan peminjaman, dan berbagai fasilitas literasi informasi.
        </p>
      );
    },
  },
  
];
