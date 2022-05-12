const express = require('express');
const Users = require ('./users.model')

const server = express();
server.use(express.json())


server.get('/', (req, res) => {
        res.send('<h1> say hello </h1>')
})

server.get('/api/users', (req, res) => {
    Users.getAll()
    .then(results => {
        res.json(results)
    })
    
})

module.exports=server;