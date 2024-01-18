import React from 'react'
import MetaTag from '../../components/MetaTag'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
const ForgotPassword = () => {
    return (
        <>
            <MetaTag title="Forgot Password" />
            <Container className="forgot-wrapper min_height d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="auth-card">
                            <form>
                                <h5 className='text-center mb-2 fs-4'>Forgot Password</h5>
                                <p className='desc text-center'>Please enter your email to get password reset mail.</p>
                                <CustomInput
                                    type="email" name='email' placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp"
                                />
                                <div className='d-flex justify-content-center align-items-center flex-column'>
                                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                                    <Link to='/login' className='btn btn-dark text-white w-100 mt-3'>
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