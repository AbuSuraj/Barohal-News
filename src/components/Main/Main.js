import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/SharedPage/Footer/Footer';
import Header from '../../Pages/SharedPage/Header/Header';
import LeftSideNav from '../../Pages/SharedPage/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Pages/SharedPage/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
         <Container>
            <Row>
                <Col className='d-none d-lg-block' lg="2">
                  <LeftSideNav></LeftSideNav>
                  </Col>
                <Col lg="7">
                 
                <Outlet></Outlet>  
                </Col>
                <Col lg="3">
                <RightSideNav></RightSideNav>
                </Col>
            </Row>
         </Container>
         <Footer></Footer>
        </div>
    );
};

export default Main;