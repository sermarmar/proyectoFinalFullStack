const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const moment = require('moment');
const jwt = require('jwt-simple');


router.post('/register', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    User.create(req.body).then(user => {
        res.json(user);
    });
});

//Recibe el mail y el password
router.post('/login', (req, res) => {
    //Recupero todos los usuarios con el mail que viene dentro del body
    User.find({
        mail: req.body.mail
    }, (err, users) => {
        // Si recogemos un único usuario
        if (users.length == 1) {
            //Comparamos las passwords.
            console.log(req.body.password, users[0].password);
            bcrypt.compare(req.body.password, users[0].password, (err, same) => {
                if (same) {
                    let token = createToken(users[0]);
                    res.json({ success: token });
                }
                else {
                    res.json({ error: 'Usuario y/o password incorrecta' });
                }
            });
        } else {
            //Si no, devolvemos el error. Sólo puede existir un usuario de mail
            res.json({ error: 'Usuario y/o password incorrecta' });
        }
    });
});

let createToken = (user) => {
    let obj = {
        user_id: user.id,
        expires_date: moment().add(45, 'minutes').unix(),
        create_date: moment().unix()
    }

    console.log(obj);
    let token = jwt.encode(obj, process.env.TOKEN_KEY);
    return token;
}

module.exports = router;