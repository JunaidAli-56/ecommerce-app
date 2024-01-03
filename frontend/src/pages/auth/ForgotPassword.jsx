import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
const ForgotPassword = () => {
    return (
        <>
            <MetaTag title="Forgot Password" />
            <BreadCrumb title="Forgot Password" />
            <Container className="forgot-wrapper">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="auth-card">
                            <form>
                                <h5 className='text-center mb-2 fs-4'>Reset Your Password</h5>
                                <p className='desc text-center'>We will send you an email to reset password</p>
                                <CustomInput
                                    type="email" name='email' placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp"
                                />
                                <div className='d-flex justify-content-center align-items-center flex-column'>
                                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                                    <p className='my-2'>-- or --</p>
                                    <Link to='/login' className='btn btn-dark text-white w-100'>
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

export default ForgotPassword