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
      { id: 5, name: "Olahraga", sks: "1" },
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
      { id: 12, name: "Olahraga", sks: "1" },
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
    ]
  }
]
