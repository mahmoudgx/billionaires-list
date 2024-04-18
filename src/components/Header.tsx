import { Container, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/" style={{ padding: "0.2rem" }}>
            <Navbar.Brand>
              <img src={logo} alt="logo" width="50px" height="50px" />
            </Navbar.Brand>
          </Link>

          {/* <Form>
      <Form.Control placeholder="Search"></Form.Control>
    </Form> */}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
