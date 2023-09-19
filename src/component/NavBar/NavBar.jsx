import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
      <nav className='bar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> 
        <Link to="/users">Users</Link> 
        <Link to="/posts">Posts</Link>
      </nav>
    </div>
  );
};

export default NavBar;