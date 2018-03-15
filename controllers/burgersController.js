const express = require('express');
const router = express.Router();
const orm = require('../config/orm');

router.get('/', (req,res)=>{
    orm.getAll((data)=>{
        const burgerObj = {
            burger: data
        }
        console.log(data)
        res.render('index', burgerObj)
    })
})





module.exports = router;