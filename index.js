require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/products",productRoute);

app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated non");
});


mongoose
  .connect(
    "mongodb+srv://felicienboury_db_user:1evHKA6I9jcgUwtv@cluster0.xl59pnf.mongodb.net/nodejs_mongodb?appName=Cluster0"
).then(() => {
    console.log("Connected to database!");
    }).catch(() => {
    console.log("Connection failed!");
  });

    
;


















/*
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb+srv://haris2iftikhar:GClTzr15XhkjvN6k@backenddb.nrurtot.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

 */