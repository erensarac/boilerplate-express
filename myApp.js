require('dotenv').config()

let express = require('express');
let app = express();

// console.log("Hello World");

// app.get("/", (req, res) => {
//     res.send("Hello Express");
// });

app.use((req, res, next) => {
    console.log(req.method, req.path, "-", req.ip);
    next();
})

app.use("/public", express.static(__dirname + '/public'))

app.get("/", (req, res) => {
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") res.json({ "message": "HELLO JSON" });

    res.json({ "message": "Hello json" })
})

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => res.json({time: req.time}))

































module.exports = app;
