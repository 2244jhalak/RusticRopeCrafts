import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from './Layout/Root';
import Home from './components/Home/Home';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './provider/AuthProvider';

import ErrorPage from './components/ErrorPage/ErrorPage';
import AllArtAndCraft from './components/AllArtAndCraft/AllArtAndCraft';
import AddCraftItem from './components/AddCraftItem/AddCraftItem';
import MyArtAndCraft from './components/MyArtAndCraft/MyArtAndCraft';
import PrivateRoute from './Routes/PrivateRoute';

// import UserProfile from './components/UserProfile/UserProfile';
// import UpdateProfile from './components/UpdateProfile/UpdateProfile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/all",
        element:<AllArtAndCraft></AllArtAndCraft>,
        loader:()=>fetch('http://localhost:5000/craft')
      },
      {
        path:"/addCraft",
        element:<PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
      },
      {
        path:"/myCraft",
        element:<PrivateRoute><MyArtAndCraft></MyArtAndCraft></PrivateRoute>,
        

      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
     
      
     
      
      // {
      //   path:"/userProfile",
      //   element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      // },
      // {
      //   path:"/updateProfile",
      //   element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      // },
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
