import {
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Placeholder,
} from "react-bootstrap";
// import image from "../assets/png.png";

const Skeleton = () => {
  return (
    <Col className="p-3">
      <Card style={{ border: "none" }}>
        <svg
          className="bd-placeholder-img card-img-top"
          width="270px"
          height="270px"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        {/* <Card.Img variant="top" src={image} /> */}
        <Card.Body>
          <Placeholder as={ListGroup} animation="glow">
            <Placeholder xs={10} as={ListGroupItem} />
            <Placeholder xs={7} as={ListGroupItem} />
            <Placeholder xs={5} as={ListGroupItem} />
          </Placeholder>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Skeleton;
