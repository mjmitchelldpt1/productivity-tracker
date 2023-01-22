import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../components/api/config";

type userDisplay = {
  displayUser: string;
};

function Navbar() {
  const [displayUser, setDisplayUser] = useState(null);

  async function retrieveUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      setDisplayUser(user.email);
    } else {
      setDisplayUser(null);
    }
  }
  supabase.auth.onAuthStateChange((event, session) => {
    if (session) {
      retrieveUser();
    }
  });

  async function handleLogout() {
    let { error } = await supabase.auth.signOut();
    setDisplayUser(null);
    if (error) {
      console.log(error);
    }
  }

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
        <button onClick={handleLogout} className="navbar-button">
          LogOut
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
