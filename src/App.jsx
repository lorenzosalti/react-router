import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages import
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import PostsList from "./pages/PostsList"
import Navbar from "./components/Navbar"

// components import



function App() {


  return (
    <BrowserRouter>
      <h1>React Blog Pages</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/posts" element={<PostsList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
