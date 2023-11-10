import {
    createBrowserRouter,
  } from "react-router-dom";

import Layout from '../pages/Layout/Layout';
import Home from '../pages/Home';
import SubmitForm from '../pages/SubmitForm';
import Search from '../pages/Search';
import BookDetail from "../pages/BookDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path:"/books/:id",
                element:<BookDetail/>
            },
            {
                path: "/create",
                element: <SubmitForm />
            },
            {
                path: "/edit/:id",
                element: <SubmitForm />
            },
            {
                path: "/search",
                element: <Search />
            }
        ]
    },
]);

export default router
  
  