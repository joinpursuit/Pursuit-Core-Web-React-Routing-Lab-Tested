import { NavLink } from 'react-router-dom';
// import "./NavBar.css";

const NavBar = () => {
    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/Components/RandomCat">Cat</NavLink>
            <NavLink to="/Components/RandomCats">Cats</NavLink>
            <NavLink to="/Components/RandomDogs">Dogs</NavLink>
            <NavLink to="/Components/andomDog">Single Dog</NavLink>
            <NavLink to="/Components/BreedFilter">Choose Breed</NavLink>

        </nav>
    )
}

export default NavBar; 