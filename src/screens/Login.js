import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../styles/Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  /////////
  let navigate = useNavigate();
  const dispath = useDispatch();
  /////////
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  //////////
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  /////
  const submithandler = async (e) => {
    e.preventDefault();

    dispath();
  };
  return (
    <Row style={{ marginRight: 0, paddingRight: 0 }}>
      <Col xs={12} sm={6} style={{ padding: 0 }}>
        <div className="carlogin-img">
          <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1670614845/ville-kaisla-HNCSCpWrVJA-unsplash_btb7zd.jpg" />
        </div>
      </Col>
      <Col xs={12} sm={6} style={{ padding: 0 }}>
        {" "}
        <div className="info-login">
          <div className="border-my">
            <input
              placeholder="User Name"
              type="text"
              className="input input-my"
            />
            <input
              placeholder="Password"
              type="password"
              className="input input-my"
            />
            <button
              className="button"
              style={{ padding: "10px 23px", marginTop: 10 }}
            >
              ورود
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Login;
