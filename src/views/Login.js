import React, { useState } from 'react'
import PizzaImg from "../assets/img/pizza.png"
function Login() {
    const [islogin, setIsLogin] = useState(true);

    const handleSwitch = (e) => {
        e.preventDefault();
        setIsLogin(!islogin)
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

                                            <form>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="firstname">First Name</label>

                                                    <input type="text" id="firstname" className="form-control form-control-lg" />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="lastname">Last Name</label>

                                                    <input type="text" id="lastname" className="form-control form-control-lg" />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="email">Email</label>

                                                    <input type="email" id="email" className="form-control form-control-lg" />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="password">Password</label>

                                                    <input type="password" id="password" className="form-control form-control-lg" />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="confirmpass">Confirm Password</label>

                                                    <input type="password" id="confirmpass" className="form-control form-control-lg" />
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                    <label className="form-check-label" htmlFor="form2Example3g">
                                                        I agree all statements in <a href="" className="text-body"><u>Terms of service</u></a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center">
                                                    <button type="button"
                                                        className="register-button">Register</button>
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

                                            <form>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="email">Email</label>

                                                    <input type="email" id="email" className="form-control form-control-lg" />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="password">Password</label>

                                                    <input type="password" id="password" className="form-control form-control-lg" />
                                                </div>

                                                <div className="d-flex justify-content-center">
                                                    <button type="button"
                                                        className="register-button">Login</button>
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
