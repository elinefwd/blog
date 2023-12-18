import './Navigation.css';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4>Blogposts</h4>

                <ul>
                    <li><NavLink to="/" className={({ isActive}) => isActive? 'activate link' : 'default-link'} >Home</NavLink></li>
                    <li><NavLink to="/newPosts" className={({ isActive}) => isActive? 'activate link' : 'default-link'} >NewPosts</NavLink></li>
                    <li><NavLink to="/overzicht" className={({ isActive}) => isActive? 'activate link' : 'default-link'} >Overzicht</NavLink></li>
                    <li><NavLink to="/error" className={({ isActive}) => isActive? 'activate link' : 'default-link'} >Error</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;