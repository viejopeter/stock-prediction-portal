import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {

    const initialUserForm = {
        username:"",email:'',password:""
    }
    const [userForm,setUserForm] = useState(initialUserForm)
    const [errors,setErrors] = useState({})
    const [success,setSuccess] = useState(false)
    const [loading,setLoading] = useState(false)

    const handleForm = (e) => {
        const {name,value} = e.target
        setUserForm(
            prev=> ({...prev, [name]: value})
        )
    }

    const handleRegistration = async (e) => {
        e.preventDefault();

        setLoading(true)

        try{
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register',userForm)
            console.log('Response.data==?',response.data)
            console.log('Registration successful')
            setErrors({})
            setSuccess(true)
            setUserForm(initialUserForm)
            setTimeout(
                () => setSuccess(false),3000
            )
        }catch(error){
            setErrors(error.response.data)
            console.error('Registration error:', error.response.data)
        }finally{
            setLoading(false)
        }
    }

    return(
        <>
         <div className="container">
             <div className="row justify-content-center">
                 <div className="col-md-6 bg-light-dark p-5 rounded">
                     <h3 className="text-light text-center mb-4">Create an Account</h3>
                     <form onSubmit={handleRegistration}>
                         <div className="mb-3">
                             <label htmlFor="username" className="text-light">
                                 Username
                             </label>
                             <input type="text"
                                    className="form-control"
                                    placeholder="Enter username"
                                    onChange={(e) => handleForm(e)}
                                    name="username"
                                    value={userForm.username}
                                    />
                             <small>{errors.username && <div className="text-danger">{errors.username}</div>} </small>
                         </div>
                         <div className="mb-3">
                             <label htmlFor="email" className="text-light">
                                 Email
                             </label>
                             <input type="email"
                                className="form-control"
                                placeholder="Enter email address"
                                onChange={(e) => handleForm(e)}
                                name="email"
                                value={userForm.email}
                             />
                             <small>{errors.email && <div className="text-danger">{errors.email}</div>}</small>
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
                                   value={userForm.password}
                             />
                             <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>
                         </div>
                         {success && <div className='alert alert-success'>Registration Successful</div>}
                         {loading ? (<button type="submit"
                                 className="btn btn-info d-block mx-auto" disabled><FontAwesomeIcon icon={faSpinner} spin /> Please wait...</button>) :
                             (<button type="submit"
                                 className="btn btn-info d-block mx-auto">Register</button>)
                         }
                     </form>
                 </div>
             </div>
         </div>
        </>
    )
}

export default Register