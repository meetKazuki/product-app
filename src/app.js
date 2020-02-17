const { config } = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product');

config();

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * @description setup mongoose connection
 */
let mongoDB = process.env.DEVELOPMENT_DATABASE_URL;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let DB = mongoose.connection;
DB.on('error', console.error.bind(console, 'connection error: '));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRoutes);

app.listen(PORT, () => console.log(`server running on ${PORT}`));
