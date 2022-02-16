import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <nav className="headerStyle">
            <Link to='/' className='LinkStyle'> Home </Link>
            <h1 className="welcoming">NetFlix</h1>
        </nav>
    )
}

export default Header; 