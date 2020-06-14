/* LocalStrategy 변수명 > 정책 */
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { pool } = require('../modules/mysql-conn');

const cb = async (userid, userpw, done) => {
  let sql, result, connect;
  
  try{
    sql = "SELECT * FROM user WHERE userid=?";
    connect = await pool.getConnection();
    result = await connect.query(sql, [userid]);
    connect.release();
    if(result[0][0]){
      let compare = await bcrypt.compare(userpw + process.env.PASS_SALT, result[0][0].userpw);
      if(compare) done(null, result[0][0]);
      else done(null, false, '아이디와 비밀번호를 확인하세요.');
    }
    else{
      done(null, false, '아이디와 비밀번호를 확인하세요.'); // 아이디를 못찾은 경우
    }
  }
  catch(e){

    connect.release();
    done(e);
  }

};

module.exports = (passport) =>{
  passport.use(new LocalStrategy({
    /* db컬럼명과 맞춰주기 */
    usernameField : 'userid',
    passwordField : 'userpw'
  }, cb));
  /* 로그인되면 실행될 콜백도 보내주기 */
};