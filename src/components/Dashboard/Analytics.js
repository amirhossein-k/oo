import { Card, Col, Row } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
const Analytics = () => {
  const ListAnalyz = [
    {
      title: "مقدار پست",
      icon: "",
      color: "red",
      count: 2,
    },
    {
      title: "سود",
      icon: "",
      color: "blue",
      count: 2,
    },
    {
      title: "ماشین موجود",
      icon: "",
      color: "yellow",
      count: 5,
    },
    {
      title: "فروخته شده در ماه جاری",
      icon: "",
      color: "pink",
      count: 10,
    },
    {
      title: "مقدار بدهی",
      icon: "",
      color: "black",
      count: 50,
    },
  ];
  return (
    <>
      {ListAnalyz.map((item, index) => (
        <Col
          key={index}
          className=" mb-4"
          sm={10}
          xl={4}
          md={6}
          style={{ paddingLeft: 0 }}
        >
          <Row>
            <Col style={{ minWidth: "100%" }}>
              <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                        Tasks
                      </div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                            50%
                          </div>
                        </div>
                        <div className="col">
                          {/* <div className="progress progress-sm mr-2"> */}
                          <ProgressBar completed={180} maxCompleted={200} />
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      ))}
    </>
  );
};

export default Analytics;
