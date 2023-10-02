import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";


const LogIn = () => {
    const {googleLogin,logInEmailPassword}=useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        logInEmailPassword(email,password)
        .then(result =>{
            console.log(result.user)
            if(result.user.email){
                navigate('/')
            }
        })
        .catch(error =>{
            console.log('Login error',error.message)
        })
        console.log('I am submit',email, password)
    }
    const handleGoogleLogin = ()=>
    googleLogin()
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })
    return (
        <div className="w-80 rounded-lg m-auto bg-gradient-to-r from-cyan-300 to-blue-400 ">
            <div className="text-center mt-10 pt-10 w-72 m-auto ">
                <h3 className="text-4xl font-bold mb-3">Please LogIn</h3>
                <form onSubmit={handleLogin}>
                    <input className="border p-2 rounded-lg mb-2 w-72" type="email" name="email" id="" placeholder="Email" /><br />
                    <input className="border p-2 rounded-lg mb-2 w-72" type="password" name="password" id="" placeholder="Password" /><br />
                    <p className="text-left text-xs mb-2 underline">Forgot password?</p>
                    <input className="Border bg-blue-300 w-72 py-2 rounded-md font-bold text-base" type="submit" name="" id="" value="Submit" />
                </form>
                <button onClick={handleGoogleLogin} className=" mt-3 bg-slate-200 w-full py-2 rounded-lg">Google</button>
                <p className="mb-10 mt-4 pb-6">Do not account?  <Link to={'/signup'}><span className="link "> SignUp</span></Link></p>

            </div>
        </div>
    );
};

export default LogIn;