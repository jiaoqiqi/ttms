
const express = require('express');
const app = new express();
const path = require('path');

const bodyParser = require('body-parser');

const hello = require('./server/routers/hello');
const login = require('./server/routers/login')
const register = require('./server/routers/register')
const userList = require('./server/routers/userList')
const deleteUser = require('./server/routers/deleteUser')
const modifyUser = require('./server/routers/modifyUser')
const movieList = require('./server/routers/movieList')
const deleteMovie = require('./server/routers/deleteMovie')
const modifyMovie = require('./server/routers/modifyMoive')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.use("/", hello);
app.use("/",login)
app.use("/",register)
app.use("/",userList)
app.use("/",deleteUser)
app.use("/",modifyUser)
app.use("/",movieList)
app.use("/",deleteMovie)
app.use("/",modifyMovie)


app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('server start');
});

