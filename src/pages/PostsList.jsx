import { useState, useEffect } from "react"
import axios from "axios"


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
    <main>
      <h2>Posts List</h2>

      <ul className="container">
        {postsList.map(post => <li key={post.id}>
          <h4>{post.title}</h4>
          <p>Autore: {users[post.userId - 1]}</p>
        </li>)}
      </ul>
    </main>
  )
}

export default PostsList