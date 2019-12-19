var express = require('express');
var app = express();
// var models = require('./models/models');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// 인덱스 페이지
app.get('/', (req, res) => {
  res.send('Contents Server is Running!')
});

// Router 추가
// const contentsController = require('./routes/contentsCtrl')
// app.use('/contents', contentsController)
//
// const sensorController = require('./routes/sensorCtrl')
// app.use('/sensors', sensorController)
//
// const userController = require('./routes/userCtrl')
// app.use('/users', userController)

// 데이터 베이스 Initialization
// models.init();

app.listen(3000, function() {
  console.log("Express server has started on port 3000");
});
