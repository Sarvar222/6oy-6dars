import { Link, useLocation } from "react-router-dom";
function BreadCrumps() {
  const location = useLocation();
  const currentLink = [];
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb != "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink.join("")}>{crumb}</Link>
        </div>
      );
    });
  return (
    <div className="breadcrumbs flex justify-start items-start m-0 my-5 mx-8">
      {crumbs}
    </div>
  );
}
export default BreadCrumps;
