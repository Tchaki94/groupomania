const database = require ('../db/connection');

exports.createComment = (req, res, next) => {

    const user_id = req.body.user_id;
    const comment = req.body.comment;
    const post_id = req.body.post_id;

    database.query('INSERT INTO commentaires (user_id, comment, post_id) VALUES (?,?,?)', [user_id, comment, post_id], 
    function (err, results) {
        if (err) {
            res.status(500).json({message: "Commentaire non créé", error:err})
        }
        res.status(200).json({message: "Commentaire créé avec succès", results})
    })
}