import React from 'react'
import Navbar from '../NavBar/Navbar'
import { Outlet } from 'react-router'

const LayOut = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default LayOut
