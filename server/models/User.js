const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // 빈공간 없애기
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// 화살표 함수를 썼더니 this가 인식을 못했다.. 왜?
// Arrow functions explicitly prevent binding this,
// so your method will not have access to the document and the above examples will not work. )
userSchema.pre('save', function (next) {
  const user = this;

  // password 가 변환 돨때만 암호화
  if (user.isModified('password')) {
    // 비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  // 암호화된 비밀번호가 같은지 확인
  bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  const user = this;

  // jwt를 이용해서 token 생성
  const token = jwt.sign(user._id.toHexString(), 'secretToken');

  user.token = token;
  
  user.save((err, user) => {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  const user = this;

  // 토큰을 decode 한다.
  jwt.verify(token, 'secretToken', function (err, decoded) {
    // 유저 아이디를 이용해서 유저를 찾은 다음에 클라이언트에서 가져온 토큰과 DB에 보관된 토큰이 일치하는지 확인

    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
