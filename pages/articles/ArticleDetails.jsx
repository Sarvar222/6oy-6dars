import { useParams } from "react-router-dom";
import { useFetch } from "../../src/hooks/useFetch";
function ArticleDetails() {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data: article, error, isPending } = useFetch(url);
  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {article && (
        <>
          <img src={article.image} alt={article.title} height="300" />
          <h2>Title: {article.title}</h2>
          <p>
            Author: <i>{article.author}</i>
          </p>
          <p>{article.body}</p>
        </>
      )}
    </div>
  );
}
export default ArticleDetails;
