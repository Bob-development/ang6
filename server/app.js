const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();

const { getData } = require('./Data.controller');

const { dataRouter } = require('./dataRoute.router');

app.use(cors());
app.use(bodyParser.json())

async function connect(){
    try {
        await mongoose.connect("mongodb+srv://BobDev:asdQWE123@cluster0.6z6ayjp.mongodb.net/test1");
    } catch (e){
        console.log(e.message);
    }
}

connect();

app.use("", dataRouter);
app.use("/", (req, res) => {
    return res.json({
        message: 'Hello World!'
    })
})

module.exports = {
    app
}