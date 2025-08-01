export type Activity ={
    id : number,
    title: string,
    description: string,
    image: string,
    imageAlt: string,
}



export const activities: Activity[] = [
    {
      id: 1,
      title: "WELCOMING PARTY",
      description:
        "Welcoming party merupakan sebuah acara yang diselenggarakan oleh massa FTI angkatan atas untuk menyambut kedatangan dari Mahasiswa Baru FTI, acara diselenggarakan secara online dan disajikan dengan mata acara yang bervariatif.",
      image: "/welpar.png",
      imageAlt: "Welcoming Party - Online event with new FTI students",
    },
    {
      id: 2,
      title: "GET TO KNOW (GTK)",
      description:
        "Get To Know FTI, Sebuah acara yang dilaksanakan pada masa awal-awal perkuliahan, acara ini dibuat oleh angkatan atas dari mahasiswa baru yang bertujuan untuk mengenalkan Fakultas FTI itu sendiri dan berbagai jurusan didalamnya.",
      image: "/gtk.png",
      imageAlt: "Get To Know event - Outdoor gathering with FTI students",
    },
    {
        id:3,
        title:"GATHERING 1.0",
        description:"Acara yang dilaksanakan oleh massa FTI untuk mempererat hubungan antar massa FTI itu sendiri, Gathering 1.0 dilaksanakan secara online pada masa awal awal setelah pengumuman atau sebelum perkuliahan dimulai, Gathering 1.0 membuat massa saling mengenal dan berinteraksi satu sama lain melalui games - games yang menyenangkan.",
        image:"/gth.png",
        imageAlt:"Gathering - Online gathering with FTI-students",
    }
  ]

  export type folder ={
    id:number,
    name: string,
    link: string,
  }
export type materiSemester1 = {
    id: string,
    name: string,
    sks: string,
    image:string,
    imageAlt: string,
    file: folder[]
}


export const materiList1: materiSemester1[] = [
  {
    id:"matdasAI",
    name:"Matematika Dasar IA",
    sks: "4",
    image:"/materi/kalkulus.png",
    imageAlt:"kalkulus",
    file:[
      {id:1, name: "Catatan", link:"https://drive.google.com/drive/folders/10oPf13_iQ2OMbl2ZYTArZ-ARs_qvaIOg?usp=drive_link"},
      {id:2, name: "KBF", link:"https://drive.google.com/drive/folders/10tBNrp1qt88YyIaPp1S8zUeyycxVERHb?usp=drive_link"},
      {id:3, name: "Power Point Dosen", link:"https://drive.google.com/drive/folders/1-GVGtqcDg6Sxu6WUt-ZmD6SJBIqTZRME?usp=drive_link"},
      {id:4, name: "Proyek Mini", link:"https://drive.google.com/drive/folders/1kfEQ1o9bMU0ycbDvQg3rDgr2hg92uu82?usp=drive_link"},
      {id:5, name: "Student of Center Learning", link:"https://drive.google.com/drive/folders/1sQ8VjbrhOX2zxz09oduPiNNrfub5-ihO?usp=drive_link"},
      {id:6, name: "Tutorial", link:"https://drive.google.com/drive/folders/1K6_oIWmxYLV3jAccPFoalt3KYXVSHGmu?usp=drive_link"},
      {id:7, name: "UAS", link:"https://drive.google.com/drive/folders/10fD8Sk7Xl-E0Ue54OPLnPvNn7Y151vlA?usp=drive_link"},
      {id:8, name: "UP dan Ujian Reevaluasi", link:"https://drive.google.com/drive/folders/14KXq7XTB-1_ibFirojpuIwGHoqQYATvv?usp=drive_link"},
      {id:9, name: "UTS", link:"https://drive.google.com/drive/folders/10mwHg6WW9bb8sKVbcHsOoyFnOm9fmzFe?usp=drive_link"},
    ]
  },
  {
    id:"kidasI",
    name:"Kimia Dasar I",
    sks:"3",
    image:"/materi/kimia.png",
    imageAlt:"kimia",
    file:[
      {id:1, name: "Catatan", link:"https://drive.google.com/drive/folders/10YGPp2IEbAvgg1ZVdPbiSl2iSoq1gz_C?usp=drive_link"},
      {id:2, name: "Kuis", link:"https://drive.google.com/drive/folders/10cBAXYew1pWvhH237y0eqfQvj0EplQqV?usp=drive_link"},
      {id:3, name: "Latihan Soal", link:"https://drive.google.com/drive/folders/1I0TZPHd7TSytvJWdFxM9ttQ88bqiYN87?usp=drive_link"},
      {id:4, name: "Power Point Dosen", link:"https://drive.google.com/drive/folders/1_eknnS4H0GArXAEnumPiGHZRiRO6wr2D?usp=drive_link"},
      {id:5, name: "UTS", link:"https://drive.google.com/drive/folders/10VfTyKXruozswVP3lsn1ZivIz_gQj6op?usp=drive_link"},
      {id:6, name: "Research Based on Learning", link:"https://drive.google.com/drive/folders/11O7gor6F-ii52ImCQSWbyxARNZK223Ix?usp=drive_link"},
      {id:7, name: "UAS", link:"https://drive.google.com/drive/folders/10TxvihJlXmJxe89nzS5p5AXkmZmkM30A?usp=drive_link"},
      {id:8, name: "UP dan Ujian Reevaluasi", link:"https://drive.google.com/drive/folders/17ap2JwDbVj2S9sF8JD4PgDG5XReqd0Ih?usp=drive_link"},
    ]
  },
  {
    id:"fidasI",
    name:"Fisika Dasar I",
    sks:"3",
    image:"/materi/fisika.png",
    imageAlt:"fisika",
    file:[
      {id:1, name: "Catatan", link:"https://drive.google.com/drive/folders/1-yjEdKj252lJT6BV8xDvD6keQSsNMM69?usp=drive_link"},
      {id:2, name: "Kuis", link:"https://drive.google.com/drive/folders/10AkqzowAgfKJI0Tt0mj5pxWFfecMoCtt?usp=drive_link"},
      {id:3, name: "Power Point Dosen", link:"https://drive.google.com/drive/folders/1uQDKMnhbIHeSPT99XoX5J-UVToZ8HftM?usp=drive_link"},
      {id:4, name: "LTM", link:"https://drive.google.com/drive/folders/1qNAoWv7pp_2RIGpW-mwypLlmYGsH2Fqx?usp=drive_link"},
      {id:5, name: "Student of Center Learning", link:"https://drive.google.com/drive/folders/1u6Xidmtq0QkApt9xJuzSGvsHdg6E19CG?usp=drive_link"},
      {id:6, name: "LCE", link:"https://drive.google.com/drive/folders/1aCAflaB-7NpvhBv-5Dd3hyTWe8HDU6wS?usp=drive_link"},
      {id:7, name: "UAS", link:"https://drive.google.com/drive/folders/10Ge6KECI0EKGbQeq4RsEWNmXVEccKjZj?usp=drive_link"},
      {id:8, name: "UP dan Ujian Reevaluasi", link:"https://drive.google.com/drive/folders/1oRZipWgBWM7OA5d8VLWYFId5MbRc6e16?usp=drive_link"},
      {id:9, name: "UTS", link:"https://drive.google.com/drive/folders/10EridrUE2v2TyHDk1Weto4M-nP5wLgFZ?usp=drive_link"},
      {id:10, name: "PBL", link:"https://drive.google.com/drive/folders/11Px7e8sHGNrW2pghN6fzhwJD1wUM5iZA?usp=drive_link"},
    ]
  },
  {
    id:"berkom",
    name:"Berpikir Komputasional",
    sks:"2",
    image:"/materi/berkom.png",
    imageAlt:"Berpikir Komputasional",
    file:[
      {id:1, name: "Catatan", link:"https://drive.google.com/drive/folders/11axt65FLR19RmRncq-JH6QtdN60l9z6B?usp=drive_link"},
      {id:2, name: "Praktikum", link:"https://drive.google.com/drive/folders/1NTgShoyMIKhSWaJmTHIpCVWu_yujYROp?usp=drive_link"},
      {id:3, name: "Tugas Proyek", link:"https://drive.google.com/drive/folders/11YYZp0A575FEx_REPTCvAJCBZvcuugP3?usp=drive_link"},
      {id:4, name: "Power Point Dosen", link:"https://drive.google.com/drive/folders/1P1sSVsNoqU9pNjGUng4KwMP8PcFkipRF?usp=drive_link"},
      {id:5, name: "UTS", link:"https://drive.google.com/drive/folders/1yvo74BJGVZwi3VcE1KEwrsuudQlZwesG?usp=drive_link"},
      {id:6, name: "UAS", link:"https://drive.google.com/drive/folders/1NmEnGZQmpefkmhcSVdAKovvHTkT6BPiT?usp=drive_link"},
      
    ]
  },
  {
    id:"ppk",
    name:"Pengantar Prinsip Keberlanjutan",
    sks:"2",
    image:"/Background.jpg",
    imageAlt:"Pengantar Prinsip Keberlanjutan",
    file:[
      {id:1, name: "Kuis", link:"https://drive.google.com/drive/folders/11e-FES0FvysAW0w97VMGaxIaYS_EBv7X?usp=drive_link"},
      {id:2, name: "Materi dan Rangkuman", link:"https://drive.google.com/drive/folders/1ft0kgtFaMVPbey9ExOV0_4o3m3aY8p28?usp=drive_link"},
      {id:3, name: "Tugas Proyek", link:"https://drive.google.com/drive/folders/11ypJj-JUCyi2AvWCZVEhyHiN_xqrf1Di?usp=drive_link"},
      {id:4, name: "UTS", link:"https://drive.google.com/drive/folders/11rJ7vk2BQ2AXtAWvDSPshEHQCxQzwaho?usp=drive_link"},
    ]
  },
  {
    id:"pancasila",
    name:"Pancasila",
    sks:"2",
    image:"/materi/pancasila.png",
    imageAlt:"Pancasila",
    file:[
      {id:1, name: "Catatan", link:"https://drive.google.com/drive/folders/10upUY48Uu_hg_waBpgNDvtz7PbvaA8eW?usp=drive_link"},
      {id:2, name: "Kuis", link:"https://drive.google.com/drive/folders/1Vh7hNUHSCR-zYoQrZwrlCLHNhD9Kleld?usp=drive_link"},
      {id:3, name: "Buku Pustaka", link:"https://drive.google.com/drive/folders/18CFa9zWRCLQbpH9PQwsmboVQN_DYIH7Y?usp=drive_link"},
      {id:4, name: "Power Point Dosen", link:"https://drive.google.com/drive/folders/1SLYOm-7fTTtRpvkGr5Sr-sWmhYbMybUB?usp=drive_link"},
      {id:5, name: "Laporan", link:"https://drive.google.com/drive/folders/11-lulOWx8m80vpuM2wo4SZgkFZWVNoC7?usp=drive_link"},
    ]
  },
  {
    id:"labkidas",
    name:"Laboratorium Kimia Dasar",
    sks:"1",
    image:"/materi/kimia.png",
    imageAlt:"Praktikum Kimia",
    file:[
      {id:1, name:"Praktikum", link:"https://drive.google.com/drive/folders/112aRXqhof9w0mPzNsGMFtyNxuVy-qQAg?usp=drive_link"}
    ]
  },
  {
    id:"labfidas",
    name:"Laboratorium Fisika Dasar",
    sks:"1",
    image:"/materi/fisika.png",
    imageAlt:"Praktikum Fisika",
    file:[
      {id:1, name:"Praktikum", link:"https://drive.google.com/drive/folders/11JYdN1207jDlMa6EOn7dC_K4kKXvPrTA?usp=drive_link"}

    ]
  },
]

