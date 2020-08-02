const { Router } = require('express')
const router = new Router()
const fs = require('fs');
const uuid = require('uuid-random');
const { generateOrderNr, generateETA } = require('../utils/utils');
const { addToOrders, findFromOrders, initiateDatabase } = require('../orderOprations');

initiateDatabase();

router.get('/', async (req, res) => {
    const menu = fs.createReadStream('data/menu.json');
    menu.pipe(res);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const order = {
        eta: generateETA(),
        order: addToOrders(req.body),
    }

    setTimeout(() => {
        res.send(order);
    }, 2000);
});

router.get('/key', (req, res) => {
    const key = {
        key: uuid()
    }
    res.send(JSON.stringify(key));
});
router.get('/getOrders/:userID',(req,res) => {
    const userID = req.params.userID;
    const orders =findFromOrders(userID);

    res.send(JSON.stringify(orders))
})


module.exports = router