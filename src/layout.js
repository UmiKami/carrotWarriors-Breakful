import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/sass/App.scss";
import Dashboard from "./Views/Dashboard";
import LandingPage from "./Views/LandingPage";

const Layout = () => {
  return (<BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>);
};

export default Layout;