export type Course = {
  id: number
  name: string
  sks: string
}

export type Department = {
  id: string
  name: string
  courses: Course[]
}

export const departments: Department[] = [
  {
    id: "tekim",
    name: "Teknik Kimia",
    courses: [
      { id: 1, name: "Matematika IIA", sks: "4" },
      { id: 2, name: "Kimia Dasar IIA", sks: "3" },
      { id: 3, name: "Fisika Dasar IIA", sks: "3" },
      { id: 4, name: "Pengenalan Rekayasa dan Desain", sks: "3" },
      { id: 5, name: "Olah Raga", sks: "1" },
      { id: 6, name: "Bahasa Inggris", sks: "2" },
      { id: 7, name: "Bahasa Indonesia", sks: "2" },
    ],
  },
  {
    id: "tekfis",
    name: "Teknik Fisika",
    courses: [
      { id: 8, name: "Dasar Fisika Teknik", sks: "2" },
      { id: 9, name: "Rangkaian Listrik", sks: "3" },
      { id: 10, name: "Pengantar Struktur dan Sifat Material", sks: "2" },
      { id: 11, name: "Literasi Data dan Inteligensi Artifisial", sks: "2" },
      { id: 12, name: "Olah Raga", sks: "1" },
      { id: 13, name: "Matriks dan Ruang Vektor", sks: "3" },
      { id: 14, name: "Bahasa Indonesia", sks: "2" },
    ],
  },
  {
    id: "tekdus",
    name: "Teknik Industri",
    courses: [
      { id: 15, name: "Menggambar Teknik", sks: "2" },
      { id: 16, name: "Matematika IIA", sks: "4" },
      { id: 17, name: "Pengenalan Rekayasa dan Desain", sks: "3" },
      { id: 18, name: "Literasi Data dan Inteligensi Artifisial", sks: "2" },
      { id: 19, name: "Fisika Dasar IIA", sks: "3" },
      { id: 20, name: "Biologi Dasar", sks: "2" },
      { id: 21, name: "Bahasa Indonesia", sks: "2" },
    ],
  },
  {
    id: "tekpang",
    name: "Teknik Pangan",
    courses: [
      { id: 22, name: "Kimia Dasar IIB", sks: "3" },
      { id: 23, name: "Analisis Matematik dan Numerik", sks: "3" },
      { id: 24, name: "Pengenalan Rekayasa dan Desain", sks: "3" },
      { id: 25, name: "Literasi Data dan Inteligensi Artifisial", sks: "2" },
      { id: 26, name: "Bahasa Inggris", sks: "2" },
      { id: 27, name: "Mikrobiologi Pangan", sks: "3" },
      { id: 28, name: "Bahasa Indonesia", sks: "2" },
    ],
  },
  {
    id: "mr",
    name: "Manajemen Rekayasa",
    courses: [
      { id: 29, name: "Matematika IIA", sks: "4" },
      { id: 30, name: "Fisika Dasar IIA", sks: "3" },
      { id: 31, name: "Menggambar Teknik", sks: "2" },
      { id: 32, name: "Literasi Data dan Inteligensi Artifisial", sks: "2" },
      { id: 33, name: "Manajemen Rekayasa Industri", sks: "2" },
      { id: 34, name: "Pengenalan Rekayasa dan Desain", sks: "3" },
      { id: 35, name: "Bahasa Indonesia", sks: "2" },
    ],
  },
  {
    id: "bi",
    name: "Tekni Bioenergi dan Kemurgi",
    courses: [
      { id: 36, name: "Matematika IIA", sks: "4" },
      { id: 37, name: "Kimia Dasar IIB", sks: "3" },
      { id: 38, name: "Ilmu Kimia Bahan Nabati", sks: "3" },
      { id: 39, name: "Kerekausahaan dan Pengenalan Keprofesian", sks: "2" },
      { id: 40, name: "Olah Raga", sks: "1" },
      { id: 41, name: "Pengenalan Rekayasa dan Desain", sks: "3" },
      { id: 42, name: "Bahasa Indonesia", sks: "2" },
    ],
  },
]



