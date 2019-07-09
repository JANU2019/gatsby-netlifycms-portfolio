import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav--logo">
          <Link to="/" className="nav--logo__link">
            Janul Portfolio
          </Link>
        </div>
        <div className="nav-links__wrapper">
          <ul className="nav--links">
            <li className="nav--links__item">
              <Link
                to="/"
                className="link-no-style"
                activeClassName="active-link"
              >
                Pagrindinis
              </Link>
            </li>
            <li className="nav--links__item">
              <Link
                to="/susisiekti"
                className="link-no-style"
                activeClassName="active-link"
              >
                Susisiekti
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
