import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./layout/navbar.jsx";
import Home from "./pages/home.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddUser from "./users/add-user.jsx";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/adduser' element={<AddUser/>}/>
                </Routes>
            </Router>
        </div>
    )
}
