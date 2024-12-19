import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { MouseFollower } from "react-mouse-follower";
import Context from "./context/context";

createRoot(document.getElementById("root")).render(
  <>
    <MouseFollower />
    <Context>
      <RouterProvider router={router} />
    </Context>
  </>
);
