import { Card, Col, Row } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
const Analytics = () => {
  const ListAnalyz = [
    {
      title: "مقدار پست",
      icon: "fa-solid fa-file-lines",
      color: "red",
      count: 2,
    },
    {
      title: "سود",
      icon: "fa-solid fa-scale-balanced",
      color: "blue",
      count: 2,
    },
    {
      title: "ماشین موجود",
      icon: "fa-solid fa-truck-monster",
      color: "yellow",
      count: 5,
    },
    {
      title: "فروخته شده در ماه جاری",
      icon: "fa-sharp fa-solid fa-cart-shopping",
      color: "pink",
      count: 10,
    },
    {
      title: "مقدار بدهی",
      icon: "fa-sharp fa-solid fa-dollar-sign",
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
              <div
                className={`card shadow h-100 py-2 border-left-${item.color}`}
              >
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                        {item.title}
                      </div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                            {item.count}
                          </div>
                        </div>
                        <div className="col">
                          <ProgressBar completed={item.count} />
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className={`fa-2x text-gray-300 ${item.icon} `}></i>
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
