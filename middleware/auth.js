const { User } = require('../models/User')

let auth = (req, res, next) => {

    //get token from client cookie
    let token = req.cookies.x_auth;

    //Decode Token with JWT then find User
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, error: true})

        req.token = token;
        req.user = user;
        next();
    });

    //If found User, auth => okay. if not, auth => no
}

module.exports = { auth };