import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="bg-cyan-100 py-3">
            <div className="flex justify-between w-9/12 m-auto items-center">
                <h3 className="text-3xl font-bold text-pink-600 shadow-slate-500 px-3 py-1 rounded-md ">WebSite</h3>
                <div>
                    <NavLink to={'/'}><button className="text-base bg-slate-300 hover:bg-slate-400 px-4 py-1  rounded-md mr-2">Home</button></NavLink>
                    <NavLink to={'/product'}><button className="text-lg-text-base bg-slate-300 hover:bg-slate-400 px-4 py-1  rounded-md mr-2">Product</button></NavLink>
                    <NavLink to={'/about'}><button className="text-base bg-slate-300 hover:bg-slate-400 px-4 py-1  rounded-md mr-2">About</button></NavLink>
                    <NavLink to={'/contact'}><button className="text-base bg-slate-300 hover:bg-slate-400 px-4 py-1  rounded-md mr-2">Contac Us</button></NavLink>
                </div>
                <div>
                    <Link to={'/login'}><button className="text-2xl text-indigo-700 font-bold drop-shadow-md px-2 rounded-lg">LogIn</button></Link>
                    <Link to={'/signup'}><button className="text-2xl text-green-700 font-bold drop-shadow-md px-2 rounded-lg">SignUp</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;