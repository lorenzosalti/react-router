import { Link } from "react-router-dom"

import Navbar from "./Navbar"



function Header() {


  return (
    <header>
      <div className="container">
        <Link to="/"><h1>React Blog Pages</h1></Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header