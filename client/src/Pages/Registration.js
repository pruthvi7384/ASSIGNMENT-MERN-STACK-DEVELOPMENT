import React, { useState } from 'react'
import axios from 'axios';
import { Col, Container, Form, Row, Button, Alert, FloatingLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Registration() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setloading] = useState(false);
    
    const [user,setUser] = useState({
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        address : '',
        password: ''
    });
    const REGISTER = [
        {
            name:'firstname',
            value:user.firstname,
            type:'text',
            text:'Enter Your First Name'
        },
        {
            name:'lastname',
            value:user.lastname,
            type:'text',
            text:'Enter Your Last Name'
        },
        {
            name:'email',
            value:user.email,
            type:'email',
            text:'Enter Your Email Id'
        },
        {
            name:'phone',
            value:user.phone,
            type:'number',
            text:'Enter Your Phone Number'
        },
        {
            name:'address',
            value:user.address,
            type:'text',
            text:'Enter Your Address'
        },
        {
            name:'password',
            value:user.password,
            type:'password',
            text:'Enter Your Password'
        }
    ]
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setUser({...user, [name]:value});
    }
    const register = async (e)=>{
        e.preventDefault();
    }
    return (
        <Container className="mt-4 account_form">
            <Row id="account_heading">
                <h3>Registre Now</h3>
                <p>Register your self</p>
            </Row>
            <Form className="account_form_body mt-2">
                { 
                show ?
                    <Alert variant="info" onClose={() => {
                        setShow(false);
                    }
                    } dismissible>
                    <p className='text-center'>{message}</p>
                    </Alert>
                    :
                    ''
                }
                {REGISTER.map(item =>(
                    <Row key={item.text}>
                        <Col xl={6}>
                        {
                            item.name !== 'address'
                            ?
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                    name={item.name}
                                    type={item.type}
                                    value={item.value}
                                    onChange={inputHandler}
                                    placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInputCustom">{item.text}</label>
                                </Form.Floating>
                            :
                            <FloatingLabel className="mb-3" controlId="floatingTextarea2" label={item.text}>
                                <Form.Control
                                name={item.name}
                                type={item.type}
                                value={item.value}
                                onChange={inputHandler}
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '150px' }}
                                />
                            </FloatingLabel>
                        }
                        </Col>
                    </Row>
                    ))
                }
                <Row>
                    <Col xl={6} className="account_button text-center mt-2">
                        <Button type="submit" onClick={register} disabled={!user.email}> {loading ? 'Processing...' : 'Register Now' }</Button>
                        <p>You are Alrady Register,Please <Link to="/login">Login Here.</Link></p>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Registration