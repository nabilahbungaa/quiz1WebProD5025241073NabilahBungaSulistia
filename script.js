// Data untuk makanan khas Mojokerto
const foodData = [
    {
        title: "Onde-onde",
        image: "https://asset.kompas.com/crops/2yTHcIhrPnB-8VL_7yrMOwmLzl8=/0x22:750x522/1200x800/data/photo/2020/12/21/5fe033ae033c1.jpg",
        description: "Onde-onde Mojokerto terkenal sebagai oleh-oleh legendaris (contoh: Onde-onde Bo Liem Empunala). Terbuat dari tepung ketan, isi kacang hijau yang manis, permukaan ditaburi wijen. Banyak toko legendaris yang mempertahankan resep turun-temurun; tekstur luar renyah/empuk, isi lembut. Cocok untuk buah tangan dan mudah ditemukan di pasar/oleh-oleh kota.",
        ingredients: ["Tepung ketan", "Kacang hijau", "Gula", "Wijen"],
        place: "Onde-onde Bo Liem (Jalan Empunala)",
        price: "Rp5.000–Rp30.000 (tergantung ukuran & kemasan)"
    },
    {
        title: "Lontong Balap",
        image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/74/2024/05/01/lontong-balap-2067732781.jpg",
        description: "Lontong Balap di Mojokerto punya citarasa khas: lontong disajikan dengan tahu goreng, tauge, lentho (gorengan dari kacang/tolo), bawang goreng dan kuah berbasis kaldu kacang/petis. Beberapa kedai lokal punya resep turun-temurun dan porsi melimpah sehingga sering jadi pilihan wisata kuliner warga & pengunjung.",
        ingredients: ["Lontong", "Tahu goreng", "Tauge", "Lentho", "Kuah kacang/petis", "Bawang goreng"],
        place: "Warung Lontong Balap tradisional di beberapa pasar & kedai Sooko / Semeru",
        price: "Sekitar Rp8.000–Rp20.000 per porsi"
    },
    {
        title: "Botok Tempe",
        image: "https://asset.kompas.com/crops/bfsE42zY5P6rfGfOhI54JBWcoJo=/0x533:667x978/1200x800/data/photo/2023/08/25/64e7f615069c8.jpeg",
        description: "Botok Tempe Mojokerto adalah olahan tempe yang diulek kasar dicampur ampas kelapa, bumbu, dan kadang udang/teri, lalu dibungkus daun pisang dan dikukus. Rasanya gurih dan teksturnya lembut; sering dijumpai sebagai lauk atau makanan tradisional setempat.",
        ingredients: ["Tempe", "Ampas kelapa", "Bumbu rempah", "Daun pisang", "Udang/teri (opsional)"],
        place: "Dijual di warung tradisional dan pasar Mojokerto",
        price: "Rp7.000–Rp25.000 per porsi / bungkus"
    },
    {
        title: "Bubur Sruntul",
        image: "https://harianmuba.bacakoran.co/upload/0beecac6801147ef8c786484f27348b6.jpg",
        description: "Bubur Sruntul (sering disebut bubur mutiara) adalah makanan manis tradisional Mojokerto yang dibuat dari tepung tapioka/tepung sagu yang dibentuk butiran kecil menyerupai mutiara, disajikan dengan kuah manis/santan. Populer sebagai kudapan ringan dan termasuk kuliner khas setempat.",
        ingredients: ["Tepung tapioka / sagu", "Gula", "Santan (opsional)"],
        place: "Pasar tradisional dan beberapa penjual jajanan lokal",
        price: "Terjangkau (jajanan pasar)"
    },
    {
        title: "Sate Keong",
        image: "https://carica.id/wp-content/uploads/2022/02/Satekeong-200x135.jpg",
        description: "Sate Keong adalah olahan keong sawah yang ditusuk and dibumbui khas daerah; teksturnya kenyal dan cita rasanya gurih bila dimasak dengan bumbu tepat. Di Mojokerto, sate keong disebut sebagai bagian dari kuliner tradisional yang menarik untuk dicoba.",
        ingredients: ["Keong sawah", "Bumbu sate (sesuai resep lokal)"],
        place: "Warung-warung tradisional tertentu di Mojokerto",
        price: "Rp15.000–Rp25.000 per porsi (perkiraan)"
    },
    {
        title: "Es Gronjongan Majapahit",
        image: "https://img-global.cpcdn.com/recipes/23a71767cc1f7e2f/640x640sq80/photo.webp",
        description: "Es Gronjongan Majapahit populer di Mojokerto, biasa berisi campuran agar-agar, santan, sirup, dan potongan lainnya sehingga menghasilkan minuman manis dan menyegarkan—sering diminum saat cuaca panas atau saat buka puasa. Termasuk minuman khas yang disebut dalam ragam kuliner Mojokerto.",
        ingredients: ["Agar-agar", "Santan", "Sirup/gula", "Es"],
        place: "Warung minuman tradisional & pasar",
        price: "Terjangkau (minuman tradisional)"
    }
];

