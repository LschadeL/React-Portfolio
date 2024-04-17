import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/navbar";
import "bulma";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
    return (
        <div id="app">
            <Nav />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;