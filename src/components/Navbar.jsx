import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      
      {/* Logo */}
      <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
        <img
          src="/favicon.png"   // put logo in public folder
          alt="Logo"
          width="35"
          height="35"
        />
        <span className="fw-bold"> Student Management System</span>
      </Link>

      {/* Toggle button (mobile) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Links - NOT pushed to end */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-4 gap-3">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link  className="nav-link" to="/data">
              Student Data
            </Link>
          </li>

          <li className="nav-item">
            <Link  className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;