// Data untuk tempat wisata Mojokerto (20 tempat)
const touristData = [
    {
        title: "Situs Trowulan (Kompleks Arkeologi Majapahit)",
        image: "https://cdn1-production-images-kly.akamaized.net/JaNMAJ_qSS-JXE0oM_Mmh4-SjGI=/1280x720/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2875397/original/092167500_1565164733-iStock-933379748.jpg",
        description: "Situs Trowulan adalah kompleks arkeologi terluas dan terpenting di wilayah Mojokerto yang diyakini sebagai pusat pemerintahan Kerajaan Majapahit pada abad ke-13—15. Area ini menyimpan jejak tata kota kuno berupa sisa bangunan, gerbang, petirtaan, dan struktur batu bata yang tersebar di radius luas; penggalian arkeologi yang berlangsung sejak era kolonial hingga sekarang terus mengungkap artefak dan struktur yang memperkaya pemahaman kita tentang peradaban Majapahit. Karena skala dan keragaman temuan, Trowulan sering dianggap sebagai situs kunci untuk studi sejarah dan arkeologi pra-modern di Nusantara.",
        location: "Kecamatan Trowulan, Kabupaten Mojokerto",
        hours: "Setiap hari 08:00 - 16:00",
        map: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63287.19785839999!2d112.44980908721881!3d-7.525811143308202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssitus%20trowulan!5e0!3m2!1sid!2sid!4v1758689534173!5m2!1sid!2sid" 
    },
    {
        title: "Candi Tikus (Petirtaan di Trowulan)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRTZPQ_A8GYx0z4PaTtCMVHzQ3lgR6MPl-A&s",
        description: "Candi Tikus adalah kompleks petirtaan (kolam ritual/bathing place) berupa basemen batu bata yang ditemukan di area Trowulan dan dipulihkan pada tahun 1980-an; bentuknya kotak dengan anak tangga yang turun ke kolam, menunjukkan fungsi ritual atau kebersihan yang penting bagi masyarakat Majapahit. Nama 'Tikus' berasal dari temuan awal saat galian — tetapi fungsi arkeologisnya adalah petirtaan atau tempat mandi upacara; struktur dan susunan batu bata menjelaskan teknik pembetonan dan pengelolaan air era kuno. Karena sifatnya yang khas, situs ini sering dipelajari untuk memetakan aspek kehidupan sehari-hari dan ritual pada masa Majapahit.",
        location: "Dusun Kraton / Desa Temon, Kec. Trowulan, Mojokerto",
        hours: "Setiap hari 07:00 - 16:00",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.029185019296!2d112.40095677500273!3d-7.571796992442393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786d1fdd9add5d%3A0xad81bb21c4b5b075!2sCandi%20Tikus!5e0!3m2!1sid!2sid!4v1758689949836!5m2!1sid!2sid" 
    },
    {
        title: "Candi Bajang Ratu (Gapura Majapahit ikonik)",
        image: "https://travelspromo.com/wp-content/uploads/2021/06/Komplek-Gapura-Bajangratu-Riza-Yunan-e1624970890805.jpg",
        description: "Candi Bajang Ratu (sering disebut Gapura Bajangratu) adalah gerbang bergaya paduraksa yang menjadi salah satu simbol arsitektur Majapahit paling terkenal di Trowulan; struktur ini diperkirakan berfungsi sebagai portal upacara, dihias relief dan proporsi tinggi yang memberi kesan monumental. Selain nilai estetika, gapura ini memiliki narasi historis—beberapa interpretasi mengaitkannya dengan monumen untuk peristiwa tertentu atau bagi penguasa setempat—sehingga menjadikannya objek studi arkeologi sekaligus objek wisata terfavorit untuk foto. Keutuhan bentuknya (meski ada rekonstruksi) membuat Bajang Ratu sering menjadi landmark pembuka kunjungan ke Trowulan.",
        location: "Jl. Candi Bajang Ratu, Pelem, Temon, Kec. Trowulan, Mojokerto",
        hours: "Setiap hari 07:00 - 16:45",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0665020355596!2d112.39618177500269!3d-7.567728992446329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786d09fc86984d%3A0xda8a79c97c17aa84!2sCandi%20Bajang%20Ratu!5e0!3m2!1sid!2sid!4v1758690208467!5m2!1sid!2sid" 
    },
    {
        title: "Gapura Wringinlawang (Gerbang Banyan Tree Gate)",
        image: "https://www.superradio.id/wp-content/uploads/2021/05/Wringin-Lawang1.jpeg",
        description: "Wringinlawang adalah gerbang batu bata besar peninggalan Majapahit—jenis candi bentar / split gateway—yang memancarkan karakter arsitektur Jawa kuno lewat batu bata merah dan proporsi monumental. Letaknya di kawasan Trowulan dan memiliki nilai penting sebagai penanda tata kota kuno; ukurannya yang besar menunjukkan peran fungsional sebagai pintu gerbang yang mungkin membatasi kawasan istana atau area penting lain. Struktur ini juga memberi gambaran teknik bangunan Majapahit yang khas dan daya tahan material yang luar biasa.",
        location: "Jatipasar, Trowulan, Mojokerto",
        hours: "Terbuka untuk umum (24 jam)",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3022923957597!2d112.38841117500246!3d-7.541974592471454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786d248d04aae1%3A0xdb530f81df5dd80c!2sGapura%20Wringin%20Lawang%20Trowulan!5e0!3m2!1sid!2sid!4v1758765701957!5m2!1sid!2sid" 
    },
    {
        title: "Museum Gubug Wayang Mojokerto",
        image: "https://gubug-wayang.com/wp-content/uploads/2025/01/DSC0549-1536x1024.jpg",
        description: "Museum Gubug Wayang menyimpan koleksi wayang kulit, wayang golek, topeng, dan artefak pertunjukan tradisional Nusantara — sebuah pusat kecil namun kaya untuk memahami ragam teater rakyat Jawa dan warisan pertunjukan Mojokerto. Museum ini didirikan oleh komunitas/badan pelestarian budaya dan menampilkan koleksi yang tidak hanya memamerkan wayang tetapi juga konteks budaya, alat musik gamelan, serta dokumentasi pertunjukan; pengunjung mendapat gambaran bagaimana wayang menjadi medium pendidikan, hiburan, dan religius di Jawa. Sebagai museum lokal, koleksinya sangat relevan untuk sekolah, peneliti budaya, dan wisatawan yang ingin menggali kebudayaan Jawa Timur.",
        location: "Jl. R.A. Kartini No.23, Kel. Kauman, Kec. Prajurit Kulon, Kota Mojokerto",
        hours: "Setiap hari 09:00 - 16:00",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.99592048336!2d112.42762127500177!3d-7.465700392545876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780b2e6914f90d%3A0x140a6c48cd0ab1d8!2sMuseum%20Gubug%20Wayang%20Mojokerto!5e0!3m2!1sid!2sid!4v1758766257288!5m2!1sid!2sid" 
    },
    {
        title: "Alun-Alun Kota Mojokerto",
        image: "https://cdn.ngopibareng.id/uploads/2021/2021-09-09/tugu-alun-alun-direhap-bangunan-bersejarah-kok-dirobohkan--01.webp",
        description: "Alun-alun Kota Mojokerto adalah ruang publik inti yang berfungsi sebagai jantung sosial kota—dengan taman, monumen, area berkumpul serta jajanan malam yang khas. Sejak masa kolonial alun-alun ini berubah fungsi mengikuti perkembangan kota tetapi tetap menjadi ruang pertemuan warga untuk acara seremonial, pasar malam, dan kegiatan komunitas; bagi wisatawan, alun-alun memberi pengalaman sosio-kultural yang otentik dan kesempatan mencicipi kuliner lokal. Karena posisi sentralnya, alun-alun juga menjadi titik permulaan yang baik untuk city-walk atau rute kuliner malam.",
        location: "Jl. Kyai H. Hasyim Ashari No.1, Mergelo, Kauman, Prajurit Kulon, Kota Mojokerto",
        hours: "Terbuka untuk umum (24 jam)",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.019170564113!2d112.42937527500167!3d-7.463130292548376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780df51d5dde85%3A0xf7ab9702d5fed3ad!2sAlun-Alun%20Mojokerto!5e0!3m2!1sid!2sid!4v1758766743509!5m2!1sid!2sid" 
    },
    {
        title: "Kolam Segaran (Segaran Pool)",
        image: "https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p3/103/2024/09/02/export202409020947534760-7811608.jpg",
        description: "Kolam Segaran adalah struktur kolam raksasa di Trowulan yang diyakini sebagai salah satu reservoir atau kolam rekreasi Majapahit—dengan ukuran sangat besar dan dinding batu bata yang mengelilinginya, kolam ini menonjol sebagai bukti kemampuan pengelolaan air peradaban kuno. Segaran sering disebut sebagai 'kolam tersisa' yang memberi gambaran bagaimana sistem air dan tata kota Majapahit berfungsi; penemuan ini memperkaya hipotesis tentang penggunaan lahan, irigasi, dan ritus yang berkaitan dengan air. Karena dimensionya, kolam ini menjadi salah satu fitur penting studi arkeologi Trowulan.",
        location: "Dusun Unggahan / Desa Trowulan, Kecamatan Trowulan",
        hours: "Terbuka untuk umum (24 jam)",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31641.241318119613!2d112.36217815643533!3d-7.5580549671587445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786d1d47caf583%3A0xfb24f94e62bd4494!2sKolam%20Segaran!5e0!3m2!1sid!2sid!4v1758767887242!5m2!1sid!2sid" 
    },
    {
        title: "Candi Jolotundo (Petirtaan di lereng Gunung Penanggungan)",
        image: "https://www.eastjava.com/books/glorious/images/big/jolotundo_02.jpg",
        description: "Candi Jolotundo adalah kompleks petirtaan suci yang terletak di lereng Gunung Penanggungan; struktur batuannya yang rapi, mata air yang mengalir, dan nuansa pegunungan memberikan impresi spiritual dan alamiah yang kuat. Dikenal sebagai salah satu petirtaan tertinggi di kawasan Penanggungan, Jolotundo sering dikaitkan dengan ritual pembersihan dan tradisi religius kuno—pengunjung merasakan kombinasi arsitektur candi dan landscape pegunungan yang menenangkan. Keberadaan sumber air dan setting ketinggian menjadikan Jolotundo berbeda dari petirtaan di dataran rendah.",
        location: "Desa Seloliman, Kecamatan Trawas",
        hours: "Terbuka untuk umum (24 jam)",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.6847762812326!2d112.59283827500329!3d-7.609239592405904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7876718ecc41ad%3A0x4adea6c2fe00abec!2sCandi%20Jolotundo!5e0!3m2!1sid!2sid!4v1758767559894!5m2!1sid!2sid" 
    },
    {
        title: "Gunung Penanggungan (trek singkat & situs purbakala)",
        image: "https://www.nakamura.co.id/uploads/gunung_penanggungan_id.jpg",
        description: "Gunung Penanggungan adalah gunung yang relatif rendah namun kaya situs arkeologi — jalurnya dipenuhi candi-candi kecil (candi peringatan/petirtaan) dan prasasti yang menunjukkan bahwa gunung ini memiliki peran religius sejak zaman kuno. Meskipun tingginya tidak ekstrem, Penanggungan menawarkan perpaduan trekking ringan, panorama alam, dan nilai sejarah—mendaki gunung ini memberi sensasi spiritual sekaligus petualangan; banyak situs kecil di sepanjang jalur yang patut dihentikan untuk observasi.",
        location: "Perbatasan Mojokerto – Pasuruan",
        hours: "Akses: setiap hari (pos pendakian buka jam 06:00 - 16:00)",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31637.051087961183!2d112.59955975647249!3d-7.615027563604888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d8a014c487ad%3A0xc3bad5c8087f05f2!2sGn.%20Penanggungan!5e0!3m2!1sid!2sid!4v1758768508667!5m2!1sid!2sid" 
    },
    {
        title: "Air Terjun Coban Canggu (Pacet)",
        image: "https://www.rumah123.com/seo-cms/assets/large_daya_tarir_coban_canggu_5748143220/large_daya_tarir_coban_canggu_5748143220.jpg",
        description: "Coban Canggu adalah air terjun yang terletak di Desa Padusan, Kecamatan Pacet—dikenal karena debit airnya yang jernih, tebing batu, dan suasana hutan yang rimbun; ketinggian tebingnya memberi latar dramatis sehingga cocok sebagai spot foto dan untuk menikmati udara pegunungan. Akses dari loket ke lokasi air terjun relatif singkat (sekitar 500 meter) melalui jalur yang sudah ditata (paving block), sehingga ideal untuk keluarga dan pengunjung yang tidak ingin trekking berat.",
        location: "Desa Padusan, Kecamatan Pacet, Kabupaten Mojokerto",
        hours: "Setiap hari 08:00 - 16:00",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.012189167219!2d112.54402747500389!3d-7.681837192335182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7879e00e13d03b%3A0x64bc583358710c81!2sPadusan%20Agro%20Wisata!5e0!3m2!1sid!2sid!4v1758768939277!5m2!1sid!2sid" 
    },
    {
        title: "Bukit Watu Jengger (Watu Jengger Hill)",
        image: "https://tugujatim.id/wp-content/uploads/2025/04/4694a5e1-822c-44c6-abd3-a4d05e689cbd-3048350981.webp",
        description: "Bukit Watu Jengger adalah bukit di kawasan Taman Hutan Raya Raden Soerjo yang banyak diminati karena pemandangan panoramanya dan ketinggian sedang (~1.100 mdpl) sehingga cocok untuk pendaki pemula yang ingin pengalaman alam pasca kota. Wilayah ini menawarkan vegetasi hutan, jalur trekking ringan, dan titik-titik foto untuk sunrise/sunset yang instagramable; suasana hutan yang sejuk juga menjadi daya tarik utama bagi keluarga dan komunitas pecinta alam.",
        location: "Desa Nawangan / Desa Tawangrejo, Kec. Jatirejo",
        hours: "Tahura operating hours / check local park management (likely daylight hours)",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.850152250421!2d112.43222897500407!3d-7.699225392318264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78700298ac40f5%3A0xa132e93cc41152cf!2sBukit%20Watu%20Jengger!5e0!3m2!1sid!2sid!4v1758770269760!5m2!1sid!2sid" 
    },
    {
        title: "Ranu Manduro (danau dataran tinggi / viewpoint)",
        image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/720x0/webp/photo/2024/06/19/1821146343.jpg",
        description: "Ranu Manduro adalah danau/hamparan alam di kawasan pegunungan Mojokerto yang belakangan menjadi populer karena pemandangan hijau luas, kabut pagi yang cantik, dan lanskap bukit bergulung—memberi nuansa tenang dan kesan 'highland' yang mudah diakses dari kota. Tempat ini ideal untuk piknik, fotografi lanskap, dan bersantai jauh dari kebisingan perkotaan; fasilitas di area sering dikembangkan oleh pengelola lokal untuk menunjang kunjungan wisata.",
        location: "Dusun Manduro, Desa Manduro Manggung Gajah, Kecamatan Ngoro",
        hours: "Setiap hari - check operator untuk jam dan biaya masuk",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.025826611049!2d112.64599967500278!3d-7.572162992442038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7df490bcbd99b%3A0x21b3f133426bae53!2sRanu%20Manduro!5e0!3m2!1sid!2sid!4v1758769925101!5m2!1sid!2sid" 
    },
    {
        title: "Air Terjun Watu Lumpang",
        image: "https://assets.pikiran-rakyat.com/crop/0x200:1191x986/720x0/webp/photo/2024/01/29/3299522680.png",
        description: "Air Terjun Watu Lumpang adalah salah satu air terjun populer di kawasan Pacet/Mojokerto—terkenal karena aksesnya yang mudah, kolam dangkal yang ramah anak, dan pemandangan alam yang asri; ini membuatnya pilihan ideal untuk family trip. Air terjun relatif tidak terlalu tinggi tetapi menyediakan area bermain air yang aman di kolam bawah, serta jalur pendek dari area parkir sehingga tidak memerlukan usaha trekking berat.",
        location: "Hutan, Kecamatan Pacet, Kabupaten Mojokerto",
        hours: "Setiap hari (jam taman) - check Tahura / pariwisata lokal untuk jam tepat",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.574893634643!2d112.52559227500441!3d-7.728674292289544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78797dcda6434d%3A0x43fb4c6152a9796b!2sAir%20Terjun%20Watu%20Lumpang!5e0!3m2!1sid!2sid!4v1758770628481!5m2!1sid!2sid" 
    },
    {
        title: "Pemandian Air Panas Padusan (Pacet)",
        image: "https://cdn.timesmedia.co.id/images/2019/01/19/Wisata-Pemandian-Air-Panas-Padusan-Pacet.jpg",
        description: "Pemandian Air Panas Padusan adalah fasilitas wisata alam yang memanfaatkan mata air panas dari aktivitas vulkanik Gunung Welirang/Welirang area; pengunjung dapat berendam di kolam air panas alami yang dipercaya mengandung mineral (belerang) yang bersifat relaksasi. Kawasan ini memiliki beberapa kolam, fasilitas onsen/resort kecil, dan layanan berendam serta pijat tradisional pada beberapa operator lokal, sehingga populer untuk akhir pekan dan paket relaksasi dari kota besar di sekitar.",
        location: "Jl. Air Panas, Padusan, Kec. Pacet, Kab. Mojokerto, Jawa Timur 61374",
        hours: "Biasa: 07:00–18:00 (verifikasi operator). Disarankan: cek sehari sebelum kunjungan",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.9788539576457!2d112.54638477500394!3d-7.685417592331702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7879770149c5b9%3A0xad92d85415fae576!2sPemandian%20Air%20Panas%20Padusan!5e0!3m2!1sid!2sid!4v1758770920249!5m2!1sid!2sid" 
    },
    {
        title: "Maha Vihara Mojopahit (Maha Vihara Majapahit)",
        image: "https://pariwisata.mojokertokab.go.id/storage/Np5jqwSqBOh6AK8uergzHxf5ukNho7-metaYnVkaGF0aWR1ci5qcGVn-.jpg",
        description: "Maha Vihara Mojopahit adalah kompleks vihara besar di Trowulan yang menjadi pusat kegiatan Buddhis dan rumah bagi salah satu patung Buddha tidur (Sleeping Buddha) terbesar di Indonesia; vihara ini berdiri sejak akhir 1980-an dan menjadi destinasi religius serta objek wisata budaya. Kompleksnya memadukan arsitektur Jawa dan elemen Buddhis, menyediakan ruang ibadah, area ziarah, dan fasilitas pendidikan bagi umat serta pengunjung. Keberadaan patung Buddha tidur menjadikan vihara ini ikon religius yang menarik pengunjung lintas keyakinan karena ukurannya dan nilai artistiknya.",
        location: "Gg. I, Siti Inggil, Bejijong, Kec. Trowulan, Kab. Mojokerto",
        hours: "Periksa situs vihara untuk jam kunjungan dan jadwal ritual",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.178116457489!2d112.36762597500262!3d-7.555548692458214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786ce50632c3a7%3A0x3ca5eb0513d142ca!2sMaha%20Vihara%20Mojopahit!5e0!3m2!1sid!2sid!4v1758771244313!5m2!1sid!2sid" 
    },
    {
        title: "Bukit Kayoe Putih (Wisata Hutan Kayu Putih)",
        image: "https://travelspromo.com/wp-content/uploads/2022/08/area-taman-dan-kolam-renang-di-bukit-kayoe-putih-mojokerto.jpg",
        description: "Bukit Kayoe Putih (Kayu Putih) adalah destinasi wisata edukasi dan alam yang memanfaatkan hamparan hutan kayu putih—pohon yang daunnya biasa disuling menjadi minyak kayu putih—sebagai daya tarik utama. Selain panorama hutan yang unik (barisan pohon kayu putih terlihat seragam dan estetik), area ini juga menyajikan edukasi tentang pengolahan minyak kayu putih dan pemberdayaan lokal; destinasi ini berkembang sebagai wisata berbasis komunitas dengan cerita sosial ekonomi menarik.",
        location: "Perbatasan Gresik–Mojokerto (Desa Kupang / Jetis area)",
        hours: "Periksa operator taman / Perhutani untuk jam buka",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.673991982724!2d112.42779154721465!3d-7.390380331800947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780f84336542a9%3A0x1a566005ca6aee59!2sWisata%20Bukit%20Kayoe%20putih!5e0!3m2!1sid!2sid!4v1758771580608!5m2!1sid!2sid" 
    },
    {
        title: "Taman Ghanjaran (Trawas)",
        image: "https://nativeindonesia.com/foto/2023/09/objek-wisata-taman-ghanjaran-mojokerto.jpg",
        description: "Taman Ghanjaran adalah taman rekreasi di kawasan Trawas yang menyediakan wahana keluarga, taman bunga, kolam renang, dan area bermain—dirancang sebagai destinasi rekreasi keluarga dekat Mojokerto yang menggabungkan hiburan ringan dan spot foto. Tempat ini cocok untuk kunjungan keluarga karena fasilitas yang cenderung lengkap dan suasana area yang mudah diakses dari rute Trawas/Pacet.",
        location: "Trawas, Mojokerto",
        hours: "Periksa operator; jam biasa taman keluarga",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.1569514855896!2d112.60199437404754!3d-7.66626957586903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e787770df02e197%3A0x1dd4f54105f4061d!2sTaman%20Ghanjaran!5e0!3m2!1sid!2sid!4v1758771994102!5m2!1sid!2sid" 
    },
    {
        title: "Kampung Organik Brenjonk (Ekowisata Trawas)",
        image: "https://akcdn.detik.net.id/community/media/visual/2018/03/05/f494297e-7e62-4c18-94cc-e33603cfc33d_169.jpeg?w=700&q=90",
        description: "Kampung Organik Brenjonk adalah desa wisata berbasis pertanian organik di Trawas yang memadukan edukasi pertanian, pengalaman panen, dan produk pangan sehat—program ini didukung oleh inisiatif pemberdayaan masyarakat untuk mengembangkan ekowisata dan UMKM lokal. Pengunjung dapat belajar teknik bercocok tanam organik, mencoba aktivitas panen, dan menikmati produk segar sambil menikmati udara pegunungan; pendekatan edukatif ini cocok untuk keluarga dan pelajar.",
        location: "Kampung Organik Brenjonk, Trawas",
        hours: "Periksa jadwal program lokal (workshop / panen)",
        map: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15817.333195091373!2d112.59005459786827!3d-7.647262777900393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skampung%20organik%20brenjonk!5e0!3m2!1sid!2sid!4v1758772377819!5m2!1sid!2sid" 
    },
    {
        title: "Duyung / Selotapak Trawas Hill (Selotapak / Duyung Trawas)",
        image: "https://asset.kompas.com/crops/cY2fESz0LZHqlvRboxeXuONqBcI=/0x181:768x693/1200x800/data/photo/2024/01/25/65b188a774c58.jpg",
        description: "Duyung Trawas Hill adalah area bukit dan penginapan/outbound di desa Duyung (Trawas) yang menawarkan panorama perbukihan, fasilitas penginapan, serta kegiatan outbound; sering menjadi tujuan keluarga dan rombongan yang ingin menikmati udara sejuk dan fasilitas rekreasi. Lokasinya strategis sebagai base untuk mengeksplorasi Trawas—penginapan di sini kerap dipilih untuk liburan akhir pekan karena kombinasi penginapan murah dan akses dekat ke objek wisata alam.",
        location: "Duyung, Trawas, Mojokerto",
        hours: "Periksa operator / penginapan (akses 24 jam untuk penginapan; aktivitas harian bervariasi)",
        map: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7908.671356057109!2d112.61536744131965!3d-7.64700601947629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sduyung%20trawas%20hill!5e0!3m2!1sid!2sid!4v1758772707971!5m2!1sid!2sid" 
    },
    {
        title: "Air Terjun Dlundung (Trawas)",
        image: "https://pariwisata.mojokertokab.go.id/storage/HyzTdESob5Wy7aEPHLlmPXKgOvFyTJ-metaZGx1bmR1bmcuanBlZw==-.jpg",
        description: "Air Terjun Dlundung adalah salah satu air terjun yang memorable di Trawas—memiliki ketinggian sekitar 60 meter dengan kolam kecil di bawahnya yang memungkinkan pengunjung bermain air dan berkemah di area sekitarnya. Trek menuju Dlundung dapat menantang sehingga menjadi favorit bagi pengunjung yang mencari kombinasi hiking dan eksplorasi alam; pemandangan lembah dan hutan sekitarnya memberikan reward bagi pendaki yang tekun.",
        location: "Dlundung, Trawas — verifikasi dengan pariwisata lokal / Google Maps",
        hours: "Periksa operator / pariwisata lokal. Biasanya jam siang hari",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.0118149720006!2d112.59123667500391!3d-7.681877392335139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78781fc520cca9%3A0x9c60ea727495fe5a!2sAir%20Terjun%20Dlundung!5e0!3m2!1sid!2sid!4v1758773056543!5m2!1sid!2sid" 
    }
];

