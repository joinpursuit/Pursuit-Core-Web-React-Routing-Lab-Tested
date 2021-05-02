import {NavLink} from 'react-router-dom'
import "./NavBar.css"

const NavBar = ()=>{
    return (
        <nav>
            <NavLink to="/dogs/random/:num">Random Dogs</NavLink>
            <NavLink to="/dog/:breed">Random Dog by Breed</NavLink>
            <NavLink to="/dog/random">Random Dog</NavLink>
        </nav>
    )
}

export default NavBar