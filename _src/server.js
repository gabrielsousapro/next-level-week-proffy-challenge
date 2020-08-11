const express = require('express')
const server = express()

server.use(express.static("_public"))
.get("/", (req, res) => {
    return res.sendFile(__dirname + "/_views/index.html")
})
.get("/study", (req, res) => {
    return res.send("Página study")
})
.listen(5500)