export type folderDept = {
  id: string;
  name: string;
  link: string;
}

export type materiSem2 = {
  id: string;
  name: string;
  image: string;
  imageAlt:string
  file: folderDept[];
}


export type courseDept = {
  id: string;
  name: string;
  course: materiSem2[];
}

export const materiSemester2: courseDept[] = [
  {
    id: "tekim",
    name:"Teknik Kimia",
    course:[
      {id:"MatemaIIA",
        name:"Matematika IIA",
        image:"/materi/kalkulus.png", 
        imageAlt:"Matematika IIA",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1-JHEfuBxXnIlbVgEa-YOOLh3ldJvtooE?usp=share_link"},
          {id:"silabus", name:"Silabus", link:"https://drive.google.com/drive/folders/1-Or1nAsukFjdlqiEuNCMlldwiPciUNY9?usp=sharing"},
          {id:"tutor", name:"Tutorial", link:"https://drive.google.com/drive/folders/1-1pc_kdePp4kk7j1e9RTneA-bw94fOcw"},
          {id:"kbf", name:"KBF & Kuis", link:"https://drive.google.com/drive/folders/14tTurpMIk_dzikpZcF7IzuJVkZyvF2VV?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1-09Qu12j6FQEyicNn007xNZQXwnjCpnm?usp=share_link"},
          {id:"up", name:"UP & Ujian Pengganti", link:"https://drive.google.com/drive/folders/16CrZvb-onMqbjJfNlq9i6OqROCo1AfT_?usp=sharing"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1-D6BaRo781srVQmRXjlzmBpFV1i-NmcG?usp=share_link"},
          {id:"latsol", name:"Latihan Soal", link:"https://drive.google.com/drive/folders/1SiXj1G7rH6jPepZm846lSXTgC_hBPxlr"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1-8GpsSEFURdWwvlPzbCZmrQGFPvcJAqm"},
        ]
      },{
        id:"kidasIIA",
        name:"Kimia Dasar IIA",
        image:"/materi/kimia.png",
        imageAlt:"Kimia Dasar IIA",
        file:[
          {id:"catatan", name:"Catatan", link:"hhttps://drive.google.com/drive/folders/1fIQPrdgYthjsNILUHMxQpJoTHY2M7nOH"},
          {id:"aturan", name:"Aturan Perkuliahan", link:"https://drive.google.com/drive/folders/1wYV3uKICd7BfX-RuynKwE6RNnJrXPQn3"},
          {id:"sil", name:"Silabus", link:"https://drive.google.com/drive/folders/1LL-Rcy2LWAirFOasw0vlYO8p0RGtXInh?usp=sharing"},
          {id:"kbf", name:"KBF & Kuis", link:"https://drive.google.com/drive/folders/1i-eJ4fdxMXwgzM25AiTiBq-Dn0zSn7Tr?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1uDvsLaof2unVVJm_sMKVrbgPylH-6cYe?usp=sharing"},
          {id:"up", name:"UP & Ujian Pengganti", link:"https://drive.google.com/drive/folders/1MKDj-ShnxKXhXOTHWf7AU0e44g0M5BCg?usp=sharing"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1YtCRXBaGFTCtL_lz4orPKN6w3JqBVhzm?usp=sharing"},
          {id:"latsol", name:"Latihan Soal", link:"https://drive.google.com/drive/folders/1YtCRXBaGFTCtL_lz4orPKN6w3JqBVhzm?usp=sharing"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1GxwZRSJCPej1XIeZqJTPbcl5TgscYZJ1?usp=sharing"},
        ]
      }, 
      {
        id:"FidasIIA",
        name:"Fisika Dasar IIA",
        image:"/materi/fisika.png",
        imageAlt:"Kimia Dasar IIA",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1CHNVDPytYzrfF5FdITyCHGa1Wmwofbgw?usp=share_link"},
          {id:"info", name:"Informasi Umum", link:"https://drive.google.com/drive/folders/1w7aLCiKnjOjSZCWfJZSLSHlwvUTrIysM?usp=share_link"},
          {id:"sil", name:"LCE", link:"https://drive.google.com/drive/folders/1w7aLCiKnjOjSZCWfJZSLSHlwvUTrIysM?usp=share_link"},
          {id:"kbf", name:"KBF & Kuis", link:"https://drive.google.com/drive/folders/1PnfksxJdE86x5gqjKCImay7vFIvX6CM5?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1S9FYr5eUuphAuiU6YDPadoS32vwkGgLS?usp=sharing"},
          {id:"up", name:"UP & Ujian Pengganti", link:"https://drive.google.com/drive/folders/1nsDO2S0qchSaQ9-7kp_Ac2lj6-VIi_Yd?usp=sharing"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1YdhPtnqG4N720kQKnH5hAvCV8lDBDf92?usp=sharing"},
          {id:"latsol", name:"Latihan Soal", link:"https://drive.google.com/drive/folders/1rzGX2a7h8ND_V9DwwyNj2fY8TTsZSIKw?usp=sharing"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1Ydeygiw7udQM553ChF9xtiMCn_p3oYl6?usp=sharing"},
          {id:"ltm", name:"LTM", link:"https://drive.google.com/drive/folders/1L8-YSLz1jKQgXlOpQhccfMM6fIhGL3td?usp=sharing"},
        ]
      }, 
      {
        id:"PRD",
        name:"Pengenalan Rekayasa dan Desain",
        image:"/materi/prd.png",
        imageAlt:"Pengenalan Rekayasa dan Desain",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1Yv_F0n8Aoy7CbjCOzaY1mMTZjp4upBE7?usp=sharing"},
          {id:"pr", name:"Proyek", link:"https://drive.google.com/drive/folders/1YxmMDBNzVI8i6cLBkUGRjq-FTpKrWdED?usp=sharing"},
          {id:"pst", name:"Pustaka", link:"https://drive.google.com/drive/folders/1Sh4r6zgobbR-h2jacxNz89pkoThoBWVm?usp=sharing"},
          {id:"kan", name:"Tugas Kanvas", link:"https://drive.google.com/drive/folders/15BOoITcGniyfHPVRHmSVGnWiAZoDVfCo?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1u_76qa4TvmS2fM7Chf8vuIt7Yu5jGWWf?usp=sharing"},
          {id:"up", name:"Latihan & UTS", link:"https://drive.google.com/drive/folders/1b_kVaqs6QlGDvOodgf8svYujVXRj_1VD?usp=sharing"},
        ]
      }, 
       {
        id:"Olahraga",
        name:"Olah Raga",
        image:"/materi/olahraga.png",
        imageAlt:"Olahraga",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1ddBNJ2RvR2uNGagmBJCJc_p8Ua1GFFWK?usp=sharing"},
          {id:"ttb", name:"Tata Tertib", link:"https://drive.google.com/file/d/1huKMI5WJjdTDR0SxuxpVrxfq-Vtsl7dy/view?usp=sharing"},
          {id:"sil", name:"Pustaka", link:"https://drive.google.com/drive/folders/1Zl3F2EINJb5rXwQ0ZsMV7ThLXXjnGxpK?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/12vt9nk2hiRMETPIOdjgfxxOezt4Nuyso?usp=sharing"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1aqtUMphqLdFzhB0bBUsvk4CadBd6gSKm"},
        ]
      },
       {
        id:"inggris",
        name:"Bahasa Inggris",
        image:"/materi/Inggris.png",
        imageAlt:"Bahasa Inggris",
        file:[
          {id:"ref", name:"Reference", link:"https://drive.google.com/drive/folders/1yep2D_9cnP1xYvfi2LOSpt-cWGrztmep"},
          {id:"sil", name:"Syllabus", link:"https://drive.google.com/drive/folders/10TH01Qud14YfGl47XD0Rn7K7Nst5X22s"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1mBd2mmHItka67stElFBtbVxM8sg7RA_K?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1Ymt_MqOKiVZqCn6pr8wPaKzDcSITaHmR"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1mKIHAV_liSxyDlKejrp9cl0xbC7fPCdO"},
        ]
      },
       {
        id:"indonesia",
        name:"Bahasa Indonesia",
        image:"/materi/Indonesia.png",
        imageAlt:"Bahasa Indonesia",
        file:[
          {id:"ran", name:"Rangkuman", link:"https://drive.google.com/drive/folders/1D-eZmBQHBwi-M8AjlgIU5mOuLCJRj6zZ"},
          {id:"tug", name:"Kuis & Tugas", link:"https://drive.google.com/drive/folders/1CMsv3JF8KDxgsT8cuqTpHnX44UT6EWrq"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1BjOkaSmPnSTy7tPfC4NKw0NRNMFxn3Ok"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1B8KdfVkDswZgvgka6dmGqpFLsPibXeR4"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1efzSzypHHSavs-nndclgOXRTVVA8VbDf"},
        ]
      },

    ]
  },{
    id:"tekfis",
    name:"Teknik Fisika",
    course:[
      {id: "dasfis",
        name:"Dasar Fisika Teknik",
        image:"/materi/dasfis.png",
        imageAlt:"Dasar Fisika Teknik",
        file:[
          {id:"ref", name:"Buku Referensi", link:"https://drive.google.com/drive/folders/1AL6K6ziYNPTPt8s-TqW-jh8DRIN51gko?usp=sharing"},
          {id:"ppt", name:"Power Point", link:"https://drive.google.com/drive/folders/1JMsijSYUUxnHfw-4QI9EWeKcU5P6s7bd?usp=sharing"}
        ]
      },
      {id: "rl",
        name:"Rangkaian Listrik",
        image:"/materi/RL.png",
        imageAlt:"Rangkaian Listrik",
        file:[
          {id:"ref", name:"Buku Referensi", link:"https://drive.google.com/drive/folders/1aRO4r8CKJcQ7G-xRbjdUZTtukIsSFzY6?usp=sharing"},
          {id:"ppt", name:"Power Point", link:"https://drive.google.com/drive/folders/1ti1OsCOr62-9lpw4qBOWyL8yyNleAdEk?usp=sharing"}
        ]
      },
      {id: "ppm",
        name:"Pengenalan Struktur dan Sifat Material",
        image:"/materi/Material.png",
        imageAlt:"Pengantar Struktur dan Sifat Material",
        file:[
          {id:"ref", name:"Buku Referensi", link:"https://drive.google.com/drive/folders/1Q0GvgXPgSMMPzOFGGcf9UNRxUJT3NJys?usp=sharing"},
          {id:"ppt", name:"Power Point", link:"https://drive.google.com/drive/folders/1JcO9p2jSjSBp7BzZbxoBOyjAzKILHaUP?hl=ID"}
        ]
      },
      {id: "lidia",
        name:"Literasi Data dan Inteligensi Artifisial",
        image:"/materi/lidia.png",
        imageAlt:"Literasi Data dan Inteligensi Artifisial",
        file:[
          {id:"ref", name:"Catatan", link:"https://drive.google.com/drive/folders/132pvxN69FzKifWy2XUl_zcmcAylejh5A?hl=ID"},
          {id:"ppt", name:"Power Point", link:"https://drive.google.com/drive/folders/1uX0SSyVMWRmfB6t6f8migFgdvJpRWgE_?hl=ID"},
          {id:"tubes", name:"Proyek Tugas Besar", link:"https://drive.google.com/drive/folders/1LptypWPtfbkSpxCOKbNSr3RCM_9nGdEY?hl=ID"},
          {id:"sil", name:"Silabus", link:"https://drive.google.com/drive/folders/14-LFe7jA3ah1mwMmjsMpG5rKJG0OqwVH?hl=ID"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1BBkd1hsNgbkaSbpVFS0KZ3nd6gfH28AG?hl=ID"},
        ]
      },
      {
        id:"Olahraga",
        name:"Olah Raga",
        image:"/materi/olahraga.png",
        imageAlt:"Olahraga",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1ddBNJ2RvR2uNGagmBJCJc_p8Ua1GFFWK?usp=sharing"},
          {id:"ttb", name:"Tata Tertib", link:"https://drive.google.com/file/d/1huKMI5WJjdTDR0SxuxpVrxfq-Vtsl7dy/view?usp=sharing"},
          {id:"sil", name:"Pustaka", link:"https://drive.google.com/drive/folders/1Zl3F2EINJb5rXwQ0ZsMV7ThLXXjnGxpK?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/12vt9nk2hiRMETPIOdjgfxxOezt4Nuyso?usp=sharing"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1aqtUMphqLdFzhB0bBUsvk4CadBd6gSKm"},
        ]
      },
      {
        id:"indonesia",
        name:"Bahasa Indonesia",
        image:"/materi/Indonesia.png",
        imageAlt:"Bahasa Indonesia",
        file:[
          {id:"ran", name:"Rangkuman", link:"https://drive.google.com/drive/folders/1D-eZmBQHBwi-M8AjlgIU5mOuLCJRj6zZ"},
          {id:"tug", name:"Kuis & Tugas", link:"https://drive.google.com/drive/folders/1CMsv3JF8KDxgsT8cuqTpHnX44UT6EWrq"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1BjOkaSmPnSTy7tPfC4NKw0NRNMFxn3Ok"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1B8KdfVkDswZgvgka6dmGqpFLsPibXeR4"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1efzSzypHHSavs-nndclgOXRTVVA8VbDf"},
        ]
      },
      {
        id:"matrk",
        name:"Matriks & Ruang Vektor",
        image:"/materi/Matriks.png",
        imageAlt:"matriks ruang vektor",
        file:[
          {id:"ref", name:"Referensi", link:"https://drive.google.com/drive/folders/1WgtDNwaTGN_JW-v7awwIGjcfvw1JH3b9?hl=ID"}
        ]
        
      }
    ]
  },{
    id:"tekdus",
    name:"Teknik Industri",
    course:[
      {
        id:"bio",
        name:"Biologi Dasar",
        image:"/materi/biologi.png",
        imageAlt:"Biologi Dasar",
        file:[
          {id:"ref", name:"Catatan", link:"https://drive.google.com/drive/folders/1sqHJAqygSxfKBtu-oFVeNROtijG5men2?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1QKvr8nGkEBsWf3e8VpBAQzKCg1IlzXKV?usp=sharing"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1J4piHuB8r06-AK98ny-2z3S47PnEToS1"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/11RPkSwk4eLLnifr42Z9IGO1KwZMZnHMg?usp=sharing"},
        ]
      },
      {
        id:"gamtek",
        name:"Menggambar Teknik",
        image:"/materi/gamtek.png",
        imageAlt:"Gambar Teknik",
        file:[
          {id:"ref", name:"Catatan", link:"https://drive.google.com/drive/folders/1brtq4tUu4xqWA4_KqBKW12rh4jZB0PUO?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1btkkD9POyp_1dYXBQT8lqfT0R-y--4p4?usp=sharing"},
          {id:"tub", name:"Tugas Besar", link:"https://drive.google.com/drive/folders/1pDMUfGz1VjXBoxWcPHFSMulcEHFAINwv?usp=sharing"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1dHy2Bwyn0AxKnksffpq_E3FdP_oWdWKS?usp=sharing"},
          {id:"latsol", name:"Latihan Soal", link:"https://drive.google.com/drive/folders/1_ZS2TS8fUJ8nvDl2ukzvUwJTQR8PtHsj"},
          {id:"prak", name:"Praktikum", link:"https://drive.google.com/drive/folders/1buhKgqARN4PL-LOgecTvWrsVYigo4AQE?usp=sharing"},
        ]
      },
      {id:"MatemaIIA",
        name:"Matematika IIA",
        image:"/materi/kalkulus.png", 
        imageAlt:"Matematika IIA",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1-JHEfuBxXnIlbVgEa-YOOLh3ldJvtooE?usp=share_link"},
          {id:"silabus", name:"Silabus", link:"https://drive.google.com/drive/folders/1-Or1nAsukFjdlqiEuNCMlldwiPciUNY9?usp=sharing"},
          {id:"tutor", name:"Tutorial", link:"https://drive.google.com/drive/folders/1-1pc_kdePp4kk7j1e9RTneA-bw94fOcw"},
          {id:"kbf", name:"KBF & Kuis", link:"https://drive.google.com/drive/folders/14tTurpMIk_dzikpZcF7IzuJVkZyvF2VV?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1-09Qu12j6FQEyicNn007xNZQXwnjCpnm?usp=share_link"},
          {id:"up", name:"UP & Ujian Pengganti", link:"https://drive.google.com/drive/folders/16CrZvb-onMqbjJfNlq9i6OqROCo1AfT_?usp=sharing"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1-D6BaRo781srVQmRXjlzmBpFV1i-NmcG?usp=share_link"},
          {id:"latsol", name:"Latihan Soal", link:"https://drive.google.com/drive/folders/1SiXj1G7rH6jPepZm846lSXTgC_hBPxlr"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1-8GpsSEFURdWwvlPzbCZmrQGFPvcJAqm"},
        ]
      },
      {
        id:"FidasIIA",
        name:"Fisika Dasar IIA",
        image:"/materi/fisika.png",
        imageAlt:"Kimia Dasar IIA",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1CHNVDPytYzrfF5FdITyCHGa1Wmwofbgw?usp=share_link"},
          {id:"info", name:"Informasi Umum", link:"https://drive.google.com/drive/folders/1w7aLCiKnjOjSZCWfJZSLSHlwvUTrIysM?usp=share_link"},
          {id:"sil", name:"LCE", link:"https://drive.google.com/drive/folders/1w7aLCiKnjOjSZCWfJZSLSHlwvUTrIysM?usp=share_link"},
          {id:"kbf", name:"KBF & Kuis", link:"https://drive.google.com/drive/folders/1PnfksxJdE86x5gqjKCImay7vFIvX6CM5?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1S9FYr5eUuphAuiU6YDPadoS32vwkGgLS?usp=sharing"},
          {id:"up", name:"UP & Ujian Pengganti", link:"https://drive.google.com/drive/folders/1nsDO2S0qchSaQ9-7kp_Ac2lj6-VIi_Yd?usp=sharing"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1YdhPtnqG4N720kQKnH5hAvCV8lDBDf92?usp=sharing"},
          {id:"latsol", name:"Latihan Soal", link:"https://drive.google.com/drive/folders/1rzGX2a7h8ND_V9DwwyNj2fY8TTsZSIKw?usp=sharing"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1Ydeygiw7udQM553ChF9xtiMCn_p3oYl6?usp=sharing"},
          {id:"ltm", name:"LTM", link:"https://drive.google.com/drive/folders/1L8-YSLz1jKQgXlOpQhccfMM6fIhGL3td?usp=sharing"},
        ]
      },
      {
        id:"indonesia",
        name:"Bahasa Indonesia",
        image:"/materi/Indonesia.png",
        imageAlt:"Bahasa Indonesia",
        file:[
          {id:"ran", name:"Rangkuman", link:"https://drive.google.com/drive/folders/1D-eZmBQHBwi-M8AjlgIU5mOuLCJRj6zZ"},
          {id:"tug", name:"Kuis & Tugas", link:"https://drive.google.com/drive/folders/1CMsv3JF8KDxgsT8cuqTpHnX44UT6EWrq"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1BjOkaSmPnSTy7tPfC4NKw0NRNMFxn3Ok"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1B8KdfVkDswZgvgka6dmGqpFLsPibXeR4"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1efzSzypHHSavs-nndclgOXRTVVA8VbDf"},
        ]
      },
      {
        id:"PRD",
        name:"Pengenalan Rekayasa dan Desain",
        image:"/materi/prd.png",
        imageAlt:"Pengenalan Rekayasa dan Desain",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1Yv_F0n8Aoy7CbjCOzaY1mMTZjp4upBE7?usp=sharing"},
          {id:"pr", name:"Proyek", link:"https://drive.google.com/drive/folders/1YxmMDBNzVI8i6cLBkUGRjq-FTpKrWdED?usp=sharing"},
          {id:"pst", name:"Pustaka", link:"https://drive.google.com/drive/folders/1Sh4r6zgobbR-h2jacxNz89pkoThoBWVm?usp=sharing"},
          {id:"kan", name:"Tugas Kanvas", link:"https://drive.google.com/drive/folders/15BOoITcGniyfHPVRHmSVGnWiAZoDVfCo?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1u_76qa4TvmS2fM7Chf8vuIt7Yu5jGWWf?usp=sharing"},
          {id:"up", name:"Latihan & UTS", link:"https://drive.google.com/drive/folders/1b_kVaqs6QlGDvOodgf8svYujVXRj_1VD?usp=sharing"},
        ]
      }, 
      {id: "lidia",
        name:"Literasi Data dan Inteligensi Artifisial",
        image:"/materi/lidia.png",
        imageAlt:"Literasi Data dan Inteligensi Artifisial",
        file:[
          {id:"ref", name:"Catatan", link:"https://drive.google.com/drive/folders/132pvxN69FzKifWy2XUl_zcmcAylejh5A?hl=ID"},
          {id:"ppt", name:"Power Point", link:"https://drive.google.com/drive/folders/1uX0SSyVMWRmfB6t6f8migFgdvJpRWgE_?hl=ID"},
          {id:"tubes", name:"Proyek Tugas Besar", link:"https://drive.google.com/drive/folders/1LptypWPtfbkSpxCOKbNSr3RCM_9nGdEY?hl=ID"},
          {id:"sil", name:"Silabus", link:"https://drive.google.com/drive/folders/14-LFe7jA3ah1mwMmjsMpG5rKJG0OqwVH?hl=ID"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1BBkd1hsNgbkaSbpVFS0KZ3nd6gfH28AG?hl=ID"},
        ]
      },
    ]
  },
  {
    id:"tekpang",
    name:"Teknik Pangan",
    course:[
      {id:"Kimia2b",
        name:"Kimia Dasar IIB",
        image:"/materi/kimia.png",
        imageAlt:"kimia dasar 2b",
        file:[
          {id:"uj", name:"Ujian", link:"https://drive.google.com/drive/folders/1_p7pxOazykcZ71FDaO-u-pvnmF_LOh1C?usp=sharing"},
          {id:"par", name:"Praktikum", link:"https://drive.google.com/drive/folders/19J_eonqzoqrHst196t2s02xE_EfyzhnK?usp=sharing"},
          {id:"mat", name:"Materi", link:"https://drive.google.com/drive/folders/1KWIgjjEED2hc6Dv0orf-wrdEMN8EEHi1?usp=sharing"},
        ]
      },
      {id:"Pangan",
        name:"Mikroiologi Pangan",
        image:"/materi/pangan.png",
        imageAlt:"Mikrobiologi Pangan",
        file:[
          {id:"uj", name:"Ujian", link:"https://drive.google.com/drive/folders/1fuY_GsYOHSy2lYDThY73RH06aLXKflXt?usp=sharing"},
          {id:"par", name:"Praktikum", link:"https://drive.google.com/drive/folders/1A3k6uxrLCnXfbnhH7N27GyC9MbReF9SL?usp=sharing"},
          {id:"mat", name:"Materi", link:"https://drive.google.com/drive/folders/1yfipGC9aGvWhso3JeaRrKNONfq5TV9lN?usp=sharing"},
        ]
      },
      {id:"analisis",
        name:"Analisis Matematik dan Numerik",
        image:"/materi/analisis.png",
        imageAlt:"Analisis Matematik dan Numerik",
        file:[
          {id:"uj", name:"Ujian", link:"https://drive.google.com/drive/folders/1sHVtE2nGkXdV0e1lfmTYhbQwkw7sfxWp?usp=sharing"},
          {id:"tgs", name:"Tugas", link:"https://drive.google.com/drive/folders/1sHVtE2nGkXdV0e1lfmTYhbQwkw7sfxWp?usp=sharing"},
          {id:"mat", name:"Materi", link:"https://drive.google.com/drive/folders/12Bz_sCB3niDnss81kpmLuKArj2RcPzgd?usp=sharing"},
          {id:"kuis", name:"Kuis", link:"https://drive.google.com/drive/folders/18Sq9G_w0_25tQuoHfii9xn-VOiYlNo8K?usp=sharing"},
        ]
      },
      {
        id:"PRD",
        name:"Pengenalan Rekayasa dan Desain",
        image:"/materi/prd.png",
        imageAlt:"Pengantar Rekayasa dan Desain",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1Yv_F0n8Aoy7CbjCOzaY1mMTZjp4upBE7?usp=sharing"},
          {id:"pr", name:"Proyek", link:"https://drive.google.com/drive/folders/1YxmMDBNzVI8i6cLBkUGRjq-FTpKrWdED?usp=sharing"},
          {id:"pst", name:"Pustaka", link:"https://drive.google.com/drive/folders/1Sh4r6zgobbR-h2jacxNz89pkoThoBWVm?usp=sharing"},
          {id:"kan", name:"Tugas Kanvas", link:"https://drive.google.com/drive/folders/15BOoITcGniyfHPVRHmSVGnWiAZoDVfCo?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1u_76qa4TvmS2fM7Chf8vuIt7Yu5jGWWf?usp=sharing"},
          {id:"up", name:"Latihan & UTS", link:"https://drive.google.com/drive/folders/1b_kVaqs6QlGDvOodgf8svYujVXRj_1VD?usp=sharing"},
        ]
      }, 
      {id: "lidia",
        name:"Literasi Data dan Inteligensi Artifisial",
        image:"/materi/lidia.png",
        imageAlt:"Literasi Data dan Inteligensi Artifisial",
        file:[
          {id:"ref", name:"Catatan", link:"https://drive.google.com/drive/folders/132pvxN69FzKifWy2XUl_zcmcAylejh5A?hl=ID"},
          {id:"ppt", name:"Power Point", link:"https://drive.google.com/drive/folders/1uX0SSyVMWRmfB6t6f8migFgdvJpRWgE_?hl=ID"},
          {id:"tubes", name:"Proyek Tugas Besar", link:"https://drive.google.com/drive/folders/1LptypWPtfbkSpxCOKbNSr3RCM_9nGdEY?hl=ID"},
          {id:"sil", name:"Silabus", link:"https://drive.google.com/drive/folders/14-LFe7jA3ah1mwMmjsMpG5rKJG0OqwVH?hl=ID"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1BBkd1hsNgbkaSbpVFS0KZ3nd6gfH28AG?hl=ID"},
        ]
      },
      {
        id:"inggris",
        name:"Bahasa Inggris",
        image:"/materi/Inggris.png",
        imageAlt:"Bahasa Inggris",
        file:[
          {id:"ref", name:"Reference", link:"https://drive.google.com/drive/folders/1yep2D_9cnP1xYvfi2LOSpt-cWGrztmep"},
          {id:"sil", name:"Syllabus", link:"https://drive.google.com/drive/folders/10TH01Qud14YfGl47XD0Rn7K7Nst5X22s"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1mBd2mmHItka67stElFBtbVxM8sg7RA_K?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1Ymt_MqOKiVZqCn6pr8wPaKzDcSITaHmR"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1mKIHAV_liSxyDlKejrp9cl0xbC7fPCdO"},
        ]
      },
       {
        id:"indonesia",
        name:"Bahasa Indonesia",
        image:"/materi/Indonesia.png",
        imageAlt:"Bahasa Indonesia",
        file:[
          {id:"ran", name:"Rangkuman", link:"https://drive.google.com/drive/folders/1D-eZmBQHBwi-M8AjlgIU5mOuLCJRj6zZ"},
          {id:"tug", name:"Kuis & Tugas", link:"https://drive.google.com/drive/folders/1CMsv3JF8KDxgsT8cuqTpHnX44UT6EWrq"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1BjOkaSmPnSTy7tPfC4NKw0NRNMFxn3Ok"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1B8KdfVkDswZgvgka6dmGqpFLsPibXeR4"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1efzSzypHHSavs-nndclgOXRTVVA8VbDf"},
        ]
      },
    ]
  },
  {
    id:"mr",
    name:"Manajemen Rekayasa",
    course:[
      {id:"MatemaIIA",
        name:"Matematika IIA",
        image:"/materi/kalkulus.png", 
        imageAlt:"Matematika IIA",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1-JHEfuBxXnIlbVgEa-YOOLh3ldJvtooE?usp=share_link"},
          {id:"silabus", name:"Silabus", link:"https://drive.google.com/drive/folders/1-Or1nAsukFjdlqiEuNCMlldwiPciUNY9?usp=sharing"},
          {id:"tutor", name:"Tutorial", link:"https://drive.google.com/drive/folders/1-1pc_kdePp4kk7j1e9RTneA-bw94fOcw"},
          {id:"kbf", name:"KBF & Kuis", link:"https://drive.google.com/drive/folders/14tTurpMIk_dzikpZcF7IzuJVkZyvF2VV?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1-09Qu12j6FQEyicNn007xNZQXwnjCpnm?usp=share_link"},
          {id:"up", name:"UP & Ujian Pengganti", link:"https://drive.google.com/drive/folders/16CrZvb-onMqbjJfNlq9i6OqROCo1AfT_?usp=sharing"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1-D6BaRo781srVQmRXjlzmBpFV1i-NmcG?usp=share_link"},
          {id:"latsol", name:"Latihan Soal", link:"https://drive.google.com/drive/folders/1SiXj1G7rH6jPepZm846lSXTgC_hBPxlr"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1-8GpsSEFURdWwvlPzbCZmrQGFPvcJAqm"},
        ]
      },
       {
        id:"FidasIIA",
        name:"Fisika Dasar IIA",
        image:"/materi/fisika.png",
        imageAlt:"Kimia Dasar IIA",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1CHNVDPytYzrfF5FdITyCHGa1Wmwofbgw?usp=share_link"},
          {id:"info", name:"Informasi Umum", link:"https://drive.google.com/drive/folders/1w7aLCiKnjOjSZCWfJZSLSHlwvUTrIysM?usp=share_link"},
          {id:"sil", name:"LCE", link:"https://drive.google.com/drive/folders/1w7aLCiKnjOjSZCWfJZSLSHlwvUTrIysM?usp=share_link"},
          {id:"kbf", name:"KBF & Kuis", link:"https://drive.google.com/drive/folders/1PnfksxJdE86x5gqjKCImay7vFIvX6CM5?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1S9FYr5eUuphAuiU6YDPadoS32vwkGgLS?usp=sharing"},
          {id:"up", name:"UP & Ujian Pengganti", link:"https://drive.google.com/drive/folders/1nsDO2S0qchSaQ9-7kp_Ac2lj6-VIi_Yd?usp=sharing"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1YdhPtnqG4N720kQKnH5hAvCV8lDBDf92?usp=sharing"},
          {id:"latsol", name:"Latihan Soal", link:"https://drive.google.com/drive/folders/1rzGX2a7h8ND_V9DwwyNj2fY8TTsZSIKw?usp=sharing"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1Ydeygiw7udQM553ChF9xtiMCn_p3oYl6?usp=sharing"},
          {id:"ltm", name:"LTM", link:"https://drive.google.com/drive/folders/1L8-YSLz1jKQgXlOpQhccfMM6fIhGL3td?usp=sharing"},
        ]
      }, 
      {
        id:"gamtek",
        name:"Menggambar Teknik",
        image:"/materi/gamtek.png",
        imageAlt:"Gambar Teknik",
        file:[
          {id:"ref", name:"Catatan", link:"https://drive.google.com/drive/folders/1brtq4tUu4xqWA4_KqBKW12rh4jZB0PUO?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1btkkD9POyp_1dYXBQT8lqfT0R-y--4p4?usp=sharing"},
          {id:"tub", name:"Tugas Besar", link:"https://drive.google.com/drive/folders/1pDMUfGz1VjXBoxWcPHFSMulcEHFAINwv?usp=sharing"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1dHy2Bwyn0AxKnksffpq_E3FdP_oWdWKS?usp=sharing"},
          {id:"latsol", name:"Latihan Soal", link:"https://drive.google.com/drive/folders/1_ZS2TS8fUJ8nvDl2ukzvUwJTQR8PtHsj"},
          {id:"prak", name:"Praktikum", link:"https://drive.google.com/drive/folders/1buhKgqARN4PL-LOgecTvWrsVYigo4AQE?usp=sharing"},
        ]
      },
      {id: "lidia",
        name:"Literasi Data dan Inteligensi Artifisial",
        image:"/materi/lidia.png",
        imageAlt:"Literasi Data dan Inteligensi Artifisial",
        file:[
          {id:"ref", name:"Catatan", link:"https://drive.google.com/drive/folders/132pvxN69FzKifWy2XUl_zcmcAylejh5A?hl=ID"},
          {id:"ppt", name:"Power Point", link:"https://drive.google.com/drive/folders/1uX0SSyVMWRmfB6t6f8migFgdvJpRWgE_?hl=ID"},
          {id:"tubes", name:"Proyek Tugas Besar", link:"https://drive.google.com/drive/folders/1LptypWPtfbkSpxCOKbNSr3RCM_9nGdEY?hl=ID"},
          {id:"sil", name:"Silabus", link:"https://drive.google.com/drive/folders/14-LFe7jA3ah1mwMmjsMpG5rKJG0OqwVH?hl=ID"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1BBkd1hsNgbkaSbpVFS0KZ3nd6gfH28AG?hl=ID"},
        ]
      },
      {id: "mra",
        name:"Manajemen Rekayasa Industri",
        image:"/materi/manajemen.png",
        imageAlt:"Literasi Data dan Inteligensi Artifisial",
        file:[
          {id:"ref", name:"Catatan", link:"https://drive.google.com/drive/folders/1SSFPhvyqF6Ppz5iDENAAQ6xilzRLtnzq?usp=sharing"},
          {id:"ppt", name:"Power Point", link:"https://drive.google.com/drive/folders/14BvgawdhzfxD8hu7CDcrgQAd_zno_Ku7?usp=share_link"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/16YtNJZlvL9O6W-h5E1pdsY_gaWNIDwcX?usp=sharing"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1BPuLDYjoCRGNIk--6G4b4znEyUZvAWJZ?usp=sharing"},
        ]
      },
      {
        id:"PRD",
        name:"Pengenalan Rekayasa dan Desain",
        image:"/materi/prd.png",
        imageAlt:"Pengantar Rekayasa dan Desain",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1Yv_F0n8Aoy7CbjCOzaY1mMTZjp4upBE7?usp=sharing"},
          {id:"pr", name:"Proyek", link:"https://drive.google.com/drive/folders/1YxmMDBNzVI8i6cLBkUGRjq-FTpKrWdED?usp=sharing"},
          {id:"pst", name:"Pustaka", link:"https://drive.google.com/drive/folders/1Sh4r6zgobbR-h2jacxNz89pkoThoBWVm?usp=sharing"},
          {id:"kan", name:"Tugas Kanvas", link:"https://drive.google.com/drive/folders/15BOoITcGniyfHPVRHmSVGnWiAZoDVfCo?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1u_76qa4TvmS2fM7Chf8vuIt7Yu5jGWWf?usp=sharing"},
          {id:"up", name:"Latihan & UTS", link:"https://drive.google.com/drive/folders/1b_kVaqs6QlGDvOodgf8svYujVXRj_1VD?usp=sharing"},
        ]
      }, 
      {
        id:"indonesia",
        name:"Bahasa Indonesia",
        image:"/materi/Indonesia.png",
        imageAlt:"Bahasa Indonesia",
        file:[
          {id:"ran", name:"Rangkuman", link:"https://drive.google.com/drive/folders/1D-eZmBQHBwi-M8AjlgIU5mOuLCJRj6zZ"},
          {id:"tug", name:"Kuis & Tugas", link:"https://drive.google.com/drive/folders/1CMsv3JF8KDxgsT8cuqTpHnX44UT6EWrq"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1BjOkaSmPnSTy7tPfC4NKw0NRNMFxn3Ok"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1B8KdfVkDswZgvgka6dmGqpFLsPibXeR4"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1efzSzypHHSavs-nndclgOXRTVVA8VbDf"},
        ]
      },
    ]
  },
  {
    id:"bi",
    name:"Teknik Bioenergi dan Kemurgi",
    course:[
      {id:"MatemaIIA",
        name:"Matematika IIA",
        image:"/materi/kalkulus.png", 
        imageAlt:"Matematika IIA",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1-JHEfuBxXnIlbVgEa-YOOLh3ldJvtooE?usp=share_link"},
          {id:"silabus", name:"Silabus", link:"https://drive.google.com/drive/folders/1-Or1nAsukFjdlqiEuNCMlldwiPciUNY9?usp=sharing"},
          {id:"tutor", name:"Tutorial", link:"https://drive.google.com/drive/folders/1-1pc_kdePp4kk7j1e9RTneA-bw94fOcw"},
          {id:"kbf", name:"KBF & Kuis", link:"https://drive.google.com/drive/folders/14tTurpMIk_dzikpZcF7IzuJVkZyvF2VV?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1-09Qu12j6FQEyicNn007xNZQXwnjCpnm?usp=share_link"},
          {id:"up", name:"UP & Ujian Pengganti", link:"https://drive.google.com/drive/folders/16CrZvb-onMqbjJfNlq9i6OqROCo1AfT_?usp=sharing"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1-D6BaRo781srVQmRXjlzmBpFV1i-NmcG?usp=share_link"},
          {id:"latsol", name:"Latihan Soal", link:"https://drive.google.com/drive/folders/1SiXj1G7rH6jPepZm846lSXTgC_hBPxlr"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1-8GpsSEFURdWwvlPzbCZmrQGFPvcJAqm"},
        ]
      },
      {id:"Kimia2b",
        name:"Kimia Dasar IIB",
        image:"/materi/kimia.png",
        imageAlt:"kimia dasar 2b",
        file:[
          {id:"uj", name:"Ujian", link:"https://drive.google.com/drive/folders/1_p7pxOazykcZ71FDaO-u-pvnmF_LOh1C?usp=sharing"},
          {id:"par", name:"Praktikum", link:"https://drive.google.com/drive/folders/19J_eonqzoqrHst196t2s02xE_EfyzhnK?usp=sharing"},
          {id:"mat", name:"Materi", link:"https://drive.google.com/drive/folders/1KWIgjjEED2hc6Dv0orf-wrdEMN8EEHi1?usp=sharing"},
        ]
      },
      {id:"Kb",
        name:"Ilmu Kimia Bahan Nabati",
        image:"/materi/nabati.png",
        imageAlt:"Ilmu kimia Bahan Nabati",
        file:[
          {id:"mat", name:"Materi", link:"https://drive.google.com/drive/folders/1ibANDGh0FqvXDSQjRoEbH7k8Xy8MYMZu?usp=sharing"},
        ]
      },
      {id:"pr",
        name:"Kerekausahaan dan Pengenalan Profesi",
        image:"/materi/profesi.png",
        imageAlt:"Kerekausahaan dan Pengenalan Profesi",
        file:[
          {id:"mat", name:"Materi", link:"https://drive.google.com/drive/folders/1ibANDGh0FqvXDSQjRoEbH7k8Xy8MYMZu?usp=sharing"},
        ]
      },
      {
        id:"indonesia",
        name:"Bahasa Indonesia",
        image:"/materi/Indonesia.png",
        imageAlt:"Bahasa Indonesia",
        file:[
          {id:"ran", name:"Rangkuman", link:"https://drive.google.com/drive/folders/1D-eZmBQHBwi-M8AjlgIU5mOuLCJRj6zZ"},
          {id:"tug", name:"Kuis & Tugas", link:"https://drive.google.com/drive/folders/1CMsv3JF8KDxgsT8cuqTpHnX44UT6EWrq"},
          {id:"uts", name:"UTS", link:"https://drive.google.com/drive/folders/1BjOkaSmPnSTy7tPfC4NKw0NRNMFxn3Ok"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1B8KdfVkDswZgvgka6dmGqpFLsPibXeR4"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1efzSzypHHSavs-nndclgOXRTVVA8VbDf"},
        ]
      },
      {
        id:"PRD",
        name:"Pengenalan Rekayasa dan Desain",
        image:"/materi/prd.png",
        imageAlt:"Pengantar Rekayasa dan Desain",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1Yv_F0n8Aoy7CbjCOzaY1mMTZjp4upBE7?usp=sharing"},
          {id:"pr", name:"Proyek", link:"https://drive.google.com/drive/folders/1YxmMDBNzVI8i6cLBkUGRjq-FTpKrWdED?usp=sharing"},
          {id:"pst", name:"Pustaka", link:"https://drive.google.com/drive/folders/1Sh4r6zgobbR-h2jacxNz89pkoThoBWVm?usp=sharing"},
          {id:"kan", name:"Tugas Kanvas", link:"https://drive.google.com/drive/folders/15BOoITcGniyfHPVRHmSVGnWiAZoDVfCo?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/1u_76qa4TvmS2fM7Chf8vuIt7Yu5jGWWf?usp=sharing"},
          {id:"up", name:"Latihan & UTS", link:"https://drive.google.com/drive/folders/1b_kVaqs6QlGDvOodgf8svYujVXRj_1VD?usp=sharing"},
        ]
      }, 
       {
        id:"Olahraga",
        name:"Olah Raga",
        image:"/materi/olahraga.png",
        imageAlt:"Olahraga",
        file:[
          {id:"catatan", name:"Catatan", link:"https://drive.google.com/drive/folders/1ddBNJ2RvR2uNGagmBJCJc_p8Ua1GFFWK?usp=sharing"},
          {id:"ttb", name:"Tata Tertib", link:"https://drive.google.com/file/d/1huKMI5WJjdTDR0SxuxpVrxfq-Vtsl7dy/view?usp=sharing"},
          {id:"sil", name:"Pustaka", link:"https://drive.google.com/drive/folders/1Zl3F2EINJb5rXwQ0ZsMV7ThLXXjnGxpK?usp=sharing"},
          {id:"ppt", name:"Power Point Dosen", link:"https://drive.google.com/drive/folders/12vt9nk2hiRMETPIOdjgfxxOezt4Nuyso?usp=sharing"},
          {id:"uas", name:"UAS", link:"https://drive.google.com/drive/folders/1aqtUMphqLdFzhB0bBUsvk4CadBd6gSKm"},
        ]
      },
    ]
  }
]

export type jurusan ={
  id:number;
  name:string;
  himpunan:string;
  ilmu:string;
  prospekKerja:string;
  gaji:number
}

export const jurusanDept: jurusan[] =[

]