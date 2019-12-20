var express = require('express');
var router = express.Router();
var models = require('../db/models');
var Sequelize = require('sequelize');

var money_ing = 0;
var money_jaeki = 0;
var money_woni = 0;
var money_huni = 0;
var money_woong = 0;

var player_num;

// input player number
router.post('/player', function (req, res) {
  player_num = Number(req.body.num);
  console.log(player_num);

  res.send("Ok");
});

// calculate score & money
// input score data
router.post('/finish', async function (req, res) {
  var score_ing = 0;
  var score_jaeki = 0;
  var score_woni = 0;
  var score_huni = 0;
  var score_woong = 0;

  var flag_ing = true;
  var flag_jaeki = true;
  var flag_woni = true;
  var flag_huni = true;
  var flag_woong = true;

  if (req.body.ing[0] == "" && req.body.ing[9] == "") {
    flag_ing = false;
  }
  if (req.body.jaeki[0] == "" && req.body.jaeki[9] == "") {
    flag_jaeki = false;
  }
  if (req.body.woni[0] == "" && req.body.woni[9] == "") {
    flag_woni = false;
  }
  if (req.body.huni[0] == "" && req.body.huni[9] == "") {
    flag_huni = false;
  }
  if (req.body.woong[0] == "" && req.body.woong[9] == "") {
    flag_woong = false;
  }

  for (var i = 0; i < 10; i++) {
    score_ing += Number(req.body.ing[i]);
    score_jaeki += Number(req.body.jaeki[i]);
    score_woni += Number(req.body.woni[i]);
    score_huni += Number(req.body.huni[i]);
    score_woong += Number(req.body.woong[i]);
  }

  var score_sum = score_ing + score_jaeki + score_woni + score_huni + score_woong;
  var score_avg = Math.round(score_sum / player_num);

  var gap_ing = score_ing - (score_avg * flag_ing);
  var gap_jaeki = score_jaeki - (score_avg * flag_jaeki);
  var gap_woni = score_woni - (score_avg * flag_woni);
  var gap_huni = score_huni - (score_avg * flag_huni);
  var gap_woong = score_woong - (score_avg * flag_woong);

  money_ing += Math.round((gap_ing * 200) / 1000) * 1000;
  money_jaeki += Math.round((gap_jaeki * 200) / 1000) * 1000;
  money_woni += Math.round((gap_woni * 200) / 1000) * 1000;
  money_huni += Math.round((gap_huni * 200) / 1000) * 1000;
  money_woong += Math.round((gap_woong * 200) / 1000) * 1000;

  var money = {};
  money["ing"] = money_ing;
  money["jaeki"] = money_jaeki;
  money["woni"] = money_woni;
  money["huni"] = money_huni;
  money["woong"] = money_woong;

  await models.Ing.create({
    score: score_ing,
    flag_win: -1,
    flag_lose: -1
  });

  await models.Jaeki.create({
    score: score_jaeki,
    flag_win: -1,
    flag_lose: -1
  });

  await models.Woni.create({
    score: score_woni,
    flag_win: -1,
    flag_lose: -1
  });

  await models.Huni.create({
    score: score_huni,
    flag_win: -1,
    flag_lose: -1
  });

  await models.Woong.create({
    score: score_woong,
    flag_win: -1,
    flag_lose: -1
  });

  res.send(money);
});

// end ppong
router.get('/end', function (req, res) {
  // money refresh
  money_ing = 0;
  money_jaeki = 0;
  money_woni = 0;
  money_huni = 0;
  money_woong = 0;

  res.send("Refresh Success");
});

module.exports = router;
