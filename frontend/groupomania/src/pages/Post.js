import { BrowserRouter as Router, Route } from "react-router-dom";
import Post from "../components/Articles/Post";

function Posts() {
	return (
		<Router>
			<Route path="/post/:id">
			< Post />
			</Route>
		</Router>
	);
}

export default Posts;