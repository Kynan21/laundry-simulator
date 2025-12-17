const { Sequelize, DataTypes } = require('sequelize');

// koneksi database (SQLite, simpel)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'laundry.sqlite'
});

// model Customer
const Customer = sequelize.define('Customer', {
  name: DataTypes.STRING
});

// model Order (Pesanan)
const OrderDB = sequelize.define('Order', {
  jenis: DataTypes.STRING,
  jumlah: DataTypes.INTEGER
});

// relasi 1 customer punya banyak order
Customer.hasMany(OrderDB);
OrderDB.belongsTo(Customer);

module.exports = {
  sequelize,
  Customer,
  OrderDB
};
