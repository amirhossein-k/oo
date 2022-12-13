import { useState } from "react";
import "./styles.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import Login from "./screens/Login";
import MainDashboard from "./components/Dashboard/MainDashboard";
import { useSelector } from "react-redux";
///////////////
export default function App() {
  // const [user, setUser] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  console.log(userInfo);
  return (
    <BrowserRouter>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<MainDashboard user={userInfo} />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
