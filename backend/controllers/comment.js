const database = require ('../db/connection');
const Comment = require('../models/comment');

exports.createComment = (req, res, next) => {

    const user_id = req.body.user_id;
    const post_id = req.body.post_id;
    const comment = req.body.comment;

    Comment.createComment({
        user_id,
        post_id,
        comment
    }, (err, data) => {
        if (err) {
            return res.status(500).send({message:  erro.message})
        }
        return res.status(200).send(data)
    })
}