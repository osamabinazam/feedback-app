import React from 'react'
import { useParams } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom';

function Post() {
    const status = 200;
    if (status === 404 ){
        <Navigate to='not found' ></Navigate>
    }

    const param = useParams();
    const navigate =  useNavigate();
    const onClick = () =>{
        <p>Redirecting to about page</p>
        navigate('/about')

    }
  return (
    <div>
      <h2>Post</h2>
      <h4>id: {param.id}</h4>
      <h4>Name: {param.name} </h4>
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default Post
