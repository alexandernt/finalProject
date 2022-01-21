const express = require('express');
const path = require("path");
const app = express();
const port = 3000;
const router = require('./routes/index');

//Middle wares
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


//Routes
app.use(router);


//Port
app.listen(port, "192.168.0.46" || "localhost" ,() => {
    console.log(`Example app listening at http://localhost:${port}`)
});