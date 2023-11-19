import React from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route, Link, Outlet } from 'react-router-dom'

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  return <div className="bg-amber-600 w-full h-[100vh] whitespace-pre-wrap">
  Once upon a midnight dreary, while I pondered, weak and weary,
  Over many a quaint and curious volume of forgotten lore—
      While I nodded, nearly napping, suddenly there came a tapping,
  As of some one gently rapping, rapping at my chamber door.
  “’Tis some visitor,” I muttered, “tapping at my chamber door—
              Only this and nothing more.”
  
      Ah, distinctly I remember it was in the bleak December;
  And each separate dying ember wrought its ghost upon the floor.
      Eagerly I wished the morrow;—vainly I had sought to borrow
      From my books surcease of sorrow—sorrow for the lost Lenore—
  For the rare and radiant maiden whom the angels name Lenore—
              Nameless here for evermore.
</div>
}

export default function App() {
  return <RouterProvider router={router} />
}