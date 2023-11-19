import React from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route, Link, Outlet } from 'react-router-dom'

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  return <div className="bg-amber-600 w-full h-[100vh]">
  Deployed to main branch
</div>
}

export default function App() {
  return <RouterProvider router={router} />
}