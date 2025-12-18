const Machine = require('./machine');

class LaundryMachine extends Machine {
  process(order) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Laundry selesai");
      }, order.jumlah * 1000);
    });
  }
}

module.exports = LaundryMachine;
