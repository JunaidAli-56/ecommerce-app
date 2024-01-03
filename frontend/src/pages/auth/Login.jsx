import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'

const Login = () => {
    return (
        <>
            <MetaTag title="Login" />
            <BreadCrumb title="Login" />
            <Container className="login-wrapper">
                <div className="row">
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
                                    <Link to="/forgot-password">
                                        forgot-password ?
                                    </Link>
                                </div>
                                <div className='d-flex justify-content-center align-items-center flex-column'>
                                    <button type="submit" className="btn btn-primary w-100">Login</button>
                                    <p className='my-2'>-- or --</p>
                                    <Link to='/register' className='w-100 btn btn-dark text-white'>
                                        Register now
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login