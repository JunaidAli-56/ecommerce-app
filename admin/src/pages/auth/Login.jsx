import React from 'react'
import MetaTag from '../../components/MetaTag'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'

const Login = () => {
    return (
        <>
            <MetaTag title="Login" />
            <Container className="login-wrapper min_height d-flex justify-content-center align-items-center">
                <div className="row ">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="auth-card">
                            <form>
                                <h5 className='text-center mb-4 fs-3'>Login</h5>
                                <CustomInput
                                    type="email" name='email' placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp"
                                />
                                <CustomInput
                                    type="password" name='password' placeholder='Password' id="exampleInputPassword1"
                                />
                                <div className='mb-3'>
                                    <Link to="/forgot-password" className='text-secondary'>
                                        forgot-password ?
                                    </Link>
                                </div>
                                <div className='d-flex justify-content-center align-items-center flex-column'>
                                    <Link to='/admin' type="submit" className="btn btn-primary w-100">
                                        Login
                                    </Link>
                                    <div className='d-flex align-items-center mt-2'>
                                        <p className='mb-0 me-1'>Or</p>

                                        <Link to='/register' className='text-secondary'>
                                            Register now!
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}

export default Login