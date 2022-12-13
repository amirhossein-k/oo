import { Col } from "react-bootstrap";

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
        <Col key={index}>{item.title}</Col>
      ))}
    </>
  );
};

export default Analytics;
