import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta ,dataportfolio2,dataportfolio3,dataportfolio4,dataportfolio5,dataportfolio6,dataportfolio7 } from "../../content_option";
import { Link ,useNavigate ,useParams  } from "react-router-dom";




export const Portfolio = ({ route }) => {

  const navigation = useNavigate();
 
 // const { dataportfolio ,dataportfolio2} = route?.params
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
       
        <div className="mb-5 po_items_ho portfolio-container">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <Link to="/details" className="text_2">View Project</Link>  
                 {/*  <button onPress={() => navigation.navigate(`/details`,{dataportfolio})}>View Project</button>  */}
                </div>
              </div>
            );
          })}
        </div> 

        <div className="mb-5 po_items_ho portfolio-container">
         
         { dataportfolio7.map((data, i) => {
           return (
             <div key={i} className="po_item">
               <img src={data.img} alt="" />
               <div className="content">
                 <p>{data.description}</p>
                 <Link to="/details7" className="text_2">View Project</Link> 
                 {/* <button onPress={() => navigation.navigate(`/details`,{dataportfolio2 })}>View Project</button> */}
               </div>
             </div>
           );
         })}
       </div> 

        <div className="mb-5 po_items_ho portfolio-container">
         
          { dataportfolio2.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <Link to="/details2" className="text_2">View Project</Link> 
                  {/* <button onPress={() => navigation.navigate(`/details`,{dataportfolio2 })}>View Project</button> */}
                </div>
              </div>
            );
          })}
        </div> 

       
       
       <div className="mb-5 po_items_ho portfolio-container">
         
         { dataportfolio4.map((data, i) => {
           return (
             <div key={i} className="po_item">
               <img src={data.img} alt="" />
               <div className="content">
                 <p>{data.description}</p>
                 <Link to="/details4" className="text_2">View Project</Link> 
                 {/* <button onPress={() => navigation.navigate(`/details`,{dataportfolio2 })}>View Project</button> */}
               </div>
             </div>
           );
         })}
       </div> 
       <div className="mb-5 po_items_ho portfolio-container">
         
         { dataportfolio5.map((data, i) => {
           return (
             <div key={i} className="po_item">
               <img src={data.img} alt="" />
               <div className="content">
                 <p>{data.description}</p>
                 <Link to="/details5" className="text_2">View Project</Link> 
                 {/* <button onPress={() => navigation.navigate(`/details`,{dataportfolio2 })}>View Project</button> */}
               </div>
             </div>
           );
         })}
       </div> 
       <div className="mb-5 po_items_ho portfolio-container">
         
         { dataportfolio6.map((data, i) => {
           return (
             <div key={i} className="po_item">
               <img src={data.img} alt="" />
               <div className="content">
                 <p>{data.description}</p>
                 <Link to="/details6" className="text_2">View Project</Link> 
                 {/* <button onPress={() => navigation.navigate(`/details`,{dataportfolio2 })}>View Project</button> */}
               </div>
             </div>
           );
         })}
       </div> 
       <div className="mb-5 po_items_ho portfolio-container">
         
         { dataportfolio3.map((data, i) => {
           return (
             <div key={i} className="po_item">
               <img src={data.img} alt="" />
               <div className="content">
                 <p>{data.description}</p>
                 <Link to="/details3" className="text_2">View Project</Link> 
                 {/* <button onPress={() => navigation.navigate(`/details`,{dataportfolio2 })}>View Project</button> */}
               </div>
             </div>
           );
         })}
       </div> 
       
      
       
       
      </Container>
    </HelmetProvider>
  );
};
