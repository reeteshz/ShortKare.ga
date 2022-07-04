const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../models/Url');

exports.shorten = (req, res) => {
    const {
        longUrl
    } = req.body;
    // Check long url
    if (validUrl.isUri(longUrl)) {
        Url.findOne({
                longUrl
            })
            .then(result => {
                if (result) {
                    const shortUrl = `http://localhost:3000/${result.shortCode}`
                    res.render('index', {
                        shortUrl
                    })
                } else {
                    // Generating shortcode
                    const shortCode = shortid.generate();

                    url = new Url({
                        longUrl,
                        shortCode,
                        date: new Date()
                    });
                    //Saving the entry in DB
                    url.save()
                        .then(result => {
                            const shortUrl = `http://localhost:3000/${shortCode}`
                            res.render('index', {
                                shortUrl
                            })
                        })
                        .catch(err => {
                            err.status = 400;
                            res.redirect('index');
                        });
                }
            })

    } else {
        res.status(401).json('Invalid long url');
    }
};