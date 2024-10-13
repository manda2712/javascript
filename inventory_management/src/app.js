const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;  // Fallback to 3000 if undefined

app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello amanda!');
});

//auth controller
const authController = require("./auth/auth.controller");
app.use("/api/auth", authController);

//item
const itemController = require("./item/item.controller")
app.use("/api/item", itemController)

//user
const userController = require("./user/user.controller")
app.use("/api/user", userController)

//transaction
const transactionController = require("./transaction/transaction.controller")
app.use("/api/transaction", transactionController)

app.listen(PORT, () => {
    console.log(`App listening on port ` + PORT);
});
