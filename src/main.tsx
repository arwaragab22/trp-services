import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home.tsx';
import Services from './pages/Services.tsx';
import Solutions from './pages/Solutions.tsx';
import Companies from './pages/Companies.tsx';
import Stories from './pages/Stories.tsx';
import Contact from './pages/Contact.tsx';
import "./index.css";

import './i18n';
import ContactPage from './components/Contactus.tsx';
import ERP from './pages/ERP.tsx';
import SoftwareDevelopmen from './pages/SoftwareDevelopmen.tsx';
import Hosting from './pages/Hosting.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/Software Development",
        Component: SoftwareDevelopmen,
      },
      {
        path: "/ERP Systems",
        Component: ERP,
      },
      {
        path: "/Hosting & Servers",
        Component: Hosting,
      },
      {
        path: "/Contact",
        Component: ContactPage,
      },
    ],
  },
]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
