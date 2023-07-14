const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT ||  8000;
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ error: false, msg: 'success' });
});

app.get("/user", (req, res) => {
    res.json({ error: false, msg: 'user successfully get' });
});

app.listen(5000, () => console.log(`server running at ${port}`))