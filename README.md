# DOKUMENTASI TEKNIK WEBSITE - VOKASI LOAN
**Mata Kuliah:** Pemrograman Web Lanjut  
**Program Studi:** D4 Manajemen Informatika - Fakultas Vokasi UNESA  
**Nama Kelompok:** Kelompok 5  
**Folder Repository:** `PWUTS_KELOMPOK5_25091397010`

---

## 1. Deskripsi Topik & Kesesuaian Proposal
Website **Vokasi Loan** dikembangkan berdasarkan proposal *"Sistem Peminjaman Barang di Fakultas Vokasi UNESA"*. Sistem ini dirancang untuk memfasilitasi mahasiswa/dosen dalam melihat katalog barang laboratorium, mengajukan peminjaman secara transparan, serta mencatat riwayat status pengembalian.

## 2. Struktur Repository & File
Sesuai dengan ketentuan UTS dan format file repository GitHub:
```
PWUTS_KELOMPOK5_25091397010/
├── css/
│   └── style.css          # Styling custom & visual indikator validasi
├── js/
│   └── script.js         # Logika interaktif, Ajax SPA loader, dan validasi form jQuery
├── index.html            # Homepage / Layout utama responsive web design
├── barang.html           # Halaman katalog barang interaktif (Pencarian & Filter)
├── setor.html            # Form pengajuan peminjaman barang (Validasi JS/jQuery)
├── riwayat.html          # Halaman rekam jejak & status pengembalian
└── README.md             # Penjelasan & dokumentasi teknis pengerjaan
```

## 3. Fitur Utama & Implementasi Ketentuan UTS
1. **Responsive Web Design & Modern Layout (`index.html`):**
   - Menggunakan Tailwind CSS & FontAwesome ikon.
   - Antarmuka menyesuaikan tampilan layar desktop, tablet, dan mobile.
2. **Navigasi Dynamis AJAX:**
   - Navigasi menu sidebar memuat konten (`barang.html`, `setor.html`, `riwayat.html`) secara asynchronous menggunakan jQuery Ajax (`$.get`).
3. **Katalog Interaktif (`barang.html`):**
   - Dilengkapi pencarian *live search* dan filter kategori (*Elektronik, Multimedia, Kabel/Adapter*).
4. **Form Transaksi & Validasi Frontend (`setor.html`):**
   - Mengimplementasikan validasi data input (NIM, Nama, Barang, Tanggal, Keperluan) menggunakan jQuery sebelum proses submit.

---
*Dibuat untuk memenuhi Penilaian Ujian Tengah Semester Gasal 2026/2027 D4 Manajemen Informatika UNESA.*
