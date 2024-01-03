import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'

const ResetPassword = () => {
    return (
        <>
            <MetaTag title="Reset Password" />
            <BreadCrumb title="Reset Password" />
            <Container className="reset-password-wrapper">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="auth-card">
                            <form>
                                <h5 className='text-center mb-4 fs-3'>Reset Password</h5>
                                <CustomInput
                                    type="password" name='password' placeholder='Password' id="exampleInputPassword1"
                                />
                                <CustomInput
                                    type="password" name='confirmPassword' placeholder='Confirm Password' id="exampleInputPassword2"
                                />
                                <div className='d-flex justify-content-center align-items-center flex-column'>
                                    <button type="submit" className="btn btn-primary w-100">Reset</button>
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

export default ResetPassword;