import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="shadow-lg bg-gray-900 text-white h-16 ">
      <div className=" px-2 mx-2 text-lg font-bold">
        <Link to="/" className="mx-1">
          Productivity Tracker
        </Link>
      </div>

      <div className="flex justify-end">
        <Link to="/" className="navbar-button">
          Home
        </Link>
        <Link to="/about" className="navbar-button">
          About
        </Link>
        <Link to="/login" className="navbar-button">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
