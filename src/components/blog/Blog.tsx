import React from 'react'
import PostContainer from './Post';

export const Blog = () => {
return(
  <div>
    <PostContainer 
      width={25} 
      height={25} 
      image={"/img/pic1.jpg"} 
      title={"first title"} 
      description={"first description ever to see the new blog"} 
      date={"21/04/20"}/>
  </div>
)
}
