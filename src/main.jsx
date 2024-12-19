import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import "@smastrom/react-rating/style.css";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./providers/AuthProviders";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProviders>
  </StrictMode>
);
