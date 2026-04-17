import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './routes/routes'
import FriendContextData from './components/context/FriendContextData'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <FriendContextData>
  <ToastContainer />
  <RouterProvider router={router} />
 </FriendContextData>
  </StrictMode>,
)
