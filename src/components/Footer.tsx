import { Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          color: "black",
          backgroundColor: "white",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <Col>
          <p
            style={{
              padding: "0",
              margin: "0",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            © 2024. All Rights Reserved.
          </p>
          <p
            style={{
              padding: "0",
              margin: "0",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Developed By Mahmoud Ibrahim
          </p>
        </Col>
      </footer>
    </>
  );
};

export default Footer;
