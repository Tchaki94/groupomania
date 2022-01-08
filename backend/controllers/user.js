const bcrypt = require('bcrypt');
//require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const fs = require("fs");



// ajout d'un utilisateur ( newuser )
exports.signup = (req, res) => {
    try{
    const name = req.body.name;
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;

    if (name === null || name === '' || email === null || email === '' || password === null || password === '') {
        res.status(400).json({ error :"Veuillez remplir les champs du formulaire"});
    }

    if (name && email && password) {
        console.log("ok")
       
        bcrypt.hash(password, 10)
            .then(hash =>{
                 User.createUser({
                    email: email,
                    name: name,
                    password: hash,
                    isadmin: false
                }, (err, data) => {
                    if(err){
                        return res.status(500).send({message: err.message})
                    }
                    return res.status(201).send(data);
                        
                })
            })
    }
    }catch(err){
        return res.status(500).send({message: err.message})
    }
    	
}

// login de l'utilisateur ( login )
exports.login = (req, res) => {
    User.findOne(req.body.email, (err, user) => {
        console.log(user);
        if(err){
            return res.status(500).send({message: err.message})
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
})
}


//supression compte ( deleteProfil )

