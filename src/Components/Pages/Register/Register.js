import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';

function Register() {
     const {createUser} = useContext(AuthContext)
     const [error, setError] = useState()
     const handleSubmit = event =>{
          event.preventDefault();
          const from = event.target;
          const email = from.email.value;
          const name = from.email.value;
          const password = from.password.value;
          const photoURL = from.photoURL.value;
          createUser(email, password)
          .then((result)=>{
               const user = result.user;
               console.log(user);
               setError('')
               from.reset();
          })
          .catch(error =>{
              setError(error.message)        
          })
     }

  return (
    <div>   
     <Form onSubmit={handleSubmit}>
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='name' type="text" placeholder="your name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Regester
      </Button>
      <Form.Text className="text-danger">
          {error}
        </Form.Text>
    </Form>
    </div>
  )
}

export default Register