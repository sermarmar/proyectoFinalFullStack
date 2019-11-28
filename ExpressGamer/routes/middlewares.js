const jwt = require('jwt-simple');
const moment = require('moment');
const fs = require('fs');

const checkToken = (req, res, next) => {
    console.log('Pasa por la función check Token');

    // 1 - Compruebo si el token está incluido en las cabeceras
    if (!req.headers['aepi-token']) {
        return res.json({ error: 'Debes incluir la cabecera aepi-token' });
    }

    // 2 - ¿Se puede decodificar el token?
    let obj = null;
    try {
        obj = jwt.decode(req.headers['aepi-token'], process.env.TOKEN_KEY);
    } catch (error) {
        return res.json({ error: "El token no es válido" });
    }

    // 3 - Compruebo si el token está caducado
    console.log('Fecha actual', moment().unix(), 'Fecha expirada', obj.expires_date);
    if (moment().unix() > obj.expires_date) {
        return res.json({ error: "El token esá caducado. Pide otro." });
    }




    next();
};

const escribirEnLog = (req, res, next) => {
    fs.appendFile('./main.log', `NUEVA PETICIÓN ${req.method} ${req.url} ${moment().format('DD/MM/YYYY HH:mm')}\n`, (err) => {
        next();
    });
};

module.exports = {
    checkToken: checkToken,
    escribirEnLog: escribirEnLog
}