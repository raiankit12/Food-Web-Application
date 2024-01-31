import React, { lazy,Suspense, useContext, useEffect, useState } from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContex';
// import Grocery from './components/Grocery';

const Grocery=lazy(()=>import("./components/Grocery"))
const AppLayout=()=>
{
    // const {loggedInUser}=useContext(UserContext);

    const [Username, setUsername]=useState();

    useEffect(()=>{
    data={
        name:"ankit"
    };

    setUsername(data.name);
    },[])

    return(
        <UserContext.Provider value={{loggedInUser:Username,setUsername}}>
    <div className="App" >
    {/* <UserContext.Provider value={{loggedInUser:"elon musk"}}> */}
   <Header />
   {/* </UserContext.Provider> */}
   <Outlet/>
    </div>
    </UserContext.Provider>
   

    )
}

const appRouter= createBrowserRouter([

    {
        path:"/",
        element:<AppLayout />,
        children:
            [

            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/About",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                    <About/>
                    </Suspense>,
            },
            {
                path:"/Contact",
                element:<Contact/>,
            },
            {
                path:"/Grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                    </Suspense>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            }
            ,
        ]
       ,

        errorElement:<Error />,
    },
    
]
)



const root= ReactDOM.createRoot(document.getElementById('root'));


root.render(<RouterProvider router={appRouter}/>)


