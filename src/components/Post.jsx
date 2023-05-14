import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {

    const param = useParams();
  return (
    <div>
      <h2>Post</h2>
      <h4>id: {param.id}</h4>
      <h4>Name: {param.name} </h4>
    </div>
  )
}

export default Post
