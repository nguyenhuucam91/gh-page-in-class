import './App.css';

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Homepage from './components/Homepage';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import React from 'react';

//Tạo Layout cho page

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/layout',
    element: <Layout />,
    children: [
      {
        path: 'page1', //không được phép có "/",
        element: <Page1 />
      },
      {
        path: 'page2',
        element: <Page2 />
      },
      {
        path: 'page3/:id',
        element: <Page3 />
      }
    ]
  },
  // {
  //   path: '/page1',
  //   element: <Page1 />
  // },
  // {
  //   path: '/page2',
  //   element: <Page2 />
  // },
  {
    path: '*', //nếu như route ko match với route nào hết
    element: <NotFound />
  }
])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
