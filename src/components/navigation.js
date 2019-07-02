import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/" className="link-no-style">
        <h1 className="nav--title">Janul Portfolio</h1>
      </Link>
      <ul className="nav--links">
        <li className="nav--links__item">
          <Link to="/" className="link-no-style" activeClassName="active-link">
            /pagrindis
          </Link>
        </li>
        <li className="nav--links__item">
          <Link
            to="/susisiekti"
            className="link-no-style"
            activeClassName="active-link"
          >
            /susisiekti
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
