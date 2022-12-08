import "./styles.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header/Header";
export default function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
