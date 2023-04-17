import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { UserContext } from '../../UserContext'
import Alert from 'react-bootstrap/Alert'

function LoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [Logged, setLogged] = useState(true)
    const msg = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')
        setIsLoggedIn(true)
    }

    const login = () => {
        setIsLoggedIn(true)
    }
    const logout = () => {
        setIsLoggedIn(false)
    }

    function Click() {
        setLogged(false)
        setIsLoggedIn(true)
    }

    const form = (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={Click} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

    const submitted = (
        <Alert variant="success">Thank you for logging in! we will respond shortly</Alert>
    )

    return (
        <div id="form">
            <div id="form1">
                <span>{Logged ? form : submitted}</span>

                <h4>person is: {isLoggedIn ? 'logged in' : 'logged out'}</h4>
            </div>
        </div>
    )
}

export default LoggedIn