// Function to toggle accordion items
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isActive = content.classList.contains('active');
    
    // Close all accordion items
    document.querySelectorAll('.accordion-content').forEach(item => {
        item.classList.remove('active');
    });
    
    document.querySelectorAll('.accordion-header i').forEach(icon => {
        icon.className = 'fas fa-chevron-down';
    });
    
    // Open clicked item if it was closed
    if (!isActive) {
        content.classList.add('active');
        element.querySelector('i').className = 'fas fa-chevron-up';
    }
}

// Function to scroll to a section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Function to open food modal
function openFoodModal(index) {
    const food = foodData[index];
    document.getElementById('modalFoodImg').src = food.image;
    document.getElementById('modalFoodTitle').textContent = food.title;
    document.getElementById('modalFoodDesc').textContent = food.description;
    
    const ingredientsList = document.getElementById('modalFoodIngredients');
    ingredientsList.innerHTML = '';
    food.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    document.getElementById('modalFoodPlace').textContent = food.place;
    document.getElementById('modalFoodPrice').textContent = food.price;
    
    document.getElementById('foodModal').style.display = 'block';
}

// Function to open tourist modal
function openTouristModal(index) {
    const tourist = touristData[index];
    document.getElementById('modalTouristImg').src = tourist.image;
    document.getElementById('modalTouristTitle').textContent = tourist.title;
    document.getElementById('modalTouristDesc').textContent = tourist.description;
    document.getElementById('modalTouristLocation').textContent = tourist.location;
    document.getElementById('modalTouristHours').textContent = tourist.hours;
    document.getElementById('modalTouristMap').src = tourist.map;
    
    document.getElementById('touristModal').style.display = 'block';
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Set up event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});