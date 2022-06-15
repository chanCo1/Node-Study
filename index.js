const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { User } = require('./models/User');

// 데이터를 분석해서 가져온다
app.use(bodyParser.urlencoded({ extended: true }));
// json 타입을 분석해서 가져온다.
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://chanco:abcd1234@cluster.h1gcy.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Success!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!! 잘 부탁한다!'));

app.post('/register', (req, res) => {
  // 회원가입시 필요한 정보들을 클라이언트에서 가져오면 그것들을 데이터 베이스에 넣어준다.
  // body-parser를 통해 클라이언트 정보들을 body에 받아준다.
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err })

    return res.status(200).json({ success: true });
  });
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`));