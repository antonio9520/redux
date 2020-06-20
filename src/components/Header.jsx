import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <Link to="/">
             Home
          </Link>
        </li>
        <li>
          <Link to="/nuevoProducto">
           Nuevo Producto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
