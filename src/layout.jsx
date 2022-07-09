import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/sass/App.scss";
import Dashboard from "./Views/Dashboard";
import LandingPage from "./Views/LandingPage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Layout = () => {
  return (<BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>);
};

export default Layout;
