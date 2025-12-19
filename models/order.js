class Order {
  constructor(nama, jenis, jumlah) {
    this.nama = nama;
    this.jenis = jenis;
    this.jumlah = jumlah;
  }

  hitungWaktu() {
    if (this.jenis === 'express') {
      return this.jumlah * 5;
    } else {
      return this.jumlah * 10;
    }
  }

  getRekomendasi() {
    if (this.jumlah > 10) {
      return 'Disarankan menggunakan laundry express agar lebih cepat';
    } else {
      return 'Laundry reguler sudah cukup untuk pesanan ini';
    }
  }
}

module.exports = Order;
