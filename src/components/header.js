import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Home</Link>
        </div>

        <div className="navigation">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
