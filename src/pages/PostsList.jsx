import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


const getPostsUrl = "https://jsonplaceholder.typicode.com/posts"

const users = ['Luca', 'Arianna', 'Lucia', 'Marco', 'Giovanni', 'Carlo', 'Camilla', 'Giulia', 'Lorenzo', 'Laura']

function PostsList() {
  const [postsList, setPostsList] = useState([])

  useEffect(() => {
    axios.get(getPostsUrl)
      .then(res => setPostsList(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h2>Posts List</h2>

      <ul className="container">
        {postsList.map(post => <li key={post.id}>
          <Link to={`/posts/${post.id}`}><h4>{post.title}</h4></Link>
          <p>Autore: {users[post.userId - 1]}</p>
        </li>)}
      </ul>
    </>
  )
}

export default PostsList