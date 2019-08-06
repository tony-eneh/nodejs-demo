const nodemailer = require('nodemailer');

const mailer = () => {
    const transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: 'anthonyeneh@rocketmail.com',
            pass: 'Uchenna90',
        }
    });

    const options = {
        from: 'anthonyeneh@rocketmail.com',
        to: 'aeneh90@gmail.com',
        subject: 'Sent from Nodejs with nodemailer',
        text: 'Wonderful message contents',
        html: '<pre>Wonderful message contents<pre>'
    }

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log('error sending mail', err);
        } else {
            console.log('email sent', info.response);
        };
    });

}

module.exports = mailer;