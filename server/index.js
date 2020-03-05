const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

try {
    app.listen(PORT, () => {
        console.log(`Listening to port: ${PORT}`)
    })
} catch (error) {
    console.log("Error connecting to server")
}