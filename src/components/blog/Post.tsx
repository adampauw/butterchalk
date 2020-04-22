import React from "react";
import styled from "@emotion/styled";
import DetailsContainer from "./Details";

interface PostProps {
  title: string;
  date: string;
  image: string;
}

export const PostContainer = (props: PostProps) => {

  const Post = styled.div`
    width: 33%;
    height: 0;
    padding-top: 33%;
    background-image: url(${props.image});
    background-size: cover;
    margin: 10px;
    position: relative;
    transition: opacity .4s ease;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  `;

  return (
    <Post>
        <DetailsContainer title={props.title} date={props.date} />
    </Post>
  );
}

export default PostContainer
