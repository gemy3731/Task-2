import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import Transactions from "./components/Transactions";
import Layout from "./components/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Card /> },
      { path: "/card", element: <Card /> },
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
