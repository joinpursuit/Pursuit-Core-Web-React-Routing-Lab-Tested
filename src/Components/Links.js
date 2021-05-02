import { Link } from "react-router-dom";


const Links = () => {

    return(
        <section>
        <Link to="/dog/random/:num"></Link>
        <Link to="/dog/random"></Link>
        <Link to="/dog/:breed"></Link>
        <Link to="/cat/random/:num"></Link>
        <Link to="/cat/random"></Link>
        </section>
    )
}

export default Links;