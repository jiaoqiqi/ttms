const express = require('express');
const app = new express();
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const hello = require('./server/routers/hello');
const login = require('./server/routers/login')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

app.use("/", hello);
app.use('/',login)


app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('server start');
});

