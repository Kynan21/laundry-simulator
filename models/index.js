const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'laundry.sqlite'
});

const Customer = sequelize.define('Customer', {
  name: DataTypes.STRING
});

const OrderDB = sequelize.define('Order', {
  jenis: DataTypes.STRING,
  jumlah: DataTypes.INTEGER
});

Customer.hasMany(OrderDB);
OrderDB.belongsTo(Customer);

module.exports = {
  sequelize,
  Customer,
  OrderDB
};

