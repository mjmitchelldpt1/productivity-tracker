import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../components/api/config";

type userDisplay = {
  displayUser: string;
};

function Navbar() {
  const [displayUser, setDisplayUser] = useState("User Display");

  return (
    <nav className="shadow-lg bg-gray-900 text-white h-16 ">
      <div className=" flex px-2 mx-2 text-lg font-bold justify-between">
        <Link to="/" className="mx-1">
          Productivity Tracker
        </Link>
        {displayUser}
      </div>

      <div className="flex justify-end">
        <Link to="/" className="navbar-button">
          Home
        </Link>
        <Link to="/about" className="navbar-button">
          About
        </Link>
        <Link to="/test" className="navbar-button">
          Test
        </Link>
        <Link to="/login" className="navbar-button">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
