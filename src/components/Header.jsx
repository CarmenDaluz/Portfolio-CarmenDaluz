import { Link } from "react-router-dom";
import './Header.css'

function Header () {

    return (
        <header>
            <nav className='nav'>
                <ul className='ul'>

                    <li><Link to="/">Home</Link> </li>

                    <li><Link to="/aboutme">About me </Link> </li>

                    <li><Link to="/projects">Projects</Link> </li>

                    <li><Link to="/contact">Contact</Link> </li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header;