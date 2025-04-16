import { NavLink } from "react-router-dom"


function Navbar() {


  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/posts">Posts</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar