import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolioo, meta ,dataportfolioo7 } from "../../data_details";
import { Link ,useNavigate ,useParams  } from "react-router-dom";


export const Details7 = (props) => {

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Details | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Details </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
       
        <div className="mb-5 po_items_ho">
        { (dataportfolioo7.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                 
                </div>
              </div>
            );
          }))}
        </div> 
       
       
      </Container>
    </HelmetProvider>
  );
};
