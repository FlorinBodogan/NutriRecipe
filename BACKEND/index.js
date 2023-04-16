const cors = require('cors');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Routes
const errorController = require('./src/controllers/error');
const authRoutes = require('./src/routes/auth');
const userRoutes = require('./src/routes/user');


app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

const port = 3500;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})