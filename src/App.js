import { useState } from "react";
import "./styles.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import Login from "./screens/Login";
import MainDashboard from "./components/Dashboard/MainDashboard";
import { useSelector } from "react-redux";
import SlideBar from "./components/Dashboard/SlideBar";
import About from "./components/Dashboard/About";
import ProtectedRoute from "./components/porotect/ProtectedRoute";
///////////////
export default function App() {
  // const [user, setUser] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  console.log(userInfo);
  return (
    // <BrowserRouter>
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home userInfo={userInfo} />} />
        <Route element={<ProtectedRoute userInfo={userInfo} />}>
          <Route
            path="dashboard"
            element={<MainDashboard userInfo={userInfo} />}
          />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Container>
    //   </BrowserRouter>
  );
}
