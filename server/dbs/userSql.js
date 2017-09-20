let UserSQL = {

    insert: 'insert  user(id,name,password,role) values (null,?,?,?)',
    queryAll: 'select * from user',
    update: 'update user set name=?,role=? where id = ?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    logSql: "select * from user where name = ? and password = ?",
    registerSql: "insert into user(id,name,password,role) select null,?,?,0 " +
    "from dual where not exists(select name from user where name = ?)",
    //判断输入的名字是否存在，存在则不插入
    findName: "select name from user where name = ?",
    findUser: "select * from user where name = ? ",

    selectMovies:"select * from movies",
    deleteMovie :"delete from movies where movieId = ?",
    modifyMovie :"update movies set movieName=?,movieLead=?,movieAct=?," +
    "movieDuration=?,movieInfo=?" +
    " where  movieId= ?"
};

module.exports = UserSQL;
