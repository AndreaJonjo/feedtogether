import { useState } from "react";

export default function ArticleCard({ article }) {
  const initial_numLikes = 0;
  const [likes, set_likes] = useState(initial_numLikes);

  const addLikes = () => {
    console.log("number of likes before", likes);
    return set_likes(likes + 1);
  };

  return (
    <div>
      <div
        style={{
          width: "25%",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <strong>{article.title}</strong>
        <img
          src={article.imgUrl}
          alt={article.summary}
          style={{
            display: "block",
            maxWidth: "100%",
            textAlign: "center",
          }}
        />
        <p>this post has {likes}</p>
        <button onClick={addLikes}>Like this</button>
      </div>
    </div>
  );
}
