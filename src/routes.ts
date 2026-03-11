import { createHashRouter } from "react-router-dom";
import Home from "./app/pages/Home";
import Quiz from "./app/pages/Quiz";
import RestaUm from "./app/pages/RestaUm";

export const router = createHashRouter([
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