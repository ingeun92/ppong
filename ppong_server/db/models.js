var Sequelize = require('sequelize');
var db = {}

// 데이터 접속 및 모델 추가
var sequelize = new Sequelize('ppong_db', 'root', 'dlsrms', {
    host: 'localhost',
    dialect: 'mysql',
    define: { // 데이터 타입을 UTF-8로 변경
        charset: 'utf8',
        collate: 'utf8_general_ci',
    },
    dialectOptions: {
        collate: 'utf8_general_ci'
    }
});

// Ing Model
var Ing = sequelize.define('ing', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    score: Sequelize.INTEGER,                       // round score
    flag_win: Sequelize.BOOLEAN,                    // win flag
    flag_lose: Sequelize.BOOLEAN                    // lose flag
  },
  { freezeTableName: true }
);

// Jaeki Model
var Jaeki = sequelize.define('jaeki', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    score: Sequelize.INTEGER,                       // round score
    flag_win: Sequelize.BOOLEAN,                    // win flag
    flag_lose: Sequelize.BOOLEAN                    // lose flag
  },
  { freezeTableName: true }
);

// Woni Model
var Woni = sequelize.define('woni', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    score: Sequelize.INTEGER,                       // round score
    flag_win: Sequelize.BOOLEAN,                    // win flag
    flag_lose: Sequelize.BOOLEAN                    // lose flag
  },
  { freezeTableName: true }
);

// Huni Model
var Huni = sequelize.define('huni', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    score: Sequelize.INTEGER,                       // round score
    flag_win: Sequelize.BOOLEAN,                    // win flag
    flag_lose: Sequelize.BOOLEAN                    // lose flag
  },
  { freezeTableName: true }
);

// Woong Model
var Woong = sequelize.define('woong', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    score: Sequelize.INTEGER,                       // round score
    flag_win: Sequelize.BOOLEAN,                    // win flag
    flag_lose: Sequelize.BOOLEAN                    // lose flag
  },
  { freezeTableName: true }
);

db['sequelize'] = sequelize;
db['Ing'] = Ing;
db['Jaeki'] = Jaeki;
db['Woni'] = Woni;
db['Huni'] = Huni;
db['Woong'] = Woong;

db.init = function() {
    const ifForced = { force: true };

    if(ifForced.force === true) {
        // Ing Model 생성
        Ing.sync(ifForced).then(() => {
            console.log('Ing table successfully created.');
        }).catch((error) => {
            console.error('Error occured while creating Ing:' + error);
        });

        // Jaeki Model 생성
        Jaeki.sync(ifForced).then(() => {
            console.log('Jaeki table successfully created.');
        }).catch((error) => {
            console.error('Error occured while creating Jaeki:' + error);
        });

        // Woni Model 생성
        Woni.sync(ifForced).then(() => {
            console.log('Woni table successfully created.');
        }).catch((error) => {
            console.error('Error occured while creating Woni:' + error);
        });

        // Huni Model 생성
        Huni.sync(ifForced).then(() => {
            console.log('Huni table successfully created.');
        }).catch((error) => {
            console.error('Error occured while creating Huni:' + error);
        });

        // Woong Model 생성
        Woong.sync(ifForced).then(() => {
            console.log('Woong table successfully created.');
        }).catch((error) => {
            console.error('Error occured while creating Woong:' + error);
        });
    }
}

module.exports = db
