import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const getPostsUrl = "https://jsonplaceholder.typicode.com/posts"


function PostDetail() {

  const { id } = useParams()

  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get(`${getPostsUrl}/${id}`)
      .then(res => {
        console.log(res.data)
        setPost(res.data)
      })
      .catch(err => console.error(err))
  }, [])




  return <div className="container">
    <h2>{post.title}</h2>
    <h4>Autore: {post.userId}</h4>
    <p>{post.body}</p>
  </div>


}


export default PostDetail