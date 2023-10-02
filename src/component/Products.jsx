import { useContext } from "react";
import ProductsHome from "./ProductsHome";
import { AuthContext } from "./Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const {user}=useContext(AuthContext)
    const navigate = useNavigate()
    if(!user){
        return navigate('/login')
    }
    return (
        <div>
            <ProductsHome></ProductsHome>
        </div>
    );
};

export default Products;