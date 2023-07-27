// React libraries
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components import
import Navbar from "./components/Reusables/Navbar.jsx";


import Home from "./pages";
import Team from "./pages/Team.jsx"

function App() {

  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/Team" element={<Team/>}/>


      </Routes>
    </Router>
  )
}

export default App
