import React from "react";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbarTitle navbarItem" >BlackBird</div>
        <a className="navbarItem" href='/'>Home</a>
        <a className="navbarItem" href="/Species">Species</a>
        <a className="navbarItem" href='/about'>About Us</a>
      </div>
    </div>
  );
}

export default NavBar;
