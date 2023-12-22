import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyActionBar from "./components/MyActionBar";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";
import MyGallery from "./components/MyGallery";

function App() {
	return (
		<div className="App">
			<MyNav />
			<Container fluid className="px-4">
				<MyActionBar />
				<MyGallery title={"harry%20potter"} category={"Harry Potter Saga"} />
				<MyGallery title={"the%20lord%20of%20the%20rings"} category={"The Lord of The Rings Saga"} />
				<MyGallery title={"star%20wars"} category={"Star Wars Saga"} />
				<MyFooter />
			</Container>
		</div>
	);
}

export default App;
