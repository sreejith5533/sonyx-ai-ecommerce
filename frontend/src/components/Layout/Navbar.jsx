function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          SONYX
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#testNavbar"
          aria-controls="testNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="testNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Television
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Audio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Gaming
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;