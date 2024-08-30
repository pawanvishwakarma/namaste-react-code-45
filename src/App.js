import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Cart from './components/Cart';
import RestaurentMenu from './components/RestaurentMenu';
import UserContext from './utils/UserContext';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
// import Grocery from './components/Grocery';

const Grocery = lazy(()=> import('./components/Grocery'));
const About = lazy(()=> import('./components/About'));



const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(()=> {
        const data = {
            name: "Pawan"
        }
        setUserName(data.name)
    }, [])

    return (
        <Provider store = {appStore}>
        <UserContext.Provider value={{loggedUser:userName, setUserName}}>
        <div className='app'>
           
         <Header />
        
         <Outlet />
         
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>} >
                        <About />
                    </Suspense>)
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (
                <Suspense fallback={<h1>Loading...</h1>} >
                    <Grocery />
                </Suspense>)
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurents/:resId",
                element: <RestaurentMenu />
            }
        ],
        errorElement: <Error />
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)