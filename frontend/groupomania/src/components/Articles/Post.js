import React, { useState, useEffect} from "react";
import { Container, Image } from "react-bootstrap";
import Comment from "../Comments/Comments";


import axios from 'axios';

function Post() {
		 
	const token = sessionStorage.getItem("token");
	const [post, setPost] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3000/api/post", {
			headers: {
				Authorization: "Bearer " + token,
			},
		})
			.then((response) => {
				setPost(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [token]);
  
}


export default Post;