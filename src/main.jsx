import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import ErrorCatch from './ErrorCatch';
import Home from './component/Home';
import Products from './component/Products';
import About from './component/About';
import Contact from './component/Contact';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import AuthProvider from './component/Provider/AuthProvider';
import PrivetRoute from './component/PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorCatch></ErrorCatch>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/product',
        element: <PrivetRoute><Products></Products></PrivetRoute>
      },
      {
        path:'/about',
        element:<About></About>,
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
