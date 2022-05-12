const express = require('express');
const Users = require ('./users.model')

const server = express();
server.use(express.json())


server.get('/', (req, res) => {
        res.send('<h1> HELLO </h1>')
})

server.get('/api/users', (req, res) => {
    Users.getAll()
    .then(results => {
        res.json(results)
    })
    
})

module.exports=server;