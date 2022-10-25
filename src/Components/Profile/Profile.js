import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const Profile = () => {
     const {user} = useContext(AuthContext)
     const [name, setName] = useState(user.displayName)
     const photoURLRef = useRef(user.photoURL)


     const handleSubmit = event =>{
          event.preventDefault();
          console.log(photoURLRef.current.value)

     }



     return (
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Your name</Form.Label>
            <Form.Control type="text" defaultValue={user?.displayName} placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control type="text" ref={photoURLRef} defaultValue={user?.photoURL} placeholder="photo url" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
     );
};

export default Profile;