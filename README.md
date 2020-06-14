# Memo
```txt
npm install -g pm2

pm2 start app.js
데몬형태로 백그라운드에서 띄우기 가능

pm2 start app.js -i 0
클러스터링(분산작업) 처리 > 0 : 모든 코어에서 돌리기 / 1~ : 숫자만큼 돌리기

pm2 kill

pm2 delete <idname>

logger - winston : 좀더 무겁지만 다양하게 나타내줌 morgan

npm install passport passport-local passport-kakao

passportjs - serialize, deserialize 기능으로 서버 메모리 최적화 기능 제공

```
# passport.js
http://www.passportjs.org/

# npmtrends.com
npmtrends.com
ex) passport 검색

# express-session 주의점
https://www.npmjs.com/package/express-session
```txt
Warning The default server-side session storage, MemoryStore, is purposely not designed for a production environment. It will leak memory under most conditions, does not scale past a single process, and is meant for debugging and developing.

For a list of stores, see compatible session stores.

> 메모리가 아닌 DB에 저장 권장
```