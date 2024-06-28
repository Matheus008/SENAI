import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TaskListPage } from './pages/tasks/TaskListPage';
import { TaskFormPage } from './pages/tasks/TaskFormPage';

const routes = createBrowserRouter([
  {
    "path": "/",
    element: <h1>Home</h1>
  }, {
    path: "/tarefas",
    element: <TaskListPage />
  }, {
    path: "/tarefas/:id",
    element: <TaskFormPage />
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <RouterProvider router={routes}>

    </RouterProvider>
  </>
);

