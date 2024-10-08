const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;  // Fallback to 3000 if undefined

app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello amanda!');
});

const authController = require("./auth/auth.controller");
app.use("/api/auth", authController);

app.listen(PORT, () => {
    console.log(`App listening on port ` + PORT);
});
