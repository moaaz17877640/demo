
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import './App.css';
import Home from './pages/hoom/Home';
import { Fragment } from 'react';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';

import ContactUs from './pages/contactus/ContactUs';


const Layout = ()=>{
  return(
    <Fragment>
    <Header />
    <ScrollRestoration />
    <Outlet />
    <Footer />
  </Fragment>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/contact",
          element:<ContactUs/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
