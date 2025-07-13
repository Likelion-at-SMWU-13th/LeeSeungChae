import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CommentPage />,
      },
      {
        path: "/write",
        element: <WritePage />,
      },
      {
        path: "/comment/:id",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
