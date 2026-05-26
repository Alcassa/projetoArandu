import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <Toaster
        theme="dark"
        position="top-right"
        richColors
        closeButton
      />

      <RouterProvider router={router} />
    </>
  )
}
