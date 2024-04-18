import { Container } from "react-bootstrap";
import BillionairGrid from "../components/BillionairGrid";

const HomePage = () => {
  return (
    <>
      <Container
        style={{
          backgroundColor: "yellow",
          textAlign: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          maxWidth: "100%",
        }}
      >
        <h3 style={{ color: "#d01010" }}>THE WORLD'S REAL-TIME</h3>
        <h1 style={{ fontWeight: "bold" }}>BILLIONAIRES</h1>
      </Container>
      <BillionairGrid />
      <h2
        style={{
          textAlign: "center",
          backgroundColor: "yellow",
          padding: "1rem",
          fontWeight: "bold",
        }}
      >
        METHODOLOGY
      </h2>
      <Container
        style={{
          maxWidth: "1280px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "white",
            maxWidth: "746px",
            textAlign: "justify",
            fontSize: "20px",
          }}
        >
          Forbes' Real-Time Billionaires rankings tracks the daily ups and downs
          of the world’s richest people. The wealth-tracking platform provides
          ongoing updates on the net worth and ranking of each individual
          confirmed by Forbes to be a billionaire. The value of individuals’
          public holdings are updated every 5 minutes when respective stock
          markets are open (there will be a 15-minute delay for stock prices).
          Individuals whose fortunes are significantly tied to private companies
          will have their net worths updated once a day. In cases where an
          individual owns a stake in a private company that accounts for 20% or
          more of his or her net worth, the value of the company will be
          adjusted according to an industry- or region-specific market index
          provided by our partners at FactSet Research Systems when available. A
          rotating cast of the five biggest winners and losers throughout the
          day is featured at the top of the page, followed by the complete list
          of billionaires ranked in order of net worth.
        </p>
      </Container>
    </>
  );
};

export default HomePage;
