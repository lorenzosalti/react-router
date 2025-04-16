import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import PostsList from "./pages/PostsList"


function App() {


  return (
    <BrowserRouter>
      <h1>React Blog Pages</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/posts" element={<PostsList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
