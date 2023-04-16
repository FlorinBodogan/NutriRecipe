const cors = require('cors');
const express = require("express");
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

const port = 3500;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})