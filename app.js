const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Pipeline From Nantha!")

})

app.listen(PORT, () => {
    console.log(`Server is Running On PORT ${PORT}`);

})