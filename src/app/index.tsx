import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Wheather App</div>,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
