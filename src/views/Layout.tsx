import {Link, Outlet} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faUpload} from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li className="nav-left">
              <Link to="/">SoundHub</Link>
            </li>
            <li className="nav-right">
              <Link to="/profile">
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <Link to="/upload">
                <FontAwesomeIcon icon={faUpload} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Copyright 2024 - E.K</p>
      </footer>
    </>
  );
};

export default Layout;
