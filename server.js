const express = require('express')

//import { engine } from 'express-handlebars';
const expressHbs = require('express-handlebars');

const app = express()

const mongoose = require('mongoose');
const uri = 'mongodb+srv://tungktph27526:kttung2609@cluster0.mdas35v.mongodb.net/cp17301?retryWrites=true&w=majority';

const labModel = require('./labModel');

app.get('/lab', async (req, res) => {
  await mongoose.connect(uri).then(console.log('Ket noi DB thanh cong!'));

  try {
    const labs = await labModel.find({tailieu: 2});

    // labModel.updateMany();
    await labModel.updateMany({tieude: 'lab 7'}, {tieude: 'lab 3 - 2023'})
    // labModel.deleteMany({tieude: 'Lab 7'});
    await labModel.deleteOne({tieude: 'lab 3 - 2023'});

    console.log(labs.toString());
    res.send(labs);
  } catch (err) {
    console.log(err);
  }
});

app.get('/add_lab', async (req, res) => {
  await mongoose.connect(uri).then(console.log('Ket noi DB thanh cong!'));

  let lab = new labModel ({
    tieude : 'lab 7',
    noidung:'abcxyz',
    tailieu: 2
  });
  

  //lab.tailieu = 2;


  try {
    let kq = await lab.save();

    console.log(kq);

    let labs = await labModel.find();
    res.send(labs);

  } catch (err) {
    console.log(err);
  }
});
const port = 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})