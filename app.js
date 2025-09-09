//Dependencias
const express = require("express")
var http = require('http');
require("dotenv").config()
const bodyParser = require("body-parser")
const routeUsuario = require("./router/usuario")

//Variables
const app = express()
//Configuraciones
const port = process.env.PORT
const nombreApp = process.env.NOMBREAPP

app.use(
    bodyParser.json({
        limit: "50mb"
    })
)

app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: "true"
    })
)

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use(routeUsuario)

var httpServer = http.createServer(app);
httpServer.listen(port, () => {
    console.log(`${nombreApp} Api en linea por el puerto ${port}`)
});