import { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {
  FaBars,
  FaShoppingBag,
  FaTh,
  FaThList,
  FaUserAlt,
  FaHome,
} from "react-icons/fa";
import { CgLogOff } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../actions/userActions";

const SlideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productlist",
      name: "Product List",
      icon: <FaThList />,
    },
    {
      path: "/",
      name: "Site",
      icon: <FaHome />,
    },
  ];
  ////////
  let navigate = useNavigate();
  const dispatch = useDispatch();
  ///////////
  const logouthandler = () => {
    dispatch(logout());
    navigate("/");
  };
  /////////
  const [heightOutput, setHeightOutput] = useState(null);
  const [widthOutput, setWidthOutput] = useState(null);
  const [expantnav, setExpantnav] = useState(false);
  window.onresize = function () {
    myFunction();
    myFunction2();
  };
  function myFunction() {
    if (window.innerWidth < 976) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  function myFunction2() {
    if (window.innerWidth > 1340) {
      setExpantnav(true);
    } else {
      setExpantnav(false);
    }
  }
  // function resizeListener() {
  //   setHeightOutput(window.innerHeight);
  //   setWidthOutput(window.innerWidth);
  // }

  // window.addEventListener("resize", resizeListener);
  // useEffect(() => {
  //   if (widthOutput < 743) {
  //     toggle();
  //   }
  // }, [isOpen]);

  // console.log(widthOutput, "with");
  //////////////////
  return (
    <div className="containerr" style={{ minHeight: "100vh" }}>
      <div
        className="sidebar"
        style={{
          width: isOpen ? "200px" : "50px",
          minHeight: "100vh",
        }}
      >
        <div className="top_section">
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            Logo
          </h1>
          <div className="bars" style={{ marginLeft: isOpen ? "20px" : "8px" }}>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink href={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              className="link_text"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <Nav.Link
          href="#"
          onClick={logouthandler}
          className="link"
          style={{ justifyContent: "center" }}
        >
          <div className="icon" style={{ padding: " 10px 15px" }}>
            {" "}
            <CgLogOff />
          </div>
        </Nav.Link>
      </div>
      {/* <main>{children}</main> */}
    </div>
  );
};

export default SlideBar;
