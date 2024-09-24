const express = require('express')
const app = express()
app.use(express.json());
app.get("/", (req, res) => {
    res.send('Hello there!')
})
app.listen(3000, () => {
    console.log(`app listening on port` + 3000)
})