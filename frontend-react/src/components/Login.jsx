import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../AuthProvider.jsx";

const Login = () => {

    const loginData = {
        username:"",password:""
    }
    const [formLoginData,setFormLoginData] = useState(loginData);

    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const [error,setError] = useState('')

    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)

    const handleForm = (e) =>{
        const {name,value} = e.target
        setFormLoginData(
            prev => ({...prev,[name]: value})
        )
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("userdata ==>", formLoginData)
        setLoading(true)

        try{
            const response = await axios.post("http://127.0.0.1:8000/api/v1/token/",formLoginData)
            localStorage.setItem('accessToken', response.data.access)
            localStorage.setItem('refreshToken', response.data.refresh)
            console.log('Login successful')
            setIsLoggedIn(true)
            navigate('/')
        }catch(err){
            console.error(err)
            setError('Invalid credentials')
            setTimeout(() => setError(''),3000)

        }finally {
            setLoading(false)
        }


        setFormLoginData(loginData)
    }

    return(
       <>
         <div className="container">
             <div className="row justify-content-center">
                 <div className="col-md-6 bg-light-dark p-5 rounded">
                     <h3 className="text-light text-center mb-4">Login to our portal</h3>
                     <form onSubmit={handleLogin}>
                         <div className="mb-3">
                             <label htmlFor="username" className="text-light">
                                 Username
                             </label>
                             <input type="text"
                                    className="form-control"
                                    placeholder="Enter username"
                                    onChange={(e) => handleForm(e)}
                                    name="username"
                                    value={formLoginData.username}
                                    />
                         </div>
                         <div className="mb-3">
                             <label htmlFor="password" className="text-light">
                                 Password
                             </label>
                             <input type="password"
                                    className="form-control"
                                    placeholder="Set password"
                                    onChange={(e) => handleForm(e)}
                                    name="password"
                                   value={formLoginData.password}
                             />
                         </div>
                         {error && <div className='text-danger'>{error}</div>}

                         {loading ? (<button type="submit"
                                 className="btn btn-info d-block mx-auto" disabled><FontAwesomeIcon icon={faSpinner} spin />Logging in...</button>) :
                             (<button type="submit"
                                 className="btn btn-info d-block mx-auto">Login</button>)
                         }
                     </form>
                 </div>
             </div>
         </div>
        </>
    )
}

export default Login