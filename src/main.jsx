import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { MouseFollower } from "react-mouse-follower";

createRoot(document.getElementById("root")).render(
  <>
    <MouseFollower />
    <RouterProvider router={router} />
  </>
);
