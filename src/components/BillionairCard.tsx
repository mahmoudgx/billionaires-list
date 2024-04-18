import { Billionair } from "../hooks/useBillionair";
import noImage from "../assets/no-image-placeholder.webp";
import { Card, CardTitle, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BillionairCard.css";

export interface Props {
  billionair: Billionair;
}

const BillionairCard = ({ billionair }: Props) => {
  return (
    <Card className="cardh" style={{ border: "none", height: "510px" }}>
      <Card.Img
        variant="top"
        src={billionair.person.squareImage || noImage}
        style={{
          minHeight: billionair.person.squareImage ? "" : "266px",
        }}
      />
      <Card.Body>
        <Card.ImgOverlay>
          <CardTitle style={{ color: "white", fontSize: "30px" }}>
            #{billionair.rank}
          </CardTitle>
        </Card.ImgOverlay>
        <ListGroup className="pb-2">
          <ListGroup.Item
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              border: "none",
            }}
          >
            <Link
              to={"/billionair/" + billionair.uri}
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              {billionair.personName}
            </Link>
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              border: "none",
            }}
          >
            {billionair.source}
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              border: "none",
            }}
          >
            ${billionair.finalWorth.toFixed(2)} B
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default BillionairCard;
