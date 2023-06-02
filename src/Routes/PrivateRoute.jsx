import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';



const PrivateRoute = ({children}) => {

    const location = useLocation();
    console.log(location)
    
    const {loading , user} = useContext(AuthContext);
    if(loading) {
        return <div>Loading ....</div>
    }
    if(user) {
        return children
    }
    return <Navigate state={{from: location}}  to='/myAccount' replace></Navigate>

    
};

export default PrivateRoute;