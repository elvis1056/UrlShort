const Url = require('../model/url');
var crypto = require('crypto');

module.exports = {
    index: (req, res) => {
        res.render('index')
    },
    shorten: (req, res) => {
        const originalurl = req.body.originalurl
        const shorten = crypto.randomBytes(3).toString('hex');
        Url.create({
            shorten_url: shorten,
            original_url: req.body.originalurl
        }).then(()=>{
            res.send(shorten)
        }).catch((err)=>{
            console.log(err)
        })
    }

}