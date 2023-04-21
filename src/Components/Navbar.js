import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
        <nav className="navbar">
            <h1 className='header'>Choose your Pokemon</h1>
            <div className="links">
                <Link to="/">Pokedex</Link>
                <Link to="/About">About</Link>
            </div>
        </nav>
        </header>
    )
}

export default Navbar;