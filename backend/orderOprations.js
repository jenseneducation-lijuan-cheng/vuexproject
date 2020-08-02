const lowdb = require("lowdb");
const fileSync = require("lowdb/adapters/FileSync");
const adapter = new fileSync("./data/database.json");
const database = lowdb(adapter);
const { generateOrderNr } = require('./utils/utils');

exports.addToOrders = (orderInfo) => {
    const nr = generateOrderNr();
    
    const addOrder = database
      .get("orders")
      .push({
        userID: orderInfo.userID,
        orderNumber: nr,
        timeStamp: Date.now(),
        items: orderInfo.items,
        totalValue: orderInfo.totalValue
      })
      .write();
    let addedOrder = database.get('orders').find({
      orderNumber: nr
    }).value()
    let response = {
      success: true,
      status: "201",
      message: "Successfully confirmed order.",
      data: addedOrder
    }
    return response;
  };
  
  exports.findFromOrders = userID => {
    const findOrders = database
      .get("orders")
      .filter({
        userID: userID
      })
      .write();
    if (findOrders) {
      let response = {
        success: true,
        status: "200",
        message: "Orders found",
        data: findOrders
      }
      return response;
    } else {
      let response = {
        success: false,
        status: "404",
        message: "No orders found",
      }
      return response;
    }
  }
  
  /*** INITIATE DATABASE IF THERE IS NONE ***/
  exports.initiateDatabase = () => {
    const ordersInit = database.has("orders").value();
    if (!ordersInit) {
      database.defaults({
        orders: []
      }).write();
    }
  };