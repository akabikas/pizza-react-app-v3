import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import PizzaImg from "../assets/img/pizza.png"
import axios from 'axios';
import { validate } from 'json-schema';

function Login() {

    const [users, setUsers] = useState([])
    const [registrationMsg, setRegistrationMsg] = useState("");
    const [loginMsg, setLoginMsg] = useState("");
    const [islogin, setIsLogin] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues
      } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: "",
        validateCriteriaMode: "all",
        submitFocusError: true,
        nativeValidation: false,
    });
    
    const {
        register: register1,
        handleSubmit: handleSubmit1,
        errors: errors1,
        control: control1,
        reset: reset1,
      } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: "",
        validateCriteriaMode: "all",
        submitFocusError: true,
        nativeValidation: false,
      });

    const handleSwitch = (e) => {
        e.preventDefault();
        setIsLogin(!islogin)
    }

    const onSubmitRegister  = (data) => {
        
        console.log(data);
        setRegistrationMsg("User registration is successful.");
        axios.post(`http://localhost:8000/users`,
        data
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
        reset();
    }

    const onSubmitLogin = (data) => {
        
        

        console.log("form data", data);
        axios.get(`http://localhost:8000/users`)
        .then(function (response) {
            console.log(response.data);
            setUsers(response.data)
          }).catch(function (error) {
            console.log(error.response.data);
          });
        
          users.reduce(user => {
            if (user.password === data.password && user.email === data.email) {
              console.log(user.email + " You Are Successfully Logged In");
            } else {
              console.log("Email or Password is not matching with our record");
            }
        }
          )
        setLoginMsg(`${data.email} has been logged in succesfully.`);
    }

    return (
        <>

            <section className="register-screen bg-white">
                <div className="mask d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                {!islogin ?
                                    <div className="card register-card" >
                                        <div className=" p-5">
                                            <h2 className="text-center mb-5">Create an account</h2>

                                            <form onSubmit={handleSubmit(onSubmitRegister)}>
                                            {registrationMsg && <p className="success-msg">{registrationMsg}</p>}
        

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="firstname">First Name</label>

                                                    <input type="text" id="firstName" className="form-control form-control-lg" 
                                                    {...register("firstName", 
                                                    {required: true})}/>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="lastname">Last Name</label>

                                                    <input type="text" id="lastName" className="form-control form-control-lg" 
                                                    {...register("lastName", {
                                                        required: true})}/>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="email">Email</label>

                                                    <input type="email" id="email" className="form-control form-control-lg"
                                                    {...register("email", {
                                                        required: true,
                                                        pattern: {
                                                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                            message: "Email is not valid."
                                                          }
                                                    })}/>
                                                    {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="password">Password</label>

                                                    <input type="password" id="password" className="form-control form-control-lg" 
                                                    {...register("password", {
                                                        required: true,
                                                        minLength: {
                                                            value: 8,
                                                            message: "Password must be at least 8 characters long."}
                                                        })}/>
                                                    {errors.password && (
                                                        <p className="errorMsg">{errors.password.message}</p>
                                                    )}
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="confirmpass">Confirm Password</label>

                                                    <input type="password" id="confirmPassword" className="form-control form-control-lg" 
                                                    {...register("confirmPassword", {
                                                        required: true, 
                                                        validate: (value) =>
                                                        value === getValues("password")
                                                        

                                                    })}/>
                                                    {errors.confirmPassword && errors.confirmPassword.type === "validate" && <div>Passwords do not match</div>}
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                    <label className="form-check-label" htmlFor="form2Example3g">
                                                        I agree all statements in <a href="" className="text-body"><u>Terms of service</u></a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center">
                                                    <button className="register-button" type='submit'
                                                         onClick={()=>handleSubmit()}>
                                                            Register
                                                    </button>
                                                </div>

                                                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a onClick={handleSwitch} href="#!"
                                                    className="fw-bold text-body"><u>Login here</u></a></p>

                                            </form>

                                        </div>
                                    </div>
                                    :
                                    <div className="card login-card" >
                                        <div className=" p-5">
                                            <h2 className="text-center mb-5">Login</h2>

                                            <form onSubmit={handleSubmit1(onSubmitLogin)}>
                                            {loginMsg && <p className="success-msg">{loginMsg}</p>}
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="email">Email</label>

                                                    <input type="email" id="email" className="form-control form-control-lg" 
                                                    {...register1("email", 
                                                    {required: true})}/>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="password">Password</label>

                                                    <input type="password" id="password" className="form-control form-control-lg" 
                                                    {...register1("password", 
                                                    {required: true})}/>
                                                </div>

                                                <div className="d-flex justify-content-center">
                                                    <button type="button"
                                                        className="register-button" type='submit'
                                                        onClick={()=>handleSubmit1()}>Login</button>
                                                </div>

                                                <p className="text-center text-muted mt-5 mb-0">New member? <a onClick={handleSwitch} href="#!"
                                                    className="fw-bold text-body"><u>Register here</u></a></p>

                                            </form>

                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6 pizza-img">
                                <img src={PizzaImg}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
