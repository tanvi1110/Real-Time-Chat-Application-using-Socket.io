const http = require('http')
const express = require('express')
const cors = require('cors')
const {Server} = require("socket.io")

const app = express()
const port = 4500 || process.env.PORT

const users = [{}]


app.use(cors({
    origin: 'http://localhost:3000', // Frontend origin
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  }));
  
app.get('/', (req, res) => {
    res.send('It is working')
})

const server = http.createServer(app) // we called express here using http and created a server

const io = new Server(server) // created a circuit/connection of io --> input-output

io.on('connection', (socket) => {
    console.log('New connection established:', socket.id);
  
    socket.on('joined', ({ user }) => {
        users[socket.id] = user
      console.log(`${user} has joined.`);
      socket.broadcast.emit('userJoined', {user: 'Admin', message: `${users[socket.id]} has joined the chat room.`});
      socket.emit('welcome', {user: 'Admin', message:`Welcome to the chat ${users[socket.id]}.`});   
    });  

    socket.on('message', ({message, id})=>{
      io.emit('sendMessage', {user: users[id], message, id })
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('leave', {user: 'Admin', message: `${users[socket.id]} has left the chat room.`});
      console.log('User disconnected:', socket.id);
    });
  });
  
// as soon as io connection is established on it

server.listen(port, () => {
    console.log(`server is working on http://localhost:${port}`)

})
