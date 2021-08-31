const mysql = require('mysql2');
const connection = require('../db/connexion');

const User = function (user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.image = user.image;
    this.description = user.descrip;
    this.isadmin = user.isadmin;
};



