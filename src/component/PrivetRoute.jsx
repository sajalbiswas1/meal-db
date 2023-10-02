import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRoute = ({children}) => {
    const {user}=useContext(AuthContext)
    if(user){
        console.log('currrect user')
        return children
    }
    return <Navigate to={'/login'}></Navigate>

    
};

PrivetRoute.propTypes={
    children: PropTypes.node
}
export default PrivetRoute;