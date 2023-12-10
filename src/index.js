import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './routes/root';
import DeviceList from './routes/App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[{
      path:"/objects",
    element:<DeviceList/>
    },
    {
      path:"/room",
    element:''
    },
    {
      path:"/users",
    element:''
    },
    {
      path:"/drivers",
    element:''
    },
    {
      path:"/messages",
    element:''
    },
  ]
  },
  
]);

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
