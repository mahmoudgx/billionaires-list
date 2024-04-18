import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import BillionairDetailPage from "./pages/BillionairDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "billionair/:uri", element: <BillionairDetailPage /> },
    ],
  },
]);

export default router;
