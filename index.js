const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello world!(v2)')
})

const server = app.listen(3000, () => {
    const { address, port } = server.address()
    console.log(`App listening at http://${address}:${port}`)
})