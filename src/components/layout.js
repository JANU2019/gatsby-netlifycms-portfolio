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
        Janul
      </footer>
    </div>
  )
}

export default Layout
