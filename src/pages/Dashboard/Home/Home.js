import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Tables from "../../components/tables/Tables";
import { Container, Col, Row } from "react-bootstrap";
const Home = () => {
  return (
    <Container
      fluid
      style={{
        minWidth: 100,
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <Row className="home g-0" style={{ marginLeft: 0, marginRight: 0 }}>
        <Col
          className="g-0 flex-basis-0"
          style={{
            paddingRight: 0,
            maxWidth: "100vh",
            paddingLeft: 0,
            mimWidth: "100%",
          }}
          xs={12}
          // sm={1}
          md={2}
          lg={2}
        >
          <Sidebar />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }} className="g-0">
          <div className="homeContainer g-0">
            {/* option  */}
            {/* <Navbar /> */}
            <div className="widgets row">
              <Col md={6} lg={3}>
                <Widgets type="user" />
              </Col>
              <Col md={6} lg={3}>
                {" "}
                <Widgets type="order" />
              </Col>
              <Col md={6} lg={3}>
                <Widgets type="erarning" />
              </Col>
              <Col md={6} lg={3}>
                {" "}
                <Widgets type="balance" />
              </Col>
            </div>
            {/* //charts className */}
            <div className="  row "> 
              <Col xs={12} sm={11} md={4} className="sm-fix">
                <Featured />
              </Col>
              <Col xs={12} sm={11} md={8} style={{maxWidth: '99%'}} className="sm-fix">
                <Chart title={'Last 12 month'} aspect={2 / 1}/>
              </Col>
            </div>
            <div className="row listContainer">
              <Col xs={11}>
                <div className="listTitle"> Last Transcations </div>
                <Tables/>
              </Col>
            </div>
              
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
