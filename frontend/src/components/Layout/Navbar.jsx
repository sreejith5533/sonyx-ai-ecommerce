import "../../styles/header.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("access");
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            SONYX
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sonyxNavbar"
            aria-controls="sonyxNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="sonyxNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/tv"
                >
                  Telivisions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/audio"
                >
                  Audio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/gaming"
                >
                  Gaming
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/camera"
                >
                  Cameras
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " nav-link active" : "nav-link"
                  }
                  to="/laptops"
                >
                  Laptops
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " nav-link active" : "nav-link"
                  }
                  to="/accessories"
                >
                  Accessories
                </NavLink>
              </li>
            </ul>
            <div className="btns-div">
              <Link className="icon-btn" to="/user-profile/wishlist">
                <i className="fa-regular fa-heart"></i>
              </Link>
              <Link to="/cart" className="icon-btn">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <Link
                to={token ? "/user-profile" : "/login"}
                className="icon-btn"
              >
                <i className="fa-solid fa-user"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
