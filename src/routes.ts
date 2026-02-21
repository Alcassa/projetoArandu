import { createBrowserRouter } from "react-router";
import Home from "./app/pages/Home";
import Quiz from "./app/pages/Quiz";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/quiz",
    Component: Quiz,
  },
]);