import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../../Context/Authprovider/Authprovider'
import Spinner from 'react-bootstrap/Spinner';

function PrivateRoute({children}) {

  const location = useLocation()


  const {user, loading} = useContext(AuthContext)

  if(loading){
    return  <Spinner animation="border" variant="primary" />
  }


   if(!user){
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
   }
   return children;
}

export default PrivateRoute