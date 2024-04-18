import { Col, Container, Row } from "react-bootstrap";
import Skeleton from "./Skeleton";
import { useState } from "react";
import useData from "../hooks/useData";
import "./style.css";
import BillionairCard from "./BillionairCard";

const BillionairGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const { data, isLoading } = useData(selectedCategory);
  const Placer = [1, 2, 3, 4, 5, 6];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data?.slice(firstIndex, lastIndex);
  const npage = Math.ceil((data?.length ?? 0) / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const pageWindow = 3;
  const startPage = Math.max(1, currentPage - Math.floor(pageWindow / 2));
  const endPage = Math.min(npage, startPage + pageWindow - 1);

  return (
    <>
      <Col style={{ marginLeft: "2rem" }}>
        <select
          style={{
            padding: "10px",
            fontWeight: "bold",
            marginTop: "2rem",
            textTransform: "uppercase",
            borderRadius: "20px",
          }}
          onChange={(event) => {
            setSelectedCategory(event.target.value);
            setCurrentPage(1);
          }}
          value={selectedCategory}
        >
          <option value="">ALL</option>
          <option value="industries/automotive">AUTOMOTIVE</option>
          <option value="industries/constructionandengineering">
            CONSTRUCTION & ENGINEERING
          </option>
          <option value="industries/diversified">DIVERSIFIED</option>
          <option value="industries/energy">ENERGY</option>
          <option value="industries/fashionandretail">FASHION & RETAIL</option>
          <option value="industries/financeandinvestment">
            FINANCE & INVESTMENTS
          </option>
          <option value="industries/foodandbeverage">FOOD & BEVERAGE</option>
          <option value="industries/gamblingandcasinos">
            GAMBLING & CASINOS
          </option>
          <option value="industries/healthcare">HEALTHCARE</option>
          <option value="industries/logistics">LOGISTICS</option>
          <option value="industries/sports">SPORTS</option>
          <option value="industries/technology">TECHNOLOGY</option>
          <option value="industries/telecom">TELECOM</option>
        </select>
      </Col>

      <div>
        <Row xs={1} md={5} sm={2} className="g-3" style={{ margin: "1rem" }}>
          {isLoading && Placer.map((Placer) => <Skeleton key={Placer} />)}
          {records?.map((Billionair) => (
            <Col key={Billionair.uri} className="p-3">
              {" "}
              <BillionairCard billionair={Billionair} />
            </Col>
          ))}
        </Row>
        <center>
          <Container
            style={{
              justifyContent: "center",
            }}
          >
            <ul
              className="pagination"
              style={{
                position: "unset",
                justifyContent: "center",
                maxWidth: "400px",
              }}
            >
              <li className="page-item">
                {/* <a
              href="#"
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                changeCPage(1);
              }}
              style={{ backgroundColor: "black", color: "white" }}
            >
              First
            </a> */}
              </li>
              <li className="page-item">
                <a
                  href="#"
                  className="page-link"
                  onClick={(e) => {
                    e.preventDefault();
                    prePage();
                  }}
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Prev
                </a>
              </li>
              <li className={`page-item ${currentPage === 1 ? "active" : ""}`}>
                <a
                  href="#"
                  className="page-link"
                  onClick={(e) => {
                    e.preventDefault();
                    changeCPage(1);
                  }}
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  1
                </a>
              </li>
              {/* {currentPage > 1 && currentPage < npage && (
              <li className="page-item">
                <a
                  className="page-link"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  ...
                </a>
              </li>
            )} */}
              {numbers.slice(startPage - 1, endPage).map((n, i) =>
                n > 1 && n < npage ? (
                  <li
                    className={`page-item ${currentPage === n ? "active" : ""}`}
                    key={i}
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    <a
                      href="#"
                      className="page-link"
                      onClick={(e) => {
                        e.preventDefault();
                        changeCPage(n);
                      }}
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      {n}
                    </a>
                  </li>
                ) : null
              )}
              {/* {currentPage <= npage - 1 && (
              <li
                style={{ backgroundColor: "black", color: "white" }}
                className="page-item"
              >
                <a
                  className="page-link"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  ...
                </a>
              </li>
            )} */}
              <li
                style={{ backgroundColor: "black", color: "white" }}
                className={`page-item ${currentPage === npage ? "active" : ""}`}
              >
                <a
                  style={{ backgroundColor: "black", color: "white" }}
                  href="#"
                  className="page-link"
                  onClick={(e) => {
                    e.preventDefault();
                    changeCPage(npage);
                  }}
                >
                  {npage}
                </a>
              </li>
              <li
                className="page-item"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <a
                  style={{ backgroundColor: "black", color: "white" }}
                  href="#"
                  className="page-link"
                  onClick={(e) => {
                    e.preventDefault();
                    nextPage();
                  }}
                >
                  Next
                </a>
              </li>
              <li className="page-item">
                {/* <a
              href="#"
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                changeCPage(npage);
              }}
              style={{ backgroundColor: "black", color: "white" }}
            >
              Last
            </a> */}
              </li>
            </ul>
          </Container>
        </center>
      </div>
    </>
  );
  function changeCPage(id: number) {
    setCurrentPage(id);
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default BillionairGrid;
