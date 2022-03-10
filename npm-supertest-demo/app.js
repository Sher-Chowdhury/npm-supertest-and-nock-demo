
const express = require('express')
const fetch = require('node-fetch')
const app = express();

app.get('/', async (req, res) => {
    const response = await fetch('http://api.icndb.comm/jokes/random')
    const json = await response.json()
    res.json(json)
})

module.exports = app