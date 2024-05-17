const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Watchdog running.");
})

app.use((req, res, next) => {
    res.status(404).send("Watchdog - 404");
})

module.exports.run = (port) => {
    console.log(`Starting watchdog...`)

    app.listen(port, () => {
        console.log(`App listening on port ${port}.`)
    })
}