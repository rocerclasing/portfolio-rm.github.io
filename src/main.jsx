import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//context provider
import UserProvider from "../src/context/context.jsx"
//routes
import { router } from './routes/index.jsx';
import { RouterProvider } from 'react-router-dom';


const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <UserProvider>
        <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
