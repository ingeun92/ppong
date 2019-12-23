var express = require('express');
var router = express.Router();
var models = require('../db/models');
var Sequelize = require('sequelize');

var money = {};
var money_ing = 0;
var money_jaeki = 0;
var money_woni = 0;
var money_huni = 0;
var money_woong = 0;

var player_num = 0;

// input player number
router.post('/player', function (req, res) {
  console.log(req.body.num);
  if (req.body.num != "") {
    player_num = Number(req.body.num);
  }
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

  console.log(req.body.ing);
  console.log(req.body.jaeki);
  console.log(req.body.woni);
  console.log(req.body.huni);
  console.log(req.body.woong);

  if (req.body.ing[0] == null) {
    flag_ing = false;
  }
  if (req.body.jaeki[0] == null) {
    flag_jaeki = false;
  }
  if (req.body.woni[0] == null) {
    flag_woni = false;
  }
  if (req.body.huni[0] == null) {
    flag_huni = false;
  }
  if (req.body.woong[0] == null) {
    flag_woong = false;
  }

  for (var i = 0; i < 10; i++) {
    if (req.body.ing[i] != null) {
      score_ing += Number(req.body.ing[i]);
    }
    if (req.body.jaeki[i] != null) {
      score_jaeki += Number(req.body.jaeki[i]);
    }
    if (req.body.woni[i] != null) {
      score_woni += Number(req.body.woni[i]);
    }
    if (req.body.huni[i] != null) {
      score_huni += Number(req.body.huni[i]);
    }
    if (req.body.woong[i] != null) {
      score_woong += Number(req.body.woong[i]);
    }
  }
  console.log(player_num);
  var score_sum = score_ing + score_jaeki + score_woni + score_huni + score_woong;
  console.log(score_sum);
  var score_avg = Math.round(score_sum / player_num);
  console.log(score_avg);

  var gap_ing = (score_avg * flag_ing) - score_ing;
  var gap_jaeki = (score_avg * flag_jaeki) - score_jaeki;
  var gap_woni = (score_avg * flag_woni) - score_woni;
  var gap_huni = (score_avg * flag_huni) - score_huni;
  var gap_woong = (score_avg * flag_woong) - score_woong;
  console.log(flag_woong);

  money_ing += Math.round((gap_ing * 200) / 1000) * 1000;
  money_jaeki += Math.round((gap_jaeki * 200) / 1000) * 1000;
  money_woni += Math.round((gap_woni * 200) / 1000) * 1000;
  money_huni += Math.round((gap_huni * 200) / 1000) * 1000;
  money_woong += Math.round((gap_woong * 200) / 1000) * 1000;
  console.log(money_ing);

  money["ing"] = money_ing.toString();
  money["jaeki"] = money_jaeki.toString();
  money["woni"] = money_woni.toString();
  money["huni"] = money_huni.toString();
  money["woong"] = money_woong.toString();
  console.log(money);

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
});

// end ppong
router.get('/end', function (req, res) {
  // money refresh
  money_ing = 0;
  money_jaeki = 0;
  money_woni = 0;
  money_huni = 0;
  money_woong = 0;

  money["ing"] = money_ing.toString();
  money["jaeki"] = money_jaeki.toString();
  money["woni"] = money_woni.toString();
  money["huni"] = money_huni.toString();
  money["woong"] = money_woong.toString();

  player_num = 0;

  res.send("Refresh Success");
});

router.get('/money', function (req, res) {
  res.send(money);
})

module.exports = router;
