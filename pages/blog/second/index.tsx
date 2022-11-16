import React from "react";

interface Props {
  text: string;
  handleClick: () => void;
}

const BlogSecond = ({ handleClick, text }: Props) => (
  <div style={{ textAlign: "center" }}>
    <button type="button" onClick={handleClick}>
      {text}
    </button>
    <p>{text}</p>
  </div>
);

export default BlogSecond;
