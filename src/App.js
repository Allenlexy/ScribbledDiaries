import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostList from "./PostList";
import Footer from "./components/Footer";
import Header from "./Header";
import PostDetails from "./PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="app">
        <Header />
        <PostList />
        <br />
        <Footer />
      </div>
    ),
  },

  {
    path: "/posts/:postId",
    element: <PostDetails />,
  },
]);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;
