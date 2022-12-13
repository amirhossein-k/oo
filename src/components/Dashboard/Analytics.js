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
        <Col key={index} sm={`${12 / index}`}>
          <Card.Body>
            <Row>
              <Col className="mr-2">
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        50
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="auto">
                <div className="progress progress-sm mr-2">
                  <ProgressBar completed={180} maxCompleted={200} />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      ))}
    </>
  );
};

export default Analytics;
