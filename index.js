const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://chanco:abcd1234@cluster.h1gcy.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Success!'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));