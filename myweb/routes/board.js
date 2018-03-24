var express = require('express');
var router = express.Router();

//function도 별도 파일로 export 가능
var fn = require('./common/fn');

//function을 분리 후 객체 안에 넣었으니까 list 로 뽑아냄
router.get('/',fn.list);

module.exports = router;