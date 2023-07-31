// React libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components import
import Navbar from "./components/Reusables/Navbar.jsx";
import Footer from "./components/Reusables/Footer.jsx";

import Home from "./pages";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} exact />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
