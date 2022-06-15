const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { User } = require('./models/User');
const config = require('./config/key');

// 데이터를 분석해서 가져온다
app.use(bodyParser.urlencoded({ extended: true }));
// json 타입을 분석해서 가져온다.
app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI)
  .then(() => console.log('Success!'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World!! 잘 부탁한다!'));

app.post('/register', (req, res) => {
  // 회원가입시 필요한 정보들을 클라이언트에서 가져오면 그것들을 데이터 베이스에 넣어준다.
  // body-parser를 통해 클라이언트 정보들을 body에 받아준다.
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.post('/login', (req, res) => {
  // 1. 요청된 이메일을 데이터 베이스에 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '이메일에 해당하는 유저가 없습니다.',
      });
    }
    // 2. 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 틀렸습니다.',
        });

      // 3. 비밀번호까지 맞다면 토큰을 생성하기.
        user.generateToken((err, user) => {

        });

    });
  });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
