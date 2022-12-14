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
import Analytics from "./Analytics";
import Comment from "./Comment";
import Product from "./Product";
import { Col, Row } from "react-bootstrap";

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
    <Container style={{ minWidth: "100%" }}>
      <Row>
        <Col xs={2} sm={2} style={{ paddingLeft: 0 }}>
          <SlideBar />
        </Col>
        <Col xs={10} sm={10} style={{ paddingLeft: 0, paddingTop: 5 }}>
          {/* <Row style={{ height: "100vh" }}> */}
          <Row>
            <Row
              style={{ paddingLeft: 0, paddingRight: 0, height: "max-content" }}
            >
              <Analytics />
            </Row>

            <Row>
              <Comment />
            </Row>
            <Row>
              <Col>
                <Product />
              </Col>
              <Col>
                <Product />
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainDashboard;
