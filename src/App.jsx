import './App.css'
import logo from './assets/logo-white.png';
import Home  from './pages/home/home.jsx';
import NewPosts from "./pages/newPosts/newPosts.jsx";
import Overzicht from "./pages/overzicht/overzicht.jsx";
import Error from "./pages/error/error.jsx";
import {Routes, Route, NavLink} from 'react-router-dom';
import Navigation from "./components/navigation.jsx";
import OverzichtBlogs from "./components/overzichtBlogs/overzichtBlogs.jsx"

function App() {
    return (
<>
        <Navigation />

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/NewPosts" element={<NewPosts/>}/>
        <Route path="/Overzicht" element={<Overzicht/>}/>
        <Route path="/Error" element={<Error/>}/>
        <Route path="/Overzicht:id" element={<Blogid/>} />
    </Routes>

        <div className="page-container">
            <img src={logo} alt="Company logo"/>


        </div>
</>
    )

}

export default App
