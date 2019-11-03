const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const List = require('../model/list.js');

router.get('/', async (req, res) => {
    List.find().sort({name:1})
    .then((list) => {
    res.send(list).json();
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});
router.post('/',async (req,res,next)=>{
    const item = new List ({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        surName : req.body.surName,
        tel : req.body.tel 
    });
    item
        .save()
        .then(item => {
            res.send(item).json();
        })
        .catch(err=> console.log(err));
})
router.delete('/:itemId', function (req, res) {
    const item = req.params.itemId;
     List.findOneAndRemove({ _id: item }, function(err) {
         if (err) throw err;
         res.send({deleted:true});
     });


 });

module.exports = router;