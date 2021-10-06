const database = require ('../db/connection');

exports.createPost = ( req, res, next) => {

    const titre = req.body.titre;
    const descrip = req.body.descrip;
    const date_pub = req.body.date_pub;
    const user_id = req.body.user_id;

    database.query('INSERT INTO post (titre,descrip,date_pub,user_id) VALUES (?,?,now(),?)', [titre, descrip, date_pub, user_id], 
    function(err, results) {
      if(err) {
        res.status(500).json({message : " Post non crée", error:err})
      }
      res.status(201).json({message: "Post crée avec succès", results});
    })
}

exports.modifyPost = (req, res, next) => {

    const titre = req.body.titre;
    const descrip = req.body.descrip;
    const id = req.params.id;
    const user_id = req.body.user_id;

    database.query('UPDATE post SET titre = ?, descrip = ? WHERE id', [titre, descrip, id, user_id], 
    function (err, results) {
        if ( err || results.affectedRows == 0) {  // affectedrow methode mysql qui renvoi le nombre de ligne modifié supr ou inseret
            res.status(500).json({message: "Post non modifié", error:err})
        }
        res.status(200).json({message: "Post modifié avec succès", results})
    })
}

exports.deletePost = (req, res, next) => {

    const id = req.params.id;

    database.query('DELETE FROM post WHERE id = ?', [id], 
    function (err, results) {
        if (err || results.affectedRows == 0) {
            res.status(500).json({message: "Post non suprimé", error:err})
        }
        res.status(200).json({message: "Post suprimé avec succès"})
    })
}

exports.getAllPost = (req, res, next) => {

    const id = req.params.id;

    database.query('SELECT * FROM post ORDER BY post.user_id = ?', [id], 
    function (err, results) {
        if (results.length === 0) {
            res.status(404).json({message: " Aucun Post", error:err})
        }
        res.status(200).json({message:"Les post ont été trouvé", results})
    })
}

exports.getOnePost = (req, res, next) => {

    const id = req.params.id;

    database.query('SELECT * FROM post WHERE id = ?', [id], 
    function (err, results) {
        if (results.length === 0) {
            res.status(404).json({ message: "Post non trouvé", error:err})
        }
        res.status(200).json({message: "Post trouvé avec succès" , results})
    })
}