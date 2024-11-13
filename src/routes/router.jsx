import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
    {
      path: "/news",
      element: <div>news layout</div>,
    },
    {
      path: "auth",
      element: <div>login</div>,
    },
    {
      path: "*",
      element: <div>error</div>,
    },
  ]);
  

export default router;