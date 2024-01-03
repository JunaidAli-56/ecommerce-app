import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'


const Register = () => {
    return (
        <>
            <MetaTag title="Register" />
            <BreadCrumb title="Register" />
            <Container className="register-wrapper">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="auth-card">
                            <form>
                                <h5 className='text-center mb-4 fs-3'>Create Account</h5>
                                <CustomInput
                                    type="text"
                                    name='name'
                                    placeholder='Name'
                                    id="exampleInputEmail1"
                                />
                                <CustomInput
                                    type="tel" name='mobile' placeholder='Mobile' id="exampleInputEmail1"
                                />
                                <CustomInput
                                    type="email" name='email' placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp"
                                />
                                <CustomInput
                                    type="password" name='password' placeholder='Password' id="exampleInputPassword1"
                                />
                                <div className='d-flex justify-content-center align-items-center flex-column'>
                                    <button type="submit" className="btn btn-primary w-100">Create</button>
                                    <p className='my-2'>-- or --</p>
                                    <Link to='/login' className='w-100 btn btn-dark text-white'>
                                        Cancel
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

export default Register