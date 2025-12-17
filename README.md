Dokumentasi Instalasi & Cara Menjalankan

### Deskripsi Singkat

Aplikasi Laundry Simulator adalah aplikasi web berbasis Node.js yang digunakan untuk mensimulasikan proses layanan laundry. Aplikasi ini memungkinkan pelanggan memasukkan data laundry, memilih jenis layanan (Express atau Reguler), melihat estimasi waktu pengerjaan, serta mendapatkan rekomendasi sistem. Data pelanggan dan pesanan disimpan ke dalam database menggunakan Sequelize ORM.

Aplikasi ini dibuat untuk memenuhi tugas besar mata kuliah Logika Pemrograman dengan penerapan OOP, algoritma matematis, Promise/Async-Await, EJS, dan Sequelize.

### Teknologi yang Digunakan

* Node.js
* Express.js
* EJS (Embedded JavaScript)
* Sequelize ORM
* SQLite
* JavaScript (OOP)

### Cara Instalasi

1. Pastikan Node.js sudah terinstal di komputer.
2. Clone repository ini atau download source code.
3. Buka folder project menggunakan Visual Studio Code.
4. Jalankan perintah berikut di terminal:
npm install
Perintah ini akan menginstal semua dependency yang dibutuhkan.

### Cara Menjalankan Aplikasi

1. Setelah instalasi selesai, jalankan perintah:
npm start
2. Server akan berjalan di:
http://localhost:3000
3. Buka browser dan akses alamat tersebut.

### Fitur Utama

* Input data pelanggan dan laundry
* Pilihan layanan Express dan Reguler
* Perhitungan estimasi waktu laundry
* Sistem rekomendasi otomatis
* CRUD data order
* Tampilan web menggunakan EJS

### Struktur Folder
laundry-simulator/
├── app.js
├── package.json
├── package-lock.json
├── laundry.sqlite
├── models/
│   ├── index.js
│   ├── order.js
│   ├── machine.js
│   └── laundrymachine.js
├── views/
│   ├── layout.ejs
│   ├── home.ejs
│   ├── form.ejs
│   ├── result.ejs
│   ├── orders.ejs
│   └── edit.ejs

