import React    from 'react'
import ReactDOM from 'react-dom/client'

import Login     from "./routes/Login"
import Dashboard from "./routes/Dashboard"

import './index.css'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
);
