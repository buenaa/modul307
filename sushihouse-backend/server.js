'use strict';

let express = require("express");
let bodyParser = require("body-parser");
let cors = require('cors')
let app     = express();
const { v4: uuidv4 } = require('uuid');
const OrderRepository = require("./OrderRepository");
const Validation = require('./ValidationService');

const port = process.env.PORT || 3000;
const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2;

const staticPath = './data/';
const orderFile = staticPath+'orders.json';

app.use(cors());

// support json encoded bodies
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//Test endpoint
app.get("/test", (req, res) => {
  const id = uuidv4();
  res.send(id);
});

//Create new order endpoint
app.post("/order", (req, res) => {
  let currentDate = new Date();
  let orderObj = {
    "id": uuidv4(),
    "menu": req.body.menu,
    "side": req.body.side,
    "comment": req.body.comment,
    "date": currentDate,
    "user": req.body.user
  }

  let result = Validation.validateOrder(orderObj);
  if (result.isNotValid) {
    console.log(result.msg);
    res.status(406).json(JSON.parse(`{"msg": "${result.msg}"}`));
  } else {
    //Save order
    let orderRepo = new OrderRepository(orderFile);

    //Get all orders from JSON file, then add new dataset, then save whole array of orders
    orderRepo.read()
        .then((data) => {
          console.log(orderObj);
          data.push(orderObj);
          return data;
        })
        .then(data => orderRepo.save(data))
        .catch(error => {
          console.error(error);
        });
    res.status(201).json(JSON.parse(`{"msg": "Thank you ${orderObj.user.firstname}, for your order!"}`));
  }
});