import React, { useState } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';

function Profile() {
   const [isloading, setIsloading] = useState(false);

    if(isloading){
        return(
            <Container style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">
                <Row >
                        <Spinner animation="grow" variant="info" />
                </Row>
            </Container>
        )
    }
    return (
        <Container className="profile_page mt-4">
            <Row className="profile_heding"> 
                <h3 ><span>Pruthviraj</span> Profile</h3>
                <p>Your Profile Display Here</p>
            </Row>
            <Row className="profile mt-2">
               <Col xl="4">
                    <ul>
                        <li>User Id : <span></span></li>
                        <li>First Name : <span></span></li>
                        <li>Last Name : <span></span></li>
                        <li>Email Id : <span></span></li>
                        <li>Phone Number : <span></span></li>
                        <li>Address : </li>
                    </ul>
               </Col>
            </Row>
        </Container>
    )
}

export default Profile