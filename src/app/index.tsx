import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LocationPage } from 'src/pages/location'
import { MainPage } from 'src/pages/main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:location',
    element: <LocationPage />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
