import { useEffect } from "react";
import "../../styles/dashboard/dashboard.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import SlideBar from "../Dashboard/SlideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";


//////////
const MainDashboard = ({ userInfo }) => {
  const dispatch = useDispatch();
  if (!userInfo) {
    return <Navigate to="/" replace />;
  }
  ///////////
 
  ///////////

  // useEffect(() => {}, []);
  const logouthandler = () => {
    dispatch(logout());
  };
  return (
    <SlideBar>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </SlideBar>
  );
};

export default MainDashboard;
