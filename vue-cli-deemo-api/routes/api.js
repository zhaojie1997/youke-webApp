var express = require('express');
var router = express.Router();
let path = require('path');
let fs = require('fs');

/* GET home page. */
router.get('/index',(req,res) => {
    let file = path.join(__dirname,'../public/index.json');
    fs.readFile(file,'utf-8',(err,data) => {
        if (err) {
            res.send(err)
        } else{
            res.send(data)
        }
    })
})


module.exports = router;
