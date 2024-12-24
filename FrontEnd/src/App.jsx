import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayOut from './Components/LayOut/LayOut'
import Home from './Pages/Home'
import PostCreate from './Pages/PostCreate';
import { ToastContainer, toast } from 'react-toastify';
import Edit from './Pages/Edit';
import View from './Pages/View';


function App() {

    const route = createBrowserRouter(createRoutesFromElements(

        <Route path='/' element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path='/post-create' element={<PostCreate />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/view/:id' element={<View />} />
        </Route>

    ));

    return (
        <>
            <RouterProvider router={route} />
        </>
    )
}

export default App
