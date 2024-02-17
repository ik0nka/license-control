import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';

function NavBar() {
  return (
    <header className="header">
      <div className="nav-container">
        <h3 className="nav-title">License Control</h3>
        <div className="nav-links">
          <Link to="/logs">Logs</Link>
          <Link to="/users">Users</Link>
          <Link to="/add">Add</Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
