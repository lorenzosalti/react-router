import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages import
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import PostsList from "./pages/PostsList"
import PostDetail from "./pages/PostDetail"

// components import
import DefaultLayout from "./layouts/DefaultLayout"


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
