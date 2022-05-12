const express = require('express')


const users = [
    "jonny",
    "Luigi",
    "Marcos",
    "Geanette",
    "Franco",
    "Betty"
];

async function getAll() {
    return users;
}

async function getByIndex(i) {
    return users[i];
}

async function add(user) {
    users.push(user);
    return users
}

// async function find(user) {
//     users
// }

module.exports = {
    getAll,
    getByIndex,
    add,
}