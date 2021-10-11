const connection = require('../db/connection');

const Comment = function (comment) {
    this.id = comment.id ? comment.id : null;
    this.date_pub = post.date_pub ? post.date_pub : null;
    this.user_id = post.user_id ? post.user_id : null ;
    this.post_id = comment.post_id ? comment.post_id : null;
    this.comment = comment.comment ? comment.comment : null;
}

Comment.createComment = (newComment, callback) => {

    connection.query('INSERT INTO commentaires (user_id, post_id, comment) VALUES (?,?,?)', [newComment.user_id, newComment.post_id, newComment.comment], (err, res) => {
        if (err){
            throw err
        }
        console.log(res);
        callback(null, {id: res.insertId, ...newComment})
    }) 
}
    

module.exports = Comment;