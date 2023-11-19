import React from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route, Link, Outlet } from 'react-router-dom'

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  return <div className="bg-amber-600 w-full h-[100vh] whitespace-pre-wrap">
  Deep into that darkness peering,
  
  Long I stood there, wondering, fearing,
  
  Doubting, dreaming dreams no mortals
  
  Ever dared to dream before;
  
  But the silence was unbroken,
  
  And the stillness gave no token,
  
  And the only word there spoken
  
  Was the whispered word, "Lenore!"
  
  This I whispered, and an echo
  
  Murmured back the word, "Lenore!"
  
  Merely this, and nothing more.
</div>
}

export default function App() {
  return <RouterProvider router={router} />
}