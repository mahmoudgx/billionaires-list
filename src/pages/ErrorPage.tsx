import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Header />
      <Container style={{ padding: "2rem" }}>
        <h1 style={{ color: "white" }}>Oops</h1>
        <p style={{ color: "white" }}>
          {isRouteErrorResponse(error)
            ? "This Page does not exist."
            : "An unexpected error occurred."}
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default ErrorPage;
