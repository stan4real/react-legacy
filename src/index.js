import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './routes/root';
import Objects from './Components/pages/Objects';
import ComingSoon from './Components/pages/ComingSoon';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[{
      path:"/objects",
    element:<Objects/>
    },
    {
      path:"/room",
    element:<ComingSoon/>
    },
    {
      path:"/users",
    element:<ComingSoon/>
    },
    {
      path:"/drivers",
    element:<ComingSoon/>
    },
    {
      path:"/messages",
    element:<ComingSoon/>
    },
  ],
  },
], 
{basename:'/react-legacy'}
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
