import "./styles.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import Login from "./screens/Login";
import MainDashboard from "./components/Dashboard/MainDashboard";
export default function App() {
  return (
    <BrowserRouter>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="dashboard" element={<MainDashboard />} /> */}
          <Route path="/api/login" element={<Login />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
