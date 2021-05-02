import {NavLink} from 'react-router-dom'
import "./NavBar.css"

const NavBar = ()=>{
    return (
        <nav>
            <NavLink to="/dog/random/:num">Random Dogs</NavLink>
            <NavLink to="/cat/random/:num">Random Cats</NavLink>
            <NavLink to="/dog/:breed">Random Dog by Breed</NavLink>
            <NavLink to="/dog/random">Random Dog</NavLink>
            <NavLink to="/cat/random">Random Cat</NavLink>
        </nav>
    )
}

export default NavBar