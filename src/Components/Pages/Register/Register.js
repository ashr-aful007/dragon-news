import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';

function Register() {
     const {createUser, updateUserProfile, varifyEmail} = useContext(AuthContext)
     const [error, setError] = useState()
     const [accepted, setAccepted] = useState()
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
               handleUserProfile(name, photoURL)
               handleEmailVarification()
               toast.success('please chack your email and varify ')
          })
          .catch(error =>{
              setError(error.message)        
          })
     }

const handleUserProfile = (name, photoURL) =>{
        const profile = {
          displayName: name,
          photoURL: photoURL
        }
           updateUserProfile(profile)
           .then(() => {

           })
           .catch(error =>{
            console.error(error)
           })
}



     const handleAccepted = event =>{
      setAccepted(event.target.checked)
     }

     const handleEmailVarification = () =>{
      varifyEmail()
      .then( () =>{

      })
      .catch(error =>{
        console.log(error)
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
      <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            onClick={handleAccepted}
           label= {<>Accept <Link to='/trams'>Trems and conditions</Link></>} 
          />
        </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
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