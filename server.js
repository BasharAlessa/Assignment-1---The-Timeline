const express = require("express");
const route = require("./config/route");
const app = express();
require("./config/mongoose")

app.set("view engine", "ejs")

app.use(express.urlencoded({extended:false}))

app.use(route)
app.listen(4500 , ()=>console.log("server is --- ON"))