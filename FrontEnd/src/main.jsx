import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter />
        <App />
    </StrictMode>,
)