import { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";

export default function HomePage() {
  const [articles, set_articles] = useState([]);

  useEffect(() => {
    const data = async () => {
      console.log("here we start searching ");

      const news = await axios.get(
        `https://spaceflightnewsapi.net/api/v2/articles?_limit=20`
      );
      set_articles(news.data);
    };

    data();
  }, []);

  console.table(articles);
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Articles of the day</h1>

      {articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </div>
  );
}
