import React from 'react'
import Favs from './Favs'
import Contact from './Contact'
import Home from './Home'
import Detail from './Detail'
import { Navigate } from 'react-router-dom'

export const childAppRoutes = [
    {
        index: true,
        element: <Navigate to='/home' replace= {true} />
    },
    {
        path: '*',
        element: <Navigate to='/home' replace= {true} />
    },
    {
        path: 'home',
        element: <Home /> 
    },
    {
        path: 'contact',
        element: <Contact /> 
    },
    {
        path: 'favs',
        element: <Favs /> 
    },
    {
        path: 'detail/:id',
        element: <Detail /> 
    }
]
