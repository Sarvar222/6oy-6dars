import { Outlet } from "react-router-dom";
function ArticlesLayout() {
  return (
    <div>
      <h1>My Articles</h1>
      <hr />
      <Outlet />
    </div>
  );
}
export default ArticlesLayout;
