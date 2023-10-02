import { Link } from "react-router-dom";
import ProductsHome from "./ProductsHome";

const Home = () => {
    return (
        <div className="w-9/12 m-auto">
            <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/rMXf6Px/lily-banse-YHSwy6uqvk-unsplash.jpg)',height:400 }}>
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-lime-100 font-bold">Osthir Food</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to={'/product'}><button className="btn bg-blue-200">Popular Items</button></Link>
                    </div>
                </div>
            </div>
            <ProductsHome></ProductsHome>
        </div>
    );
};

export default Home;