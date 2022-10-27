var express = require('express');
var router = express.Router();
times=0;

/* GET users listing. */

x=Math.random();
router.get('/', function(req, res, next) {
    if(req.query.x!=undefined)
    {
        x=req.query.x;
    }
  s=Math.log2(x)
  r=Math.cosh(x)
  t=Math.floor(x)
  res.send(`log2 applied to ${x} is ${s}<br>cosh applied to ${x} is ${r} <br>floor applied to ${x} is ${t}`);
});

module.exports = router;
