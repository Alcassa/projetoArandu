import { createBrowserRouter } from "react-router";
import Home from "./app/pages/Home";
import Quiz from "./app/pages/Quiz";
import RestaUm from "./app/pages/RestaUm";

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
  {
    path: "/resta-um",
    Component: RestaUm,
  }
]);