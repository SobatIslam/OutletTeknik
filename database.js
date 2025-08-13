// File: database.js
// Pusat data untuk semua produk yang dijual di Outlet Teknik.
// Kategori yang tersedia: "Makanan", "Barang Umum", dan "Merch" (khusus Himpunan)

const storeData = [
    // 1. Toko Khusus Himpunan (Hanya Menjual Merch)
    {
        storeId: "himpunan_teknik",
        storeName: "Himpunan Teknik",
        storeLogo: "https://i.ibb.co/L8WdKLc/logo-himpunan.png",
        waNumber: "6281200000001",
        products: [
            { id: "merch_jaket_baru", name: "Jaket Bomber Teknik v2", description: "Desain baru 2025, bahan waterproof", kategori: "Merch", estimasi: "Pre-Order", price: 215000, image: "https://picsum.photos/seed/jaketbaru/400", tanggalUpload: "2025-08-12" },
            { id: "merch_topi_baru", name: "Topi Baseball Teknik", description: "Bahan katun, bordir premium", kategori: "Merch", estimasi: "Ready Stock", price: 55000, image: "https://picsum.photos/seed/topibaru/400", tanggalUpload: "2025-08-11" },
            { id: "merch_kaos", name: "Kaos Himpunan Eksklusif", description: "Bahan Cotton Combed 30s, warna hitam", kategori: "Merch", estimasi: "Pre-Order 7 Hari", price: 95000, image: "https://picsum.photos/seed/kaos/400", tanggalUpload: "2025-08-01" },
            { id: "merch_lanyard", name: "Lanyard Teknik Keren", description: "Bahan premium dengan cetak full color", kategori: "Merch", estimasi: "Ready Stock", price: 25000, image: "https://picsum.photos/seed/lanyard/400", tanggalUpload: "2025-08-01" },
            { id: "merch_stiker", name: "Sticker Pack Edisi Teknik", description: "Isi 5 stiker waterproof dan tahan lama", kategori: "Merch", estimasi: "Ready Stock", price: 10000, image: "https://picsum.photos/seed/stiker/400", tanggalUpload: "2025-07-28" },
            { id: "merch_ganci", name: "Gantungan Kunci Akrilik", description: "Desain logo Himpunan terbaru", kategori: "Merch", estimasi: "Ready Stock", price: 15000, image: "https://picsum.photos/seed/ganci/400", tanggalUpload: "2025-07-28" },
            { id: "merch_totebag", name: "Totebag Kanvas Teknik", description: "Kuat dan cocok untuk membawa laptop", kategori: "Merch", estimasi: "Pre-Order 5 Hari", price: 55000, image: "https://picsum.photos/seed/totebag/400", tanggalUpload: "2025-07-25" },
            { id: "merch_botol", name: "Botol Minum Alumunium", description: "Kapasitas 500ml, anti bocor", kategori: "Merch", estimasi: "Ready Stock", price: 65000, image: "https://picsum.photos/seed/botol/400", tanggalUpload: "2025-07-25" }
        ]
    },

    // 2. Toko Dapoer Maning (Fokus Makanan Tradisional)
    {
        storeId: "dapoer_maning",
        storeName: "Dapoer Maning",
        storeLogo: "https://i.ibb.co/NCjD0hP/dapoer-maning.jpg", 
        waNumber: "6281281865275",
        products: [
            { id: "dm_onde", name: "Onde Onde", description: "Isi Kacang Hijau (harga per pcs)", kategori: "Makanan", estimasi: "1 Hari", price: 2000, image: "https://i.ibb.co/3Wd0j0j/onde.jpg", tanggalUpload: "2025-08-10" },
            { id: "dm_bakpao", name: "Bakpao Coklat", description: "Empuk dan lumer di mulut (harga per pcs)", kategori: "Makanan", estimasi: "1 Hari", price: 1250, image: "https://i.ibb.co/M5z7R60/bakpao.jpg", tanggalUpload: "2025-08-10" },
            { id: "dm_sumsum", name: "Bubur Sumsum", description: "Dengan gula merah asli", kategori: "Makanan", estimasi: "Ready Pagi", price: 7000, image: "https://i.ibb.co/gDFx7z1/bubur-sumsum.jpg", tanggalUpload: "2025-08-09" },
            { id: "dm_singkong", name: "Singkong Thailand", description: "Manis dan creamy", kategori: "Makanan", estimasi: "Ready Pagi", price: 7000, image: "https://i.ibb.co/sKxts0Q/singkong-thailand.jpg", tanggalUpload: "2025-08-09" },
            { id: "dm_kopi", name: "Kopi Hitam Sachet", description: "Kapal Api Special Mix", kategori: "Barang Umum", estimasi: "Ready Stock", price: 1500, image: "https://picsum.photos/seed/kopi/400", tanggalUpload: "2025-08-01" },
            { id: "dm_teh", name: "Teh Celup Sachet", description: "Sariwangi isi 25", kategori: "Barang Umum", estimasi: "Ready Stock", price: 6000, image: "https://picsum.photos/seed/teh/400", tanggalUpload: "2025-08-01" },
            { id: "dm_risol", name: "Risol Mayo", description: "Isi sosis, telur, dan mayonaise", kategori: "Makanan", estimasi: "1 Hari", price: 2500, image: "https://picsum.photos/seed/risol/400", tanggalUpload: "2025-08-08" },
            { id: "dm_lemper", name: "Lemper Ayam", description: "Ketan pulen isi ayam", kategori: "Makanan", estimasi: "1 Hari", price: 2500, image: "https://picsum.photos/seed/lemper/400", tanggalUpload: "2025-08-08" }
        ]
    },

    // 3. Toko ATK Sumber Ilmu (Fokus Alat Tulis)
    {
        storeId: "sumber_ilmu",
        storeName: "ATK Sumber Ilmu",
        storeLogo: "https://picsum.photos/seed/atk/100",
        waNumber: "6281200000002",
        products: [
            { id: "si_buku", name: "Buku Tulis Sinar Dunia", description: "Isi 38 Lembar", kategori: "Barang Umum", estimasi: "Ready Stock", price: 4000, image: "https://picsum.photos/seed/buku/400", tanggalUpload: "2025-08-05" },
            { id: "si_pulpen", name: "Pulpen Faster C600", description: "Tinta hitam, 0.5mm", kategori: "Barang Umum", estimasi: "Ready Stock", price: 2500, image: "https://picsum.photos/seed/pulpen/400", tanggalUpload: "2025-08-05" },
            { id: "si_pensil", name: "Pensil Faber-Castell 2B", description: "Untuk ujian dan menggambar", kategori: "Barang Umum", estimasi: "Ready Stock", price: 3000, image: "https://picsum.photos/seed/pensil/400", tanggalUpload: "2025-08-05" },
            { id: "si_tipex", name: "Tipe-X Kertas Kenko", description: "Panjang 8 meter", kategori: "Barang Umum", estimasi: "Ready Stock", price: 8000, image: "https://picsum.photos/seed/tipex/400", tanggalUpload: "2025-08-06" },
            { id: "si_map", name: "Map Kertas", description: "Warna merah, biru, kuning, hijau", kategori: "Barang Umum", estimasi: "Ready Stock", price: 1500, image: "https://picsum.photos/seed/map/400", tanggalUpload: "2025-08-06" },
            { id: "si_hvs", name: "Print HVS A4 Hitam Putih", description: "Harga per lembar", kategori: "Barang Umum", estimasi: "1 Jam", price: 500, image: "https://picsum.photos/seed/print/400", tanggalUpload: "2025-08-07" },
            { id: "si_jilid", name: "Jilid Spiral Kawat", description: "Untuk makalah dan laporan", kategori: "Barang Umum", estimasi: "1 Jam", price: 10000, image: "https://picsum.photos/seed/jilid/400", tanggalUpload: "2025-08-07" },
            { id: "si_gorengan", name: "Aneka Gorengan", description: "Bakwan, tempe, tahu isi", kategori: "Makanan", estimasi: "Ready Sore", price: 1000, image: "https://picsum.photos/seed/gorengan/400", tanggalUpload: "2025-08-08" }
        ]
    },

    // 4. Kantin Pojok (Fokus Makanan Berat)
    {
        storeId: "kantin_pojok",
        storeName: "Kantin Pojok",
        storeLogo: "https://picsum.photos/seed/kantin/100",
        waNumber: "6281200000003",
        products: [
            { id: "kp_nasi_warteg", name: "Nasi Rames Warteg", description: "Nasi + 3 macam lauk", kategori: "Makanan", estimasi: "Ready Siang", price: 12000, image: "https://picsum.photos/seed/warteg/400", tanggalUpload: "2025-08-10" },
            { id: "kp_geprek", name: "Ayam Geprek Sambal Bawang", description: "Level 1-5", kategori: "Makanan", estimasi: "Ready Siang", price: 15000, image: "https://picsum.photos/seed/geprek/400", tanggalUpload: "2025-08-10" },
            { id: "kp_soto", name: "Soto Ayam Lamongan", description: "Lengkap dengan koya", kategori: "Makanan", estimasi: "Ready Siang", price: 13000, image: "https://picsum.photos/seed/soto/400", tanggalUpload: "2025-08-10" },
            { id: "kp_esteh", name: "Es Teh Manis/Tawar", description: "Segar dan nikmat", kategori: "Makanan", estimasi: "Ready Stock", price: 3000, image: "https://picsum.photos/seed/esteh/400", tanggalUpload: "2025-08-01" },
            { id: "kp_jeruk", name: "Es Jeruk Peras", description: "Dari jeruk asli", kategori: "Makanan", estimasi: "Ready Stock", price: 5000, image: "https://picsum.photos/seed/jeruk/400", tanggalUpload: "2025-08-01" },
            { id: "kp_krupuk", name: "Kerupuk Putih Kaleng", description: "Ambil sepuasnya", kategori: "Makanan", estimasi: "Ready Stock", price: 1000, image: "https://picsum.photos/seed/kerupuk/400", tanggalUpload: "2025-08-01" },
            { id: "kp_airmineral", name: "Air Mineral Botol", description: "Ukuran 600ml", kategori: "Barang Umum", estimasi: "Ready Stock", price: 3000, image: "https://picsum.photos/seed/air/400", tanggalUpload: "2025-08-01" },
            { id: "kp_tisu", name: "Tisu Kering Saku", description: "Merk Paseo", kategori: "Barang Umum", estimasi: "Ready Stock", price: 2000, image: "https://picsum.photos/seed/tisu/400", tanggalUpload: "2025-08-01" }
        ]
    },

    // 5. Toko Kelontong Berkah (Fokus Kebutuhan Harian)
    {
        storeId: "berkah_kelontong",
        storeName: "Berkah Kelontong",
        storeLogo: "https://picsum.photos/seed/berkah/100",
        waNumber: "6281200000004",
        products: [
            { id: "bk_indomie", name: "Indomie Goreng", description: "Seleraku...", kategori: "Makanan", estimasi: "Ready Stock", price: 3000, image: "https://picsum.photos/seed/indomie/400", tanggalUpload: "2025-08-02" },
            { id: "bk_telur", name: "Telur Ayam Negeri", description: "Harga per butir", kategori: "Makanan", estimasi: "Ready Stock", price: 2500, image: "https://picsum.photos/seed/telur/400", tanggalUpload: "2025-08-02" },
            { id: "bk_sabun", name: "Sabun Mandi Batang", description: "Lifebuoy, Giv, Nuvo", kategori: "Barang Umum", estimasi: "Ready Stock", price: 3500, image: "https://picsum.photos/seed/sabun/400", tanggalUpload: "2025-08-03" },
            { id: "bk_sikatgigi", name: "Sikat Gigi Formula", description: "Bulu sikat medium", kategori: "Barang Umum", estimasi: "Ready Stock", price: 5000, image: "https://picsum.photos/seed/sikat/400", tanggalUpload: "2025-08-03" },
            { id: "bk_sampo", name: "Sampo Sachet Renteng", description: "Sunsilk, Clear, Pantene", kategori: "Barang Umum", estimasi: "Ready Stock", price: 1000, image: "https://picsum.photos/seed/sampo/400", tanggalUpload: "2025-08-03" },
            { id: "bk_deterjen", name: "Deterjen Bubuk Sachet", description: "Rinso, Daia, Soklin", kategori: "Barang Umum", estimasi: "Ready Stock", price: 1000, image: "https://picsum.photos/seed/deterjen/400", tanggalUpload: "2025-08-03" },
            { id: "bk_gas", name: "Isi Ulang Korek Gas", description: "Bawa korek kosongmu", kategori: "Barang Umum", estimasi: "Ready Stock", price: 2000, image: "https://picsum.photos/seed/gas/400", tanggalUpload: "2025-08-04" },
            { id: "bk_bengbeng", name: "Beng-Beng Coklat", description: "Dingin lebih nikmat", kategori: "Makanan", estimasi: "Ready Stock", price: 2000, image: "https://picsum.photos/seed/beng/400", tanggalUpload: "2025-08-04" }
        ]
    },

    // 6. Jasa Ketik & Print "Cepat" (Fokus Jasa & ATK)
    {
        storeId: "jasa_ketik_cepat",
        storeName: "Jasa Ketik & Print Cepat",
        storeLogo: "https://picsum.photos/seed/jasaketik/100",
        waNumber: "6281200000005",
        products: [
            { id: "jc_ketik", name: "Jasa Pengetikan Makalah", description: "Harga per halaman, A4, spasi 1.5", kategori: "Barang Umum", estimasi: "1 Hari", price: 2000, image: "https://picsum.photos/seed/ketik/400", tanggalUpload: "2025-08-01" },
            { id: "jc_print_bw", name: "Print Hitam Putih", description: "Harga per lembar A4", kategori: "Barang Umum", estimasi: "Ready", price: 500, image: "https://picsum.photos/seed/printbw/400", tanggalUpload: "2025-08-01" },
            { id: "jc_print_color", name: "Print Warna", description: "Harga per lembar A4, gambar full", kategori: "Barang Umum", estimasi: "Ready", price: 1500, image: "https://picsum.photos/seed/printwarna/400", tanggalUpload: "2025-08-01" },
            { id: "jc_scan", name: "Scan Dokumen", description: "Harga per lembar", kategori: "Barang Umum", estimasi: "Ready", price: 1000, image: "https://picsum.photos/seed/scan/400", tanggalUpload: "2025-08-02" },
            { id: "jc_jilid_lakban", name: "Jilid Lakban Hitam", description: "Untuk proposal dan laporan", kategori: "Barang Umum", estimasi: "1 Jam", price: 5000, image: "https://picsum.photos/seed/jilidlakban/400", tanggalUpload: "2025-08-02" },
            { id: "jc_laminating", name: "Laminating KTP/KTM", description: "Ukuran KTP/SIM/KTM", kategori: "Barang Umum", estimasi: "Ready", price: 3000, image: "https://picsum.photos/seed/laminating/400", tanggalUpload: "2025-08-02" },
            { id: "jc_pulpen_standar", name: "Pulpen Standar AE7", description: "Hitam, Biru, Merah", kategori: "Barang Umum", estimasi: "Ready Stock", price: 2000, image: "https://picsum.photos/seed/pulpenstandar/400", tanggalUpload: "2025-08-03" },
            { id: "jc_kacang", name: "Kacang Rebus", description: "Satu bungkus kecil", kategori: "Makanan", estimasi: "Ready Pagi", price: 3000, image: "https://picsum.photos/seed/kacang/400", tanggalUpload: "2025-08-03" }
        ]
    },

    // 7. Warung Kopi "Inspirasi" (Fokus Minuman & Wifi)
    {
        storeId: "kopi_inspirasi",
        storeName: "Warung Kopi Inspirasi",
        storeLogo: "https://picsum.photos/seed/warungkopi/100",
        waNumber: "6281200000006",
        products: [
            { id: "ki_kopi_susu", name: "Kopi Susu Panas/Es", description: "Bisa request tingkat manis", kategori: "Makanan", estimasi: "Ready", price: 5000, image: "https://picsum.photos/seed/kopisusu/400", tanggalUpload: "2025-08-09" },
            { id: "ki_indomie_telor", name: "Indomie Telor Kornet", description: "Bisa goreng atau rebus", kategori: "Makanan", estimasi: "Ready", price: 10000, image: "https://picsum.photos/seed/indomietelor/400", tanggalUpload: "2025-08-09" },
            { id: "ki_nasgor", name: "Nasi Goreng Spesial", description: "Pakai telur ceplok/dadar", kategori: "Makanan", estimasi: "Ready Malam", price: 13000, image: "https://picsum.photos/seed/nasgor/400", tanggalUpload: "2025-08-09" },
            { id: "ki_pisgor", name: "Pisang Goreng Keju", description: "Isi 5 potong", kategori: "Makanan", estimasi: "Ready Sore", price: 8000, image: "https://picsum.photos/seed/pisgor/400", tanggalUpload: "2025-08-09" },
            { id: "ki_susu_jahe", name: "Susu Jahe Merah", description: "Cocok untuk malam hari", kategori: "Makanan", estimasi: "Ready Malam", price: 6000, image: "https://picsum.photos/seed/jahe/400", tanggalUpload: "2025-08-10" },
            { id: "ki_aqua", name: "Air Mineral Dingin", description: "Ukuran 600ml", kategori: "Barang Umum", estimasi: "Ready Stock", price: 4000, image: "https://picsum.photos/seed/aqua/400", tanggalUpload: "2025-08-01" },
            { id: "ki_charger", name: "Jasa Cas HP", description: "Harga per 1 jam", kategori: "Barang Umum", estimasi: "Ready", price: 2000, image: "https://picsum.photos/seed/cas/400", tanggalUpload: "2025-08-01" },
            { id: "ki_wifi", name: "Voucher Wifi", description: "Masa aktif 3 jam", kategori: "Barang Umum", estimasi: "Ready", price: 3000, image: "https://picsum.photos/seed/wifi/400", tanggalUpload: "2025-08-01" }
        ]
    },

    // 8. Cemilan Mbak Yuni (Fokus Jajanan Kekinian)
    {
        storeId: "cemilan_yuni",
        storeName: "Cemilan Mbak Yuni",
        storeLogo: "https://picsum.photos/seed/yuni/100",
        waNumber: "6281200000007",
        products: [
            { id: "cy_seblak", name: "Seblak Ceker Pedas", description: "Isi kerupuk, ceker, sosis, telur", kategori: "Makanan", estimasi: "Ready Sore", price: 12000, image: "https://picsum.photos/seed/seblak/400", tanggalUpload: "2025-08-11" },
            { id: "cy_basreng", name: "Basreng Kering Pedas", description: "Bumbu daun jeruk", kategori: "Makanan", estimasi: "Ready Stock", price: 10000, image: "https://picsum.photos/seed/basreng/400", tanggalUpload: "2025-08-11" },
            { id: "cy_maklor", name: "Makaroni Telor (Maklor)", description: "Bumbu balado/keju/jagung bakar", kategori: "Makanan", estimasi: "Ready Sore", price: 8000, image: "https://picsum.photos/seed/maklor/400", tanggalUpload: "2025-08-11" },
            { id: "cy_cireng", name: "Cireng Isi Ayam Pedas", description: "Isi 3 pcs", kategori: "Makanan", estimasi: "Ready Sore", price: 5000, image: "https://picsum.photos/seed/cireng/400", tanggalUpload: "2025-08-12" },
            { id: "cy_jasuke", name: "Jagung Susu Keju (Jasuke)", description: "Porsi cup sedang", kategori: "Makanan", estimasi: "Ready Sore", price: 7000, image: "https://picsum.photos/seed/jasuke/400", tanggalUpload: "2025-08-12" },
            { id: "cy_esteh_jumbo", name: "Es Teh Manis Jumbo", description: "Ukuran gelas besar", kategori: "Makanan", estimasi: "Ready Stock", price: 5000, image: "https://picsum.photos/seed/estehjumbo/400", tanggalUpload: "2025-08-01" },
            { id: "cy_masker", name: "Masker Medis Sekali Pakai", description: "Harga per pcs", kategori: "Barang Umum", estimasi: "Ready Stock", price: 1000, image: "https://picsum.photos/seed/masker/400", tanggalUpload: "2025-08-01" },
            { id: "cy_handsanitizer", name: "Hand Sanitizer Saku", description: "Merk Antis", kategori: "Barang Umum", estimasi: "Ready Stock", price: 8000, image: "https://picsum.photos/seed/sanitizer/400", tanggalUpload: "2025-08-01" }
        ]
    },

    // 9. Warung Nasi Padang "Sederhana"
    {
        storeId: "padang_sederhana",
        storeName: "Nasi Padang Sederhana",
        storeLogo: "https://picsum.photos/seed/padang/100",
        waNumber: "6281200000008",
        products: [
            { id: "ps_rendang", name: "Nasi Rendang", description: "Lengkap dengan sayur & sambal", kategori: "Makanan", estimasi: "Ready Siang", price: 18000, image: "https://picsum.photos/seed/rendang/400", tanggalUpload: "2025-08-09" },
            { id: "ps_ayam_bakar", name: "Nasi Ayam Bakar", description: "Lengkap dengan sayur & sambal", kategori: "Makanan", estimasi: "Ready Siang", price: 16000, image: "https://picsum.photos/seed/ayambakar/400", tanggalUpload: "2025-08-09" },
            { id: "ps_telur_dadar", name: "Nasi Telur Dadar Padang", description: "Tebal dan gurih", kategori: "Makanan", estimasi: "Ready Siang", price: 10000, image: "https://picsum.photos/seed/telurdadar/400", tanggalUpload: "2025-08-09" },
            { id: "ps_perkedel", name: "Perkedel Kentang", description: "Harga per pcs", kategori: "Makanan", estimasi: "Ready Siang", price: 2000, image: "https://picsum.photos/seed/perkedel/400", tanggalUpload: "2025-08-10" },
            { id: "ps_keripik_balado", name: "Keripik Singkong Balado", description: "Satu bungkus", kategori: "Makanan", estimasi: "Ready Stock", price: 8000, image: "https://picsum.photos/seed/keripikbalado/400", tanggalUpload: "2025-08-10" },
            { id: "ps_teh_botol", name: "Teh Botol Sosro Kotak", description: "Ukuran 250ml", kategori: "Barang Umum", estimasi: "Ready Stock", price: 4000, image: "https://picsum.photos/seed/tehbotol/400", tanggalUpload: "2025-08-01" },
            { id: "ps_kertas_nasi", name: "Kertas Nasi Coklat", description: "Harga per 5 lembar", kategori: "Barang Umum", estimasi: "Ready Stock", price: 2000, image: "https://picsum.photos/seed/kertaskfc/400", tanggalUpload: "2025-08-01" },
            { id: "ps_sendok_plastik", name: "Sendok Plastik", description: "Harga per 5 pcs", kategori: "Barang Umum", estimasi: "Ready Stock", price: 1000, image: "https://picsum.photos/seed/sendok/400", tanggalUpload: "2025-08-01" }
        ]
    },

    // 10. Toko Aksesoris HP "Jaya"
    {
        storeId: "jaya_aksesoris",
        storeName: "Aksesoris HP Jaya",
        storeLogo: "https://picsum.photos/seed/jayaabadi/100",
        waNumber: "6281200000009",
        products: [
            { id: "ja_kabel_cas", name: "Kabel Charger Type-C", description: "Panjang 1 meter, fast charging", kategori: "Barang Umum", estimasi: "Ready Stock", price: 25000, image: "https://picsum.photos/seed/kabelcas/400", tanggalUpload: "2025-08-07" },
            { id: "ja_headset", name: "Headset Kabel Murah", description: "Dengan mic, jack 3.5mm", kategori: "Barang Umum", estimasi: "Ready Stock", price: 15000, image: "https://picsum.photos/seed/headset/400", tanggalUpload: "2025-08-07" },
            { id: "ja_mouse", name: "Mouse Wireless", description: "Merk Robot, hemat baterai", kategori: "Barang Umum", estimasi: "Ready Stock", price: 60000, image: "https://picsum.photos/seed/mouse/400", tanggalUpload: "2025-08-08" },
            { id: "ja_baterai_abc", name: "Baterai ABC AA", description: "Harga per 2 pcs", kategori: "Barang Umum", estimasi: "Ready Stock", price: 5000, image: "https://picsum.photos/seed/baterai/400", tanggalUpload: "2025-08-08" },
            { id: "ja_stop_kontak", name: "Stop Kontak 4 Lubang", description: "Panjang kabel 3 meter", kategori: "Barang Umum", estimasi: "Ready Stock", price: 35000, image: "https://picsum.photos/seed/stopkontak/400", tanggalUpload: "2025-08-09" },
            { id: "ja_lampu", name: "Lampu LED Phillips 10W", description: "Warna putih terang", kategori: "Barang Umum", estimasi: "Ready Stock", price: 28000, image: "https://picsum.photos/seed/lampu/400", tanggalUpload: "2025-08-09" },
            { id: "ja_sosis_bakar", name: "Sosis Bakar Jumbo", description: "Saus BBQ / Blackpepper", kategori: "Makanan", estimasi: "Ready Malam", price: 10000, image: "https://picsum.photos/seed/sosisbakar/400", tanggalUpload: "2025-08-10" },
            { id: "ja_es_kulkul", name: "Es Kulkul Buah", description: "Pisang / Melon dengan coklat", kategori: "Makanan", estimasi: "Ready Siang", price: 2000, image: "https://picsum.photos/seed/kulkul/400", tanggalUpload: "2025-08-10" }
        ]
    }
];