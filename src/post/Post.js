import React, { useContext } from "react";
import { ThemeContext } from "../contexts";

function Post({ title, content, author }) {
  console.log("redering post");
  const { secondaryColor } = useContext(ThemeContext);
  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
       
      </i>
    </div>
  );
}

export default React.memo(Post);
