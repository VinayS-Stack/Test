import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("User");
    navigate("/");
  };

  return (
    <div>
      <button onClick={onLogout}>logout</button>
      <h1>DashBoard Page</h1>
      <nav>
        <Link to="/UserAccounts">UserAccounts</Link>
      </nav>
    </div>
  );
};

export default Home;
