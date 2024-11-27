import { useFetch } from "../../src/hooks/useFetch";
import { NavLink } from "react-router-dom";
function Articles() {
  const {
    data: articles,
    loading,
    error,
  } = useFetch(
    "https://online-json-server-api.up.railway.app/project/667d0c951d2cd3eb114420fc/articles"
  );
  return (
    <div className="article-container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {articles &&
        articles.data.map((article) => {
          return (
            <div className="card" key={article.id}>
              <h2>Title: {article.title}</h2>
              <p>
                Author: <i>{article.author}</i>
              </p>
              <NavLink to={`/articles/${article.id}`}>Read More</NavLink>
            </div>
          );
        })}
    </div>
  );
}
export default Articles;
    