let UserSQL = {

    insert: 'insert  user(id,name,password,role,note) values (null,?,?,?,?,?,?)',
    queryAll: 'select * from user',
    update:'update user set name=?,password=?,roel=?,note=? where id = ?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    // loginName:'select name from user where name =?',
    // loginPass : 'select password from user where password = ?',
    // login : 'select * from user where name = ? and password = ?'
    logSql : "select * from user where name = ? and password = ?"


};

module.exports = UserSQL;
