import React from "react";
import './App.css';
import Layout from "./layout";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import TodoComponent from "./components/to_do";
import Product from "./components/product";

function AppRoutes() {
    const routes = useRoutes(
        [
            {
                path: "/",
                element: <Layout />,
                children: [
                    {
                        path: "todo",
                        element: <TodoComponent />
                    }, {
                        path: "product",
                        element: <Product />
                    }
                ]
            }
        ]
    )
    return routes;
  }

function App() {
    return (
        <div className="App">
                <Router>
                    <AppRoutes />
                </Router>
        </div>
    );
}

export default App;
