import React from "react";
import styled from "@emotion/styled";
import DetailsContainer from "./Details";

interface PostProps {
  width: number;
  height: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

export const PostContainer = (props: PostProps) => {

  const Post = styled.div`
    width: ${props.width}%;
    height: 0;
    padding-top: 25%;
    background-image: url(${props.image});
    background-size: cover;
    margin: 10px;
  `;

  return ( 
    <Post>
      <DetailsContainer title={props.title} description={props.description} date={props.date}/>
    </Post>
  );
}

export default PostContainer
