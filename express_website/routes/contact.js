var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});
router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'shahriar.uchchash@gmai.com',
            pass: 'something'
        }
    });
    var mailOptions = {
        from: 'Shahriar<lonelyuchass@gmail.com>',
        to: 'shahriar.uchchash@gmail.com',
        subject: 'Website submission',
        text: 'You have a new submission with the following details..Name:' + req.body.name + ' Email: ' + req.body.email + ' Message:' + req.body.message,
        html: '<p>You got a new submission with following details</p><ul><li>Name: ' + req.body.name + '</li> </ul>'
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('error');
            res.redirect('/');
        } else {
            console.log('sent' + info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;