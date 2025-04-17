import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

// API url without id parameter
const getPostsUrl = "https://jsonplaceholder.typicode.com/posts"


function PostDetail() {

  // dinamic parameter
  const { id } = useParams()


  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    // API get with dinamic parameter
    axios.get(`${getPostsUrl}/${id}`)
      .then(res => {
        console.log(res.data)
        console.log(id)
        setPost(res.data)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [id])


  if (loading) return <div className="container"><h3>Caricamento in corso...</h3></div>


  return <>
    <div className="container">
      <h2>{post.title}</h2>
      <h4>Autore: {post.userId}</h4>
      <p>{post.body}</p>
    </div>

    <div className="container">
      <Link to={`/posts/${post.id - 1}`}>Post precedente</Link>
      <Link to={`/posts/${post.id + 1}`}>Post successivo</Link>
    </div>
  </>


}


export default PostDetail