import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useProfile } from '../Context.Provider';
import { useHistory } from 'react-router';

function Profile() {
   const {profile} = useProfile();
   const History = useHistory();

   if(!profile){
       History.push('/login');
   }

    return (
        <Container className="profile_page mt-4">
            <Row className="profile_heding"> 
                <h3 ><span>{profile.user.firstname} {profile.user.lastname}</span> Profile</h3>
                <p>Your Profile Display Here</p>
            </Row>
            <Row className="profile mt-2">
               <Col xl="4">
                    <ul>
                        <li>User Id : <span> {profile.user._id}</span></li>
                        <li>First Name : <span> {profile.user.firstname}</span></li>
                        <li>Last Name : <span> {profile.user.lastname}</span></li>
                        <li>Email Id : <span> {profile.user.email}</span></li>
                        <li>Phone Number : <span> {profile.user.phone}</span></li>
                        <li>Address : <span> {profile.user.address}</span></li>
                    </ul>
               </Col>
            </Row>
        </Container>
    )
}

export default Profile