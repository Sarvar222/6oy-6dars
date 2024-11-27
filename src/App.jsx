import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Articles from "../pages/articles/Articles";
import Faq from "../pages/help/Faq";
import Form from "../pages/help/Form";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ErrorPage from "../pages/help/ErrorPage";
import ArticlesLayout from "./layout/ArticlesLayout";
import ArticleDetails from "../pages/articles/ArticleDetails";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <ContactLayout />,
          children: [
            {
              path: "faq",
              element: <Faq />,
            },
            {
              path: "form",
              element: <Form />,
            },
          ],
        },
        {
          path: "articles",
          element: <ArticlesLayout />,
          children: [
            {
              index: true,
              element: <Articles />,
            },
            {
              path: ":id",
              element: <ArticleDetails />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}
export default App;
