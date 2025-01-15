import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Transactions from "./components/Transactions";
import Layout from "./components/Layout";
import MyCard from "./components/MyCard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MyCard /> },
      { path: "/card", element: <MyCard /> },
      { path: "/transactions", element: <Transactions /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
