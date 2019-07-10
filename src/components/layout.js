import React from "react"
import { Header } from "@components"
import "../style/main.css"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
        {` `}
        JANU ----- <a className="footer-link" href="tel:+37063505572">+37063505572</a> ----- <a className="footer-link" href="mailto:linaluna6@gmail.com">linaluna6@gmail.com</a>
        <br/> <p>Svetaine kūrė: <a className="footer-link mt-2" target="_blank" rel="noopener noreferrer" href="http://www.burlingis.com">Evaldas Burlingis</a></p>
      </footer>
    </div>
  )
}

export default Layout
