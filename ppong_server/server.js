var express = require('express');
var app = express();
var models = require('./db/models');
var cors = require('cors');
var bodyparser = require('body-parser');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(cors());
app.use(bodyparser.json());

// 인덱스 페이지
app.get('/', (req, res) => {
  res.send('Contents Server is Running!');
});

// Router 추가
const scoreController = require('./routes/scoreCtrl');
app.use('/score', scoreController);

// const sensorController = require('./routes/sensorCtrl')
// app.use('/sensors', sensorController)
//
// const userController = require('./routes/userCtrl')
// app.use('/users', userController)

// 데이터 베이스 Initialization
models.init();

app.listen(3200, function() {
  console.log("Express server has started on port 3200");
});
