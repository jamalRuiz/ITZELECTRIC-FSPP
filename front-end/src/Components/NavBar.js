import React from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <div className="Nav">
    <h1 className="logo">Itz Electric ⚡️</h1>
      <h1>
        <Link to="/" className="Link">
          Home
        </Link>
      </h1>
      <h1>
          <Link to="/about" className="Link">
              About
          </Link>
      </h1>
      <h1>
        <Link to="/electric" className="Link">
          Shop Electric
        </Link>
      </h1>
      <h1>
        <Link to="/electric/new" className="Link">
          New Veichle
        </Link>
    </h1>
    </div>
  );
}
