import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/dog/random">Random Dog</NavLink>
            <NavLink to="/dog/random/:num">Num Random Dog</NavLink>
            <NavLink to="/dog/breed">Dog Breed</NavLink>
            <NavLink to="/cat/random">Cat Random</NavLink>
            <NavLink to="/cat/random/:num">Num Random Cat</NavLink>
        </nav>
    )
}

export default NavBar;