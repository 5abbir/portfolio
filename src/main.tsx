import React from "react"
import ReactDOM from "react-dom/client"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import App from "./App"
import Home from "./components/Home"
import Post from "./components/Post"
import PostDetails from "./components/PostDetails"

import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "post",
        element: <Post />,
      },
      {
        path: "posts/:id",
        element: <PostDetails />,
      },
    ],
  },
])

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)









// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
