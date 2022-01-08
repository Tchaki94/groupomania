import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import jwt_decode from "jwt-decode";

export default function Comment(postContent) {
	const token = sessionStorage.getItem("token");
	const decoded = jwt_decode(token);
	const user_id = decoded.user_id;
	const useradmin = decoded.isadmin;
    const userImg = decoded.image;
    const commentPost = decoded.commentaires;

	/// Import des données des commentaires ////
	const [comments, setComments] = useState([]);
	const isUpdated = postContent.isUpdate;
	useEffect(() => {
		axios.get("http://localhost:3000/api/comments", {
			headers: {
				Authorization: "Bearer " + token,
			},
		})
			.then((response) => {
				setComments(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [token, isUpdated]);

	return (
		<>
			{comments.map((comment, isUpdated) => {
				if (commentPost.post_id === postContent.postContent.id) {
					return (
						<div key={isUpdated} className="comment">
							<hr />
							<div className="comment__area">
								<Image
									src={
										comment.user.userImg
											? `${comment.user.userImg}`
											: "./img/iconprof.png"
									}
									className="comment__avatar"
									roundedCircle
								/>
								<div className="comment__comment">
									<div className="comment__detail">
										<div className="comment__name">
											{comment.user.name}
											<span className="comment__date">
												- posté {comment.date_pub, "FR"}
											</span>
										</div>
										<div className="comment__text">{commentPost.comment}</div>
									</div>
								</div>
							</div>
						</div>
					);
				} else {
					return null;
				}
			})}
		</>
	);
}