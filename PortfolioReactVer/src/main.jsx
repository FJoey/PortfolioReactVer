import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page_Home from './Page_Home.jsx'
import Page_PortfolioCollection from './Page_PortfolioCollection.jsx'
import Page_InteractiveSection from './Page_InteractiveSection.jsx'
import {createBrowserRouter, RouterProvider, Route,} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Page_Home />,
    },
    {
      path: "/portfoliocollection",
      element: <Page_PortfolioCollection />,
    },
    {
      path: "/interactivesection",
      element: <Page_InteractiveSection />,
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
