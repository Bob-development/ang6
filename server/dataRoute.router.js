const dataRouter = require('express').Router();

const { getData } = require('./Data.controller');

dataRouter.get("/data", getData);

module.exports = {
    dataRouter
}