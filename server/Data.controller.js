const mongoose = require('mongoose');

const model = mongoose.model("Test1", {});

async function getData(req, res){
    try {
        const data = await model.find({});

        return res.json(data);
    } catch (e){
        console.log(e.message);
    }
}

module.exports = {
    getData
}