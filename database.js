// File: database.js
// Kategori: "Makanan", "Alat Perkuliahan", "Merch", dan "Jastip"

const storeData = [
    // 1. Toko Khusus Himpunan
    {
        storeId: "himpunan_teknik",
        password: "himpunan_teknik123",
        storeName: "Himpunan Teknik",
        storeLogo: "https://i.ibb.co/L8WdKLc/logo-himpunan.png",
        waNumber: "6281281865275",
        instagram: "huoby_",
        products: [
            { id: "merch_jaket_baru", name: "Jaket Bomber Teknik v2", description: "Desain baru 2025, bahan waterproof", kategori: "Merch", estimasi: "Pre-Order", price: 215000, image: "https://picsum.photos/seed/jaketbaru/400", tanggalUpload: "2025-08-12" },
            { id: "merch_topi_baru", name: "Topi Baseball Teknik", description: "Bahan katun, bordir premium", kategori: "Merch", estimasi: "Ready Stock", price: 55000, image: "https://picsum.photos/seed/topibaru/400", tanggalUpload: "2025-08-11" },
            { id: "merch_kaos", name: "Kaos Himpunan Eksklusif", description: "Bahan Cotton Combed 30s, warna hitam", kategori: "Merch", estimasi: "Pre-Order 7 Hari", price: 95000, image: "https://picsum.photos/seed/kaos/400", tanggalUpload: "2025-08-01" },
            { id: "merch_lanyard", name: "Lanyard Teknik Keren", description: "Bahan premium dengan cetak full color", kategori: "Merch", estimasi: "Ready Stock", price: 25000, image: "https://picsum.photos/seed/lanyard/400", tanggalUpload: "2025-08-01" },
            { id: "merch_stiker", name: "Sticker Pack Edisi Teknik", description: "Isi 5 stiker waterproof dan tahan lama", kategori: "Merch", estimasi: "Ready Stock", price: 10000, image: "https://picsum.photos/seed/stiker/400", tanggalUpload: "2025-07-28" },
            { id: "merch_ganci", name: "Gantungan Kunci Akrilik", description: "Desain logo Himpunan terbaru", kategori: "Merch", estimasi: "Ready Stock", price: 15000, image: "https://picsum.photos/seed/ganci/400", tanggalUpload: "2025-07-28" }
        ]
    },

    // 2. Dapoer Maning
    {
        storeId: "dapoer_maning",
        password: "dapoer_maning123",
        storeName: "Dapoer Maning",
        storeLogo: "https://i.ibb.co/NCjD0hP/dapoer-maning.jpg", 
        waNumber: "6281281865275",
        instagram: "huoby_",
        products: [
            { id: "dm_onde", name: "Onde Onde", description: "Isi Kacang Hijau (harga per pcs)", kategori: "Makanan", estimasi: "1 Hari", price: 2000, image: "https://i.ibb.co/3Wd0j0j/onde.jpg", tanggalUpload: "2025-08-10" },
            { id: "dm_bakpao", name: "Bakpao Coklat", description: "Empuk dan lumer di mulut (harga per pcs)", kategori: "Makanan", estimasi: "1 Hari", price: 1250, image: "https://i.ibb.co/M5z7R60/bakpao.jpg", tanggalUpload: "2025-08-10" },
            { id: "dm_sumsum", name: "Bubur Sumsum", description: "Dengan gula merah asli", kategori: "Makanan", estimasi: "Ready Pagi", price: 7000, image: "https://i.ibb.co/gDFx7z1/bubur-sumsum.jpg", tanggalUpload: "2025-08-09" },
            { id: "dm_singkong", name: "Singkong Thailand", description: "Manis dan creamy", kategori: "Makanan", estimasi: "Ready Pagi", price: 7000, image: "https://i.ibb.co/sKxts0Q/singkong-thailand.jpg", tanggalUpload: "2025-08-09" },
            { id: "dm_risol", name: "Risol Mayo", description: "Isi sosis, telur, dan mayonaise", kategori: "Makanan", estimasi: "1 Hari", price: 2500, image: "https://picsum.photos/seed/risol/400", tanggalUpload: "2025-08-08" },
            { id: "dm_lemper", name: "Lemper Ayam", description: "Ketan pulen isi ayam", kategori: "Makanan", estimasi: "1 Hari", price: 2500, image: "https://picsum.photos/seed/lemper/400", tanggalUpload: "2025-08-08" }
        ]
    },

    // 3. ATK Sumber Ilmu
    {
        storeId: "sumber_ilmu",
        password: "sumber_ilmu123",
        storeName: "ATK Sumber Ilmu",
        storeLogo: "https://picsum.photos/seed/atk/100",
        waNumber: "6281281865275",
        instagram: "huoby_",
        products: [
            { id: "si_buku", name: "Buku Tulis Sinar Dunia", description: "Isi 38 Lembar", kategori: "Alat Perkuliahan", estimasi: "Ready Stock", price: 4000, image: "https://picsum.photos/seed/buku/400", tanggalUpload: "2025-08-05" },
            { id: "si_pulpen", name: "Pulpen Faster C600", description: "Tinta hitam, 0.5mm", kategori: "Alat Perkuliahan", estimasi: "Ready Stock", price: 2500, image: "https://picsum.photos/seed/pulpen/400", tanggalUpload: "2025-08-05" },
            { id: "si_pensil", name: "Pensil Faber-Castell 2B", description: "Untuk ujian dan menggambar", kategori: "Alat Perkuliahan", estimasi: "Ready Stock", price: 3000, image: "https://picsum.photos/seed/pensil/400", tanggalUpload: "2025-08-05" },
            { id: "si_tipex", name: "Tipe-X Kertas Kenko", description: "Panjang 8 meter", kategori: "Alat Perkuliahan", estimasi: "Ready Stock", price: 8000, image: "https://picsum.photos/seed/tipex/400", tanggalUpload: "2025-08-06" },
            { id: "si_map", name: "Map Kertas", description: "Warna merah, biru, kuning, hijau", kategori: "Alat Perkuliahan", estimasi: "Ready Stock", price: 1500, image: "https://picsum.photos/seed/map/400", tanggalUpload: "2025-08-06" },
            { id: "si_hvs", name: "Print HVS A4 Hitam Putih", description: "Harga per lembar", kategori: "Alat Perkuliahan", estimasi: "1 Jam", price: 500, image: "https://picsum.photos/seed/print/400", tanggalUpload: "2025-08-07" },
            { id: "si_jilid", name: "Jilid Spiral Kawat", description: "Untuk makalah dan laporan", kategori: "Alat Perkuliahan", estimasi: "1 Jam", price: 10000, image: "https://picsum.photos/seed/jilid/400", tanggalUpload: "2025-08-07" }
        ]
    },

    // 4. Jasa Ketik & Print Cepat
    {
        storeId: "jasa_ketik_cepat",
        password: "jasa_ketik_cepat123",
        storeName: "Jasa Ketik & Print Cepat",
        storeLogo: "https://picsum.photos/seed/jasaketik/100",
        waNumber: "6281281865275",
        instagram: "huoby_",
        products: [
            { id: "jc_ketik", name: "Jasa Pengetikan Makalah", description: "Harga per halaman, A4, spasi 1.5", kategori: "Alat Perkuliahan", estimasi: "1 Hari", price: 2000, image: "https://picsum.photos/seed/ketik/400", tanggalUpload: "2025-08-01" },
            { id: "jc_print_bw", name: "Print Hitam Putih", description: "Harga per lembar A4", kategori: "Alat Perkuliahan", estimasi: "Ready", price: 500, image: "https://picsum.photos/seed/printbw/400", tanggalUpload: "2025-08-01" },
            { id: "jc_scan", name: "Scan Dokumen", description: "Harga per lembar", kategori: "Alat Perkuliahan", estimasi: "Ready", price: 1000, image: "https://picsum.photos/seed/scan/400", tanggalUpload: "2025-08-02" },
            { id: "jc_jilid_lakban", name: "Jilid Lakban Hitam", description: "Untuk proposal dan laporan", kategori: "Alat Perkuliahan", estimasi: "1 Jam", price: 5000, image: "https://picsum.photos/seed/jilidlakban/400", tanggalUpload: "2025-08-02" },
            { id: "jc_pulpen_standar", name: "Pulpen Standar AE7", description: "Hitam, Biru, Merah", kategori: "Alat Perkuliahan", estimasi: "Ready Stock", price: 2000, image: "https://picsum.photos/seed/pulpenstandar/400", tanggalUpload: "2025-08-03" }
        ]
    },

    // 5. Aksesoris HP Jaya
    {
        storeId: "jaya_aksesoris",
        password: "jaya_aksesoris123",
        storeName: "Aksesoris HP Jaya",
        storeLogo: "https://picsum.photos/seed/jayaabadi/100",
        waNumber: "6281281865275",
        instagram: "huoby_",
        products: [
            { id: "ja_kabel_cas", name: "Kabel Charger Type-C", description: "Panjang 1 meter, fast charging", kategori: "Alat Perkuliahan", estimasi: "Ready Stock", price: 25000, image: "https://picsum.photos/seed/kabelcas/400", tanggalUpload: "2025-08-07" },
            { id: "ja_mouse", name: "Mouse Wireless", description: "Merk Robot, hemat baterai", kategori: "Alat Perkuliahan", estimasi: "Ready Stock", price: 60000, image: "https://picsum.photos/seed/mouse/400", tanggalUpload: "2025-08-08" },
            { id: "ja_headset", name: "Headset Kabel Murah", description: "Dengan mic, jack 3.5mm", kategori: "Alat Perkuliahan", estimasi: "Ready Stock", price: 15000, image: "https://picsum.photos/seed/headset/400", tanggalUpload: "2025-08-07" },
            { id: "ja_stop_kontak", name: "Stop Kontak 4 Lubang", description: "Panjang kabel 3 meter", kategori: "Alat Perkuliahan", estimasi: "Ready Stock", price: 35000, image: "https://picsum.photos/seed/stopkontak/400", tanggalUpload: "2025-08-09" }
        ]
    },

    // 6. Kantin 1 (Jastip)
    {
        storeId: "kantin_1",
        password: "kantin_1123",
        storeName: "Kantin 1",
        storeLogo: "https://picsum.photos/seed/kantin1/100",
        waNumber: "6281281865275",
        instagram: "huoby_",
        products: [
            { id: "k1_nasgor", name: "Nasi Goreng Spesial", description: "Nasi goreng dengan telur, sosis, dan bakso.", kategori: "Jastip", estimasi: "15-20 mnt", price: 15000, image: "https://picsum.photos/seed/nasgorkantin/400", tanggalUpload: "2025-08-15" },
            { id: "k1_aygeprek", name: "Ayam Geprek", description: "Ayam crispy geprek dengan pilihan level pedas.", kategori: "Jastip", estimasi: "15-20 mnt", price: 13000, image: "https://picsum.photos/seed/geprekkantin/400", tanggalUpload: "2025-08-15" },
            { id: "k1_esteh", name: "Es Teh Manis", description: "Minuman teh manis dingin yang menyegarkan.", kategori: "Jastip", estimasi: "5 mnt", price: 3000, image: "https://picsum.photos/seed/estehkantin/400", tanggalUpload: "2025-08-14" },
            { id: "k1_gorengan", name: "Aneka Gorengan", description: "Bakwan, tahu isi, dan tempe (harga satuan).", kategori: "Jastip", estimasi: "10 mnt", price: 1500, image: "https://picsum.photos/seed/gorengankantin/400", tanggalUpload: "2025-08-14" },
            { id: "k1_soto", name: "Soto Ayam", description: "Soto ayam bening dengan suwiran ayam dan soun.", kategori: "Jastip", estimasi: "20 mnt", price: 12000, image: "https://picsum.photos/seed/sotokantin/400", tanggalUpload: "2025-08-13" }
        ]
    },

    // 7. Kantin 2 (Jastip)
    {
        storeId: "kantin_2",
        password: "kantin_2123",
        storeName: "Kantin 2",
        storeLogo: "https://picsum.photos/seed/kantin2/100",
        waNumber: "6281281865275",
        instagram: "huoby_",
        products: [
            { id: "k2_mieayam", name: "Mie Ayam Bakso", description: "Mie ayam dengan topping ayam cincang dan 2 bakso.", kategori: "Jastip", estimasi: "15-20 mnt", price: 14000, image: "https://picsum.photos/seed/mieayamkantin/400", tanggalUpload: "2025-08-15" },
            { id: "k2_batagor", name: "Batagor", description: "Batagor renyah dengan bumbu kacang kental.", kategori: "Jastip", estimasi: "10 mnt", price: 10000, image: "https://picsum.photos/seed/batagorkantin/400", tanggalUpload: "2025-08-15" },
            { id: "k2_esjeruk", name: "Es Jeruk Peras", description: "Terbuat dari jeruk peras asli, manis dan segar.", kategori: "Jastip", estimasi: "5 mnt", price: 5000, image: "https://picsum.photos/seed/esjerukkantin/400", tanggalUpload: "2025-08-14" },
            { id: "k2_siomay", name: "Siomay Komplit", description: "Siomay ikan, tahu, kentang, dan telur.", kategori: "Jastip", estimasi: "15 mnt", price: 12000, image: "https://picsum.photos/seed/siomaykantin/400", tanggalUpload: "2025-08-13" },
            { id: "k2_nasikuning", name: "Nasi Kuning", description: "Nasi kuning dengan lauk orek tempe dan telur dadar.", kategori: "Jastip", estimasi: "10 mnt", price: 10000, image: "https://picsum.photos/seed/nasikuningkantin/400", tanggalUpload: "2025-08-12" }
        ]
    },

    // 8. Kantin 3 (Jastip)
    {
        storeId: "kantin_3",
        password: "kantin_3123",
        storeName: "Kantin 3",
        storeLogo: "https://picsum.photos/seed/kantin3/100",
        waNumber: "6281281865275",
        instagram: "huoby_",
        products: [
            { id: "k3_pecel", name: "Nasi Pecel Lele", description: "Lele goreng crispy dengan sambal tomat pedas.", kategori: "Jastip", estimasi: "20 mnt", price: 15000, image: "https://picsum.photos/seed/pecellelekantin/400", tanggalUpload: "2025-08-15" },
            { id: "k3_katsu", name: "Chicken Katsu", description: "Nasi dengan chicken katsu dan saus teriyaki.", kategori: "Jastip", estimasi: "20 mnt", price: 18000, image: "https://picsum.photos/seed/katsukantin/400", tanggalUpload: "2025-08-14" },
            { id: "k3_jus", name: "Aneka Jus Buah", description: "Pilihan jus: Jambu, Alpukat, Mangga.", kategori: "Jastip", estimasi: "10 mnt", price: 8000, image: "https://picsum.photos/seed/juskantin/400", tanggalUpload: "2025-08-14" },
            { id: "k3_gado", name: "Gado-gado", description: "Sayuran segar dengan bumbu kacang.", kategori: "Jastip", estimasi: "15 mnt", price: 12000, image: "https://picsum.photos/seed/gadogadokantin/400", tanggalUpload: "2025-08-13" },
            { id: "k3_nasram", name: "Nasi Rames", description: "Nasi dengan pilihan 3 lauk sayur.", kategori: "Jastip", estimasi: "10 mnt", price: 11000, image: "https://picsum.photos/seed/nasrameskantin/400", tanggalUpload: "2025-08-12" }
        ]
    },

    // 9. Kantin 4 (Jastip)
    {
        storeId: "kantin_4",
        password: "kantin_4123",
        storeName: "Kantin 4",
        storeLogo: "https://picsum.photos/seed/kantin4/100",
        waNumber: "6281281865275",
        instagram: "huoby_",
        products: [
            { id: "k4_seblak", name: "Seblak Komplit", description: "Seblak kerupuk dengan ceker, sosis, dan telur.", kategori: "Jastip", estimasi: "15 mnt", price: 12000, image: "https://picsum.photos/seed/seblakkantin/400", tanggalUpload: "2025-08-15" },
            { id: "k4_cuanki", name: "Cuanki Bandung", description: "Baso aci cuanki dengan kuah gurih.", kategori: "Jastip", estimasi: "10 mnt", price: 10000, image: "https://picsum.photos/seed/cuankikantin/400", tanggalUpload: "2025-08-15" },
            { id: "k4_pisangcoklat", name: "Pisang Coklat", description: "Lumpia pisang dengan lelehan coklat (isi 3).", kategori: "Jastip", estimasi: "10 mnt", price: 5000, image: "https://picsum.photos/seed/piscokkantin/400", tanggalUpload: "2025-08-14" },
            { id: "k4_kopi", name: "Es Kopi Susu", description: "Kopi susu kekinian dengan gula aren.", kategori: "Jastip", estimasi: "5 mnt", price: 10000, image: "https://picsum.photos/seed/kopisusukantin/400", tanggalUpload: "2025-08-13" },
            { id: "k4_dimsum", name: "Dimsum Kukus", description: "Isi 4 pcs dimsum ayam udang.", kategori: "Jastip", estimasi: "15 mnt", price: 13000, image: "https://picsum.photos/seed/dimsumkantin/400", tanggalUpload: "2025-08-12" }
        ]
    },

    // 10. Kantin 5 (Jastip)
    {
        storeId: "kantin_5",
        password: "kantin_5123",
        storeName: "Kantin 5",
        storeLogo: "https://picsum.photos/seed/kantin5/100",
        waNumber: "6281281865275",
        instagram: "huoby_",
        products: [
            { id: "k5_ketoprak", name: "Ketoprak", description: "Ketoprak dengan bumbu kacang dan lontong.", kategori: "Jastip", estimasi: "15 mnt", price: 12000, image: "https://picsum.photos/seed/ketoprakkantin/400", tanggalUpload: "2025-08-15" },
            { id: "k5_nasbak", name: "Nasi Bakar Ayam", description: "Nasi bakar isi suwiran ayam pedas.", kategori: "Jastip", estimasi: "20 mnt", price: 16000, image: "https://picsum.photos/seed/nasibakarkantin/400", tanggalUpload: "2025-08-14" },
            { id: "k5_salad", name: "Salad Buah", description: "Potongan buah segar dengan saus mayo keju.", kategori: "Jastip", estimasi: "10 mnt", price: 10000, image: "https://picsum.photos/seed/saladkantin/400", tanggalUpload: "2025-08-13" },
            { id: "k5_basoaci", name: "Baso Aci", description: "Baso aci dengan pilus cikur dan cuanki lidah.", kategori: "Jastip", estimasi: "15 mnt", price: 13000, image: "https://picsum.photos/seed/basoacikantin/400", tanggalUpload: "2025-08-13" },
            { id: "k5_maklor", name: "Maklor Pedas", description: "Makaroni telor dengan bumbu pedas manis.", kategori: "Jastip", estimasi: "10 mnt", price: 8000, image: "https://picsum.photos/seed/maklorkantin/400", tanggalUpload: "2025-08-12" }
        ]
    }
];