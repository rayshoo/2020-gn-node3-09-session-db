/* LocalStrategy 변수명 > 정책 */
const LocalStrategy = require('passport-local').Strategy;

const cb = () => {

};

module.exports = (passport) =>{
  passport.use(new LocalStrategy({
    /* db컬럼명과 맞춰주기 */
    usernameField : 'userid',
    passwordField : 'userpw'
  }, cb));
  /* 로그인되면 실행될 콜백도 보내주기 */
};