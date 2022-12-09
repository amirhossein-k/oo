import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import Swipper from "./Swipper/Swipper";
import Search from "./Search/Search";
import Cards from "./Cards/Cards";
import "../styles/Home.css";
const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Swipper />
      </Row>
      <Row className="justify-content-center align-items-center g-2 p-3 shadow mt-2 mb-2">
        <Search />
      </Row>
      <Row className="gap-4 fix">
        <Cards />
      </Row>
      <Row>
        <Col lg={6} className="background">
          <div className="ani-back">
            <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1668962705/circle_h6orwc.gif" />
            <div className="car-img">
              <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1668962697/car_z05a6c.png" />
            </div>
          </div>
        </Col>
        <Col lg={6} className="background">
          <div className="contain">
            <div className="time">
              <span className="block">
                شنبه تا چهارشنبه<span>10-10</span>
              </span>
              <span className="block">
                جمعه<span>12-5</span>
              </span>
              <span className="block">
                جمعه<span>10-8</span>
              </span>
            </div>
            <div className="social">
              <div className="box">
                <img src="../public/phone.png" />
                <span>09391470427</span>
              </div>
              <div className="box">
                <img src="" />
                <span>09391470427</span>
              </div>
              <div className="box">
                <img src="" />
                <span>09391470427</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
