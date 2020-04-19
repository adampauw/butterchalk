import React from "react";
import styled from "@emotion/styled";

interface ArticleProps {
  width: number;
  height: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

export const Article = (props: ArticleProps) => {

  const Article = styled.div`
    
  `;

  return ( 
    <Article>
      <Title/>
    </Article>
  );
}

export default Article
