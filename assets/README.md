# E-Portofolio Praktik Pengalaman Lapangan Mandiri

**Nama:** Florentiano Hirvi Rasanto, S.Tr.Par  
**Program:** Pendidikan Profesi Guru (PPG)  
**Mata Kuliah:** Praktik Pengalaman Lapangan Mandiri

## Tentang

E-Portofolio ini dibuat untuk mendokumentasikan seluruh kegiatan pelaksanaan Praktik Pengalaman Lapangan (PPL) Mandiri. Website ini dirancang dengan tema hijau-putih-abu-abu yang modern, transisi yang sangat halus, serta dilengkapi dengan fitur untuk melihat dokumen dan video langsung di website.

## Struktur Menu

1. **Beranda** - Foto model segi empat melayang, motto/visi
2. **Profil** - Data diri, pembimbing lapangan, guru pamong
3. **Praktik Terbimbing** - Refleksi dan analisis seluruh kegiatan praktik mengajar
4. **Ujian Tengah Semester** - Produk terbaik siklus 1 (RPP + Video)
5. **Ujian Akhir Semester** - Produk terbaik siklus 2-4 (RPP + Video)
6. **Rencana Tindak Lanjut** - RTL berdasarkan refleksi
7. **Dokumentasi** - Galeri foto kegiatan PPL

## Fitur

- ✨ Desain modern dengan tema hijau-putih-abu-abu
- 🎨 Transisi halaman yang sangat halus
- 📱 Responsif untuk desktop, tablet, dan mobile
- 👁️ Fitur "Lihat File" untuk dokumen PDF
- ▶️ Fitur "Putar Video" untuk video MP4
- 🖼️ Galeri foto dengan lightbox
- 📥 Tombol unduh file
- 🎯 Navigasi smooth scroll
- 💫 Animasi halus pada setiap elemen

## Cara Penggunaan

### 1. Menambahkan Foto

Tambahkan foto-foto berikut ke folder `assets/img/`:

- `beranda-foto.jpg` - Foto untuk halaman beranda (model segi empat melayang)
- `profil-foto.jpg` - Foto profil (model bulat)
- `dokumentasi-1.jpg` sampai `dokumentasi-6.jpg` - Foto dokumentasi kegiatan

### 2. Menambahkan File Dokumen

Tambahkan file-file PDF berikut sesuai struktur:

**Praktik Terbimbing:**
- `praktik-terbimbing/analisis-rpp.pdf`
- `praktik-terbimbing/analisis-materi.pdf`
- `praktik-terbimbing/analisis-media.pdf`
- `praktik-terbimbing/analisis-video.pdf`
- `praktik-terbimbing/analisis-nonmengajar.pdf`
- `praktik-terbimbing/instrumen-penilaian.pdf`

**UTS:**
- `uts/rpp-terbaik-siklus1.pdf`
- `uts/video-praktik-siklus1.mp4`

**UAS:**
- `uas/rpp-terbaik-siklus2-4.pdf`
- `uas/video-praktik-siklus2-4.mp4`

**RTL:**
- `rtl/rencana-tindak-lanjut.pdf`

### 3. Mengupdate Data Profil

Buka file `app.js` dan ubah link WhatsApp dan Alamat:

```javascript
if (waLink) {
    waLink.href = 'https://wa.me/628XXXXXXXXXX'; // Ganti dengan nomor WA
    waLink.target = '_blank';
}

if (alamatLink) {
    alamatLink.href = 'https://maps.google.com/...'; // Ganti dengan link maps
    alamatLink.target = '_blank';
}
```

Buka file `index.html` untuk mengubah data profil seperti:
- Nama LPTK
- Lokasi PPL (Nama Sekolah)
- Lainnya jika diperlukan

### 4. Menjalankan Website

Cukup buka file `index.html` langsung di browser (Chrome, Firefox, Edge, dll).

Atau gunakan live server untuk pengalaman yang lebih baik.

## Struktur Folder

```
ePortfolio PPL Mandiri/
├── assets/
│   └── img/           # Foto beranda, profil, dokumentasi
├── praktik-terbimbing/ # File analisis praktik terbimbing
├── uts/               # File UTS (RPP & Video Siklus 1)
├── uas/               # File UAS (RPP & Video Siklus 2-4)
├── rtl/               # File Rencana Tindak Lanjut
├── index.html         # Halaman utama
├── style.css          # Styling
├── app.js             # JavaScript
└── README.md          # Dokumentasi
```

## Catatan

- Jika file belum ada, tombol "Lihat File" atau "Putar Video" akan menampilkan halaman kosong atau error. Pastikan file sudah diupload sesuai nama file.
- Untuk file PDF, browser akan menampilkannya langsung di modal viewer.
- Untuk video MP4, akan diputar langsung di modal dengan kontrol pemutaran.
- Desain menggunakan warna dominan hijau (#2d5f3b) dengan sentuhan putih dan abu-abu untuk kesan bersih dan profesional.

---

© 2026 E-Portofolio Praktik Pengalaman Lapangan Mandiri - Florentiano Hirvi Rasanto, S.Tr.Par
