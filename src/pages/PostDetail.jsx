import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"

const getPostsUrl = "https://jsonplaceholder.typicode.com/posts"


function PostDetail() {

  const { id } = useParams()

  useEffect(() => {
    axios.get(`${getPostsUrl}/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
  }, [])


  return <h2>Dettaglio del Post {id}</h2>


}


export default PostDetail