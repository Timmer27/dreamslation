import React from "react";
import "./App.css";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Layout from "./layout/Layout";
import GlobalStyle from "./styles/globalStyle";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/test",
        element: <div>test???</div>,
        // loader: teamLoader,
      },
    ],
  }
]);

function App() {
  return (
    <div>
      <GlobalStyle />
      <RouterProvider router={router} />
      <Outlet />
    </div>
  );
}

export default App;
