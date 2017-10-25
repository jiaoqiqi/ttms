const express = require('express');
const app = new express();
const path = require('path');

const bodyParser = require('body-parser');

// const session = require('express-session');

const hello = require('./server/routers/hello');
const login = require('./server/routers/login')
const register = require('./server/routers/register')
const userList = require('./server/routers/userList')
const deleteUser = require('./server/routers/deleteUser')
const modifyUser = require('./server/routers/modifyUser')
const findUserByName = require('./server/routers/findUser')

const movieList = require('./server/routers/movieList')
const deleteMovie = require('./server/routers/deleteMovie')
const modifyMovie = require('./server/routers/modifyMoive')
const addMovie = require('./server/routers/addMovie')
const findMovieByName = require('./server/routers/findMovie')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.use("/", hello);
app.use("/", login)
app.use("/", register)
app.use("/", userList)
app.use("/", deleteUser)
app.use("/", modifyUser)
app.use("/", movieList)
app.use("/", deleteMovie)
app.use("/", modifyMovie)
app.use("/", addMovie)
app.use("/", findUserByName)
app.use("/", findMovieByName)

// app.use(session({
//     secret: 'hubwiz app', //secret的值建议使用随机字符串
//     cookie: {maxAge: 60 * 1000 * 30} // 过期时间（毫秒）
// }));
// app.get('/', function (req, res) {
//     if (req.session.sign) {//检查用户是否已经登录
//         console.log(req.session);//打印session的值
//         res.send('welecome <strong>' + req.session.name + '</strong>, 欢迎你再次登录');
//     } else {
//         req.session.sign = true;
//         req.session.name = '汇智网';
//         res.send('欢迎登陆！');
//     }
// });
// app.listen(80);


app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    // if (req.session.sign) {//检查用户是否已经登录
    //     console.log(req.session);//打印session的值
    //     res.send('welecome <strong>' + req.session.name + '</strong>, 欢迎你再次登录');
    // } else {
    //     console.log(2134235)
    //     req.session.sign = true;
    //     req.session.name = '';
    //     res.send('请先登录！');
    // }
});

app.listen(3000, () => {
    console.log('server start');
});

