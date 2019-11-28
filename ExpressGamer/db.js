const mongoose = require('mongoose');

const urlConn = 'mongodb://127.0.0.1/aepi';

//let urlConn = 'mongodb://heroku_7f3cw4hf:5ffqfohb6gkh0k66gc60q3c9c6@ds239578.mlab.com:39578/heroku_7f3cw4hf';

mongoose.connect(urlConn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
