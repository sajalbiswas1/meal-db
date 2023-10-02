import { useEffect, useState } from "react";


const ProductsHome = () => {
    const [product,setProduct]=useState([]);
    const card = product.categories;
    console.log(card)
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    // console.log(product.categories[0].strCategory)
    return (
        <div className="grid grid-cols-4 bg-orange-50">
            <div className="text-center">
                <img src="https:\/\/www.themealdb.com\/images\/category\/lamb.png" alt="" />
                <p className="text-xl font-bold">Lamb</p>
            </div>
            <div className="text-center">
                <img src="https:\/\/www.themealdb.com\/images\/category\/lamb.png" alt="" />
                <p className="text-xl font-bold">Lamb</p>
            </div>
            <div className="text-center">
                <img src="https:\/\/www.themealdb.com\/images\/category\/lamb.png" alt="" />
                <p className="text-xl font-bold">Lamb</p>
            </div>
            <div className="text-center">
                <img src="https:\/\/www.themealdb.com\/images\/category\/lamb.png" alt="" />
                <p className="text-xl font-bold">Lamb</p>
            </div>
            <div className="text-center">
                <img src="https:\/\/www.themealdb.com\/images\/category\/lamb.png" alt="" />
                <p className="text-xl font-bold">Lamb</p>
            </div>
            <div className="text-center">
                <img src="https:\/\/www.themealdb.com\/images\/category\/lamb.png" alt="" />
                <p className="text-xl font-bold">Lamb</p>
            </div>
            <div className="text-center">
                <img src="https:\/\/www.themealdb.com\/images\/category\/lamb.png" alt="" />
                <p className="text-xl font-bold">Lamb</p>
            </div>
            <div className="text-center">
                <img src="https:\/\/www.themealdb.com\/images\/category\/lamb.png" alt="" />
                <p className="text-xl font-bold">Lamb</p>
            </div>
            <div className="text-center">
                <img src="https:\/\/www.themealdb.com\/images\/category\/lamb.png" alt="" />
                <p className="text-xl font-bold">Lamb</p>
            </div>
            <div className="text-center">
                <img src="https:\/\/www.themealdb.com\/images\/category\/lamb.png" alt="" />
                <p className="text-xl font-bold">Lamb</p>
            </div>
            <div className="text-center">
                <img src="https:\/\/www.themealdb.com\/images\/category\/lamb.png" alt="" />
                <p className="text-xl font-bold">Lamb</p>
            </div>
            <div className="text-center">
                <img src="https:\/\/www.themealdb.com\/images\/category\/lamb.png" alt="" />
                <p className="text-xl font-bold">Lamb</p>
            </div>
        </div>
    );
};

export default ProductsHome;