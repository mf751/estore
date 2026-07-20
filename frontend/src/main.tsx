import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { StoreProvider } from "./store.tsx";
import ThemeProvider from "./themProvider.tsx";
import { CssBaseline } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./pages/home.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="laptops" element={<h1>h</h1>} />
      <Route path="pc" element={<HomePage />} />
      <Route path="networkdevices" element={<HomePage />} />
      <Route path="printers_scanners" element={<HomePage />} />
      <Route path="pc_parts" element={<HomePage />} />
      <Route path="others" element={<HomePage />} />
      <Route path="repairs" element={<HomePage />} />
    </Route>,
  ),
);
createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <ThemeProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StoreProvider>,
);
