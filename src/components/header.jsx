import { useLocation } from "react-router-dom";

export default function Header() {
    let currentPage = useLocation().pathname.charAt(1).toUpperCase().concat(useLocation().pathname.toLowerCase().slice(2));
    
    if (currentPage === "") {
        currentPage = "About Me";
    }
    return (
        <header>
            <h1>{currentPage}</h1>
        </header>
    );
};