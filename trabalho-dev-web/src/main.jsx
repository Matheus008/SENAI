import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ClientListPage } from './pages/clients/ClientListPage';
import { ClientFormPage } from './pages/clients/ClientFormPage';

const routes = createBrowserRouter([
  {
    "path": "/",
    element:
      <div>
        <h1>Home</h1>
        <a href="/clientes" className='btn'>Lista de Clientes</a>
      </div>
  }, {
    path: "/clientes",
    element: <ClientListPage />
  }, {
    path: "/clientes/:id",
    element: <ClientFormPage />
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <RouterProvider router={routes}>

    </RouterProvider>
  </>
);

