class Machine {
  constructor(nama, speed) {
    this.nama = nama;
    this.speed = speed;
  }

  hitungWaktu(jumlah) {
    return jumlah * this.speed;
  }
}

module.exports = Machine;
