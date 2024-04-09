require('dotenv').config()

let express = require('express');
let app = express();

// console.log("Hello World");

// app.get("/", (req, res) => {
//     res.send("Hello Express");
// });

app.use("/public", express.static(__dirname + '/public'))

app.get("/", (req, res) => {
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") res.json({ "message": "HELLO JSON" });

    res.json({ "message": "Hello json" })
})


































module.exports = app;
