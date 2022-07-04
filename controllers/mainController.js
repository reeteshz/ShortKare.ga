const Url = require('../models/Url');

//Renders Homepage
exports.home = (req, res) => {
    res.render('index', {
        name: 'Reetesh'
    });
};

// Redirect short url to mapped webpage
exports.redirectTo = (req, res) => {
    const {
        shortCode
    } = req.params
    Url.findOne({
            shortCode
        })
        .then(result => {
            if (result) {
                res.redirect(result.longUrl)
            } else {
                err.status = 404;
                res.redirect('index');
            }
        })
        .catch(err => {
            err.status = 500;
            res.redirect('index');
        })
};