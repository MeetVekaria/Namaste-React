import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (Just once)
  // if dependency array is [btnName] => called everytime btnName is updated.
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
