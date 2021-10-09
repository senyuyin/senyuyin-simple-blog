import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">HotCoffee</div>
      <div className="tool">
        <div className="search">
          <FontAwesomeIcon className="search-icon" icon="search" />
          <input className="search-input" type="text" placeholder="Search..." />
        </div>

        <ul className="menu">
          <li className="menu-item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link className="link" to="/article">
              Articles
            </Link>
          </li>
        </ul>

        <div className="social">
          <FontAwesomeIcon
            className="social-item"
            icon={["fab", "instagram"]}
          />
          <FontAwesomeIcon className="social-item" icon={["fab", "twitter"]} />
          <FontAwesomeIcon className="social-item" icon={["fab", "linkedin"]} />
        </div>
      </div>
    </div>
  );
}
