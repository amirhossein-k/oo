import { Col, Row, Card } from "react-bootstrap";
const LastPost = () => {
  return (
    <Col
      xl={12}
      sm={10}
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        marginRight: 0,
        marginLeft: 0,
      }}
    >
      <div
        className={`card shadow h-100 py-2 border-left-red`}
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          marginRight: 0,
          marginLeft: 0,
        }}
      >
        <div
          className="card-body"
          style={{
            marginRight: 0,
            marginLeft: 0,
          }}
        >
          <div
            className="row no-gutters align-items-center"
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              marginRight: 0,
              marginLeft: 0,
            }}
          >
            <div
              className="col mr-2"
              style={{
                paddingLeft: 0,
                paddingRight: 0,
                marginRight: 0,
                marginLeft: 0,
              }}
            >
              <div
                className="text-xs font-weight-bold text-info text-uppercase mb-1"
                style={{}}
              >
                اخرین پست
              </div>
              <div className="row no-gutters align-items-center">
                <Col
                  sm={12}
                  lg={6}
                  xl={7}
                  style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    marginRight: 0,
                    marginLeft: 0,
                  }}
                >
                  <Card.Img
                    // style={{ paddingLeft: 0, paddingRight: 0 }}
                    src={
                      "https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars3_o3p17a.jpg"
                    }
                    // className="h5 mb-0 mr-3 font-weight-bold text-gray-800 mx-60"
                    // style={{ width: "40%" }}
                  />
                </Col>
                <div
                  className="col"
                  style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    marginRight: 0,
                    marginLeft: 0,
                  }}
                >
                  yhuhuh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default LastPost;
