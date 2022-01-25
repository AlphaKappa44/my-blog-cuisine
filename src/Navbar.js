import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Cuisine Web-Book</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New recipe</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;