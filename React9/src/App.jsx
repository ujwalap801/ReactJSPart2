import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './Components/RootLayout';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Technologies from './Components/Technologies';
import UserProfile from './Components/UserProfile';
import Java from './Components/java';
import Node from './Components/Nodejs';
import Vue from './Components/Vue';

const App = () => {

  // routing configuration
  const broswerRouterObject = createBrowserRouter([
        {
          path:"",
          element:<RootLayout/>,
          children:[
            {
               path:'',
               element:<Home/>
            },
            {
              path:'register',
              element:<Register/>
            },
            {
              path:'login',
              element:<Login/>
            },
            {
              path:'user-profile/:username',
              element:<UserProfile/>

            },
            {
                path:'technologies',
                element:<Technologies/>,
                children:[ 
                 {
                  path:'java',
                  element:<Java/>
                 },
                  {
                    path:'node',
                    element:<Node/>
                  },
                  {
                    path:'vue',
                    element:<Vue/>
                  }
                ]
              }
            
          ]
        }
  ])

  return (
  <RouterProvider router={broswerRouterObject}/>
  )
}

export default App
