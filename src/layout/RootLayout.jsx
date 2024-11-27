import { NavLink, Outlet } from "react-router-dom";
import BreadCrumps from "../components/BreadCrumps";
function RootLayout() {
  return (
    <>
      <header className="flex flex-col justify-around">
        <nav className="flex justify-end items-center w-screen px-8 py-5 m-0">
          <h1 className="text-3xl font-bold">My Articles</h1>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/articles">Articles</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
        <BreadCrumps />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
export default RootLayout;
