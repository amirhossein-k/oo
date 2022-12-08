import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import Swipper from "./Swipper/Swipper";
import Search from "./Search/Search";
import Cards from "./Cards/Cards";
const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Swipper />
      </Row>
      <Row className="justify-content-center align-items-center g-2 p-2">
        <Search />
      </Row>
      <Row>
        <Cards />
      </Row>
    </Container>
  );
};

export default Home;
