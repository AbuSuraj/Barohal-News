import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Profile = () => {
    const {user } = useContext(AuthContext)
    // const [accepted, setAccepted] = useState(false);
    const [name, setName] = useState(user?.displayName);
    const photoURLRef = useRef(user.photoURL);
    console.log(user);
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(photoURLRef, " ", name)
    }
    // const handleAccepted =() =>{}
    const handleNameChange = event =>{
        setName(event.target.value)
    }
    return (
        <div>
                <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control onChange={handleNameChange} defaultValue={name} name="name" type="text" placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formphotoURL">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
        defaultValue={user?.photoURL}
        ref={photoURLRef}
        name="photoURL" type="text" placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        readOnly
        defaultValue={user?.email}
        name="email" type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        name="password"
        placeholder="Password" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        // onClick={handleAccepted}
        type="checkbox" label= {
          <>Accept <Link to={"/terms"}> Terms and Conditions</Link> </>
        }/>
      </Form.Group>

      <Button  variant="primary" type="submit" 
    //    disabled={!accepted}
       >
       Register
      </Button>
      <Form.Text className="text-danger">
        {/* {error} */}
      </Form.Text>
    </Form> 
        </div>
    );
};

export default Profile;