import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      {/* below: add userinput to ${:num} and ${:breed} or eventlistener like onClick */}
      <NavLink to="/dog/random/:num">Random Dogs</NavLink>
      <NavLink to="/cat/random/:num">Random Cats</NavLink>
      <NavLink to="/dog/:breed">Dog by breed</NavLink>
      <NavLink to="/all/random">Dogs & Cats pics</NavLink>
      <NavLink to="/cat/random">Cat pic</NavLink>
      <NavLink to="/dog/random">Dog pic</NavLink>
    </nav>
  );
};

export default NavBar;
