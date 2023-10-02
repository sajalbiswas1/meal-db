import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";


const SignUp = () => {
    const {googleLogin,googleSignUp}=useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        googleSignUp(email,password)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
        console.log(name,email,password)
    }
    const handleGoogleLogin = () =>
        googleLogin()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    return (
        <div className="w-80 rounded-lg m-auto bg-gradient-to-r from-cyan-300 to-blue-400 ">
            <div className="text-center mt-10 pt-10 w-72 m-auto ">
                <h3 className="text-4xl font-bold mb-3">Please SignUp</h3>
                <form onSubmit={handleSubmit}>
                    <input className="border p-2 rounded-lg mb-2 w-72" type="text" name="name" id="" placeholder="Name" /><br />
                    <input className="border p-2 rounded-lg mb-2 w-72" type="email" name="email" id="" placeholder="Email" /><br />
                    <input className="border p-2 rounded-lg mb-2 w-72" type="password" name="password" id="" placeholder="Password" /><br />
                    <input className="Border bg-blue-300 w-72 py-2 rounded-md font-bold text-base" type="submit" name="" id="" value="Submit" />
                </form>
                <button onClick={handleGoogleLogin} className=" mt-3 bg-slate-200 w-full py-2 rounded-lg">Google</button>
                <p className="mb-10 mt-4 pb-6">Already account?  <Link to={'/login'}><span className="link "> Login</span></Link></p>

            </div>
        </div>
    );
};

export default SignUp;