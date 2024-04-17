import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {
    const currentPage = useLocation().pathname.toLowerCase();
    const [value, setValue] = useState(currentPage);

    useEffect(() => {
        setValue(currentPage);
    });
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ul className="nav" id= "navBox">
            <li className="nav-item">
                <Link
                    to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}
                >About Me</Link>
            </li>
            <li className="nav-item">
                <Link to="/portfolio" className={ currentPage === "/portfolio" ? "nav-link active" : "nav-link"}
                >Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link to="/resume" className={currentPage === "/resume" ? "nav-link active" : "nav-link"}
                >Resume</Link>
            </li>
        </ul>
    );
}

export default Nav;