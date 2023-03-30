const express = require('express')

//import { engine } from 'express-handlebars';
const expressHbs = require('express-handlebars');

const app = express()

const mongoose = require('mongoose');
const uri = 'mongodb+srv://tungktph27526:kttung2609@cluster0.mdas35v.mongodb.net/cp17301?retryWrites=true&w=majority';

const nhanvienmodel = require('./nhanvienmodel');
app.get('/', async(req, res) =>{
    await mongoose.connect(uri);
    console.log('ket noi db thanh cong');
    let arrNV = await nhanvienmodel.find();
    console.log(arrNV);
    res.send(arrNV);
  })
  app.get('/add_nv', async(req, res) =>{
    await mongoose.connect(uri);
    console.log('ket noi db thanh cong');
    let nvmoi = {
        ten: 'abcxyz',
        diachi: 'sdfg',
        luong: 12
        };
        let kq = await nhanvienmodel.insertMany(nvmoi)
        console.log(kq);
        let arrNV = await nhanvienmodel.find();
        res.send(arrNV);
  })

const port = 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
