const Url = require('../model/url');

module.exports = (req, res) => {
    const redirurl = req.params.value;
    if(redirurl && redirurl != 'undefined') {
        Url.findAll({
            where: {shorten_url: redirurl}
        })
        .then(data => {
            const oriurl = data[0].original_url
            console.log(oriurl)
            if(oriurl){
                res.redirect(oriurl)
            }
        })
        .catch(error => {
            throw error
        })
    }
}