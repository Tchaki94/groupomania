const bcrypt = require('bcrypt');
//require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const database = require('../db/connection');



// ajout d'un utilisateur ( newuser )
exports.signup = (req, res) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (name === null || name === '' || email === null || email === '' || password === null || password === '') {
        res.status(400).json({ error :"Veuillez remplir les champs du formulaire"});
    }

    if (name == true && email == true && password == true) {
        User.findOne({
            attributes: ['email'],
            where: { email: email}
        })
        .then(user => {
            if (!user) {
                const newUser = User.createUser({
                    email: email,
                    name: name,
                    password: bcrypt.hash,
                    isadmin: false
                })
            } 
            else {
                res.status(409).json({ error: 'Cette utilisateur existe déjà !'})
            }
        })
        .catch(error => { res.status(500).json({ error })})
    }
}

// login de l'utilisateur ( login )
exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then( user => {
            if(!user){
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid){
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => req.status(500).json({ error }));
}

// deconnexion utilisateur ( logout )


//supression compte ( deleteProfil )

