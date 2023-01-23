import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MainPage } from 'src/pages/main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
