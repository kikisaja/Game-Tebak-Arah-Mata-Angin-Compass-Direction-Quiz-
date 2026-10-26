# 🧭 Compass Direction Quiz (Game Tebak Arah Mata Angin)

Aplikasi kuis edukatif interaktif (*Compass Direction Quiz*) berbasis JavaScript untuk menguji dan melatih pengetahuan seputar derajat sudut arah mata angin kompas (Utara, Timur, Selatan, Barat, hingga sudut intermedian).

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Array Randomization & Slicing (`shuffleArray`):**
   Mengacak daftar objek mata angin serta memotongnya menjadi kuota 5 soal per sesi permainan menggunakan spread operator `[...]` dan metode `sort()`.
2. **Dynamic Multiple Choice Generation:**
   Mengisolasi kunci jawaban benar, menyaring opsi pengecoh (*wrong answers*), dan menggabungkannya kembali secara acak ke dalam tombol pilihan ganda.
3. **DOM State Management & Disabling:**
   Mengunci interaksi tombol opsi sesaat setelah pengguna memilih jawaban guna mencegah klik ganda serta memberikan indikator visual warna benar/salah.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Panel skor, kotak soal target, grid pilihan opsi, & tombol lanjut
├── style.css        # Desain Neobrutalism biru-pop, indikator status benar/salah, & kartu
└── script.js        # Logika array acak, generator soal kuis, & manajemen DOM
