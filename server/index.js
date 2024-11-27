const http = require('http')
const express = require('express')
const cors = require('cors')
const socketIO = require("socket.io")

const app = express()
const port = 4500 || process.env.PORT

app.get('/', (req, res) => {
    res.send('It is working')
})

const server = http.createServer(app) // we called express here using http and created a server

const io = socketIO(server) // created a circuit/connection of io --> input-output

io.on('connection', () => {
    console.log('new connection')
}) // as soon as io connection is established on it

server.listen(port, () => {
    console.log(`server is working on http://localhost:${port}`)

})
