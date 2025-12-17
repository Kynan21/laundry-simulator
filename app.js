const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

const Order = require('./models/order');
const LaundryMachine = require('./models/laundrymachine');
const { sequelize, Customer, OrderDB } = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('layout', 'layout');
app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/result', async (req, res) => {
  const { nama, jenis, jumlah } = req.body;

  const orderLogic = new Order(nama, jenis, Number(jumlah));

  const estimasi = orderLogic.hitungWaktu();
  const rekomendasi = orderLogic.getRekomendasi();

  const customer = await Customer.create({
    name: nama
  });

  await OrderDB.create({
    jenis,
    jumlah,
    CustomerId: customer.id
  });

  res.render('result', {
    nama,
    jenis,
    jumlah,
    estimasi,
    rekomendasi
  });
});

app.get('/orders', async (req, res) => {
  const orders = await OrderDB.findAll({
    include: Customer
  });

  res.render('orders', { orders });
});

app.get('/orders/delete/:id', async (req, res) => {
  const id = req.params.id;

  await OrderDB.destroy({
    where: { id }
  });

  res.redirect('/orders');
});

app.get('/orders/edit/:id', async (req, res) => {
  const id = req.params.id;

  const order = await OrderDB.findByPk(id, {
    include: Customer
  });

  res.render('edit', { order });
});

app.post('/orders/edit/:id', async (req, res) => {
  const id = req.params.id;
  const { jenis, jumlah } = req.body;

  await OrderDB.update(
    { jenis, jumlah: parseInt(jumlah) },
    { where: { id } }
  );

  res.redirect('/orders');
});

async function startServer() {
  await sequelize.sync();
  
  app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
  });
}

startServer();