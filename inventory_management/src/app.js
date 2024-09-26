const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.get("/", (req, res) => {
    res.send('Hello amanda!')
})
app.listen(3000, () => {
    console.log(`app listening on port` + 3000)
})