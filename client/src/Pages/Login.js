import React,{ useState } from 'react'
import axios from 'axios';
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setloading] = useState(false);

    const [user,setUser] = useState({
        email:'',
        password:'',
    });
    const LOGIN = [
        {
            name:'email',
            value:user.email,
            type:'email',
            text:'Enter Your Email'
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
    const login = async (e)=>{
        e.preventDefault();
    }

    return (
        <Container className="mt-4 account_form">
            <Row id="account_heading">
                <h3>Login Now</h3>
                <p>Login your self</p>
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
                {LOGIN.map(item =>(
                    <Row key={item.text}>
                        <Col xl={6}>
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
                        </Col>
                    </Row>
                    ))
                }
                <Row>
                    <Col xl={6} className="account_button text-center mt-2">
                        <p>Forgot Password? <Link to="/signup">Here.</Link></p>
                        <Button type="submit" onClick={login} disabled={!user.email}>{loading ? 'Processing...' : 'Login Now'}</Button>
                        <p>You are Not Register,Please <Link to="/">Register Here.</Link></p>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Login