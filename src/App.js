import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
