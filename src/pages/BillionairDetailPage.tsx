import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBillionair, { Billionair } from "../hooks/useBillionair";
import noImage from "../assets/no-image-placeholder.webp";
import { Col, Container, Image, Row } from "react-bootstrap";

const BillionairDetailPage = () => {
  const { uri } = useParams();
  const { billionaires, error, isLoading } = useBillionair(
    "/forbes400/getAllBillionaires"
  );
  const [billionaire, setBillionaire] = useState<Billionair | null>(null);

  useEffect(() => {
    if (billionaires.length > 0) {
      const foundBillionaire = billionaires.find((b) => b.uri === uri);
      setBillionaire(foundBillionaire || null);
    }
  }, [billionaires, uri]);

  if (isLoading) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "white" }}>Error: {error}</div>;
  }

  if (!billionaire) {
    return (
      <div style={{ color: "white" }}>
        No billionaire found with the given URI.
      </div>
    );
  }

  return (
    <Container style={{ paddingTop: "2rem" }}>
      <Row xs={1} md={1}>
        <Container
          style={{
            backgroundColor: "white",
            width: "auto",
            borderRadius: "25px",
            padding: "1rem",
          }}
        >
          <Col>
            <center>
              <Image
                src={billionaire.person.squareImage || noImage}
                alt={billionaire.personName}
                roundedCircle
                width={250}
              />
            </center>
            <h1 style={{ color: "black", textAlign: "center" }}>
              {billionaire.personName}
            </h1>
            <p
              style={{
                color: "black",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Rank: {billionaire.rank}
            </p>
            <p
              style={{
                color: "black",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Net Worth: ${billionaire.finalWorth.toFixed(2)} billion
            </p>
            <p
              style={{
                color: "black",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Age: {billionaire.birthDate} Years
            </p>
            <p
              style={{
                color: "black",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Country: {billionaire.countryOfCitizenship}
            </p>
            <p
              style={{
                color: "black",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Source: {billionaire.source}
            </p>
          </Col>
        </Container>
        <Col>
          <p
            style={{
              color: "white",
              fontSize: "30px",
              fontWeight: "bold",
              paddingTop: "2rem",
            }}
          >
            About {billionaire.personName}
          </p>
          <ul>
            {billionaire?.bios?.map((item, idx) => {
              return (
                <>
                  <li
                    style={{
                      color: "white",
                      fontSize: "20px",
                    }}
                    key={idx}
                  >
                    {item}
                  </li>
                </>
              );
            })}
          </ul>
        </Col>
        <Col>
          <p style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>
            Did you know
          </p>
          <ul>
            {billionaire?.abouts?.map((item, idx) => {
              return (
                <>
                  <li style={{ color: "white", fontSize: "20px" }} key={idx}>
                    {item}
                  </li>
                </>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default BillionairDetailPage;
