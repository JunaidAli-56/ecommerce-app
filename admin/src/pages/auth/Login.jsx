import React from 'react'
import MetaTag from '../../components/MetaTag'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import login from '../../features/auth/authSlice'

const Login = () => {
    const dispatch = useDispatch();

    let userSchema = object({
        name: string().email('Invalid email').required('email is required'),
        password: string().required('password is required'),
    })
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: userSchema,
        onSubmit: values => {
            dispatch(login(values))
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <>
            <MetaTag title="Login" />
            <Container className="login-wrapper min_height d-flex justify-content-center align-items-center">
                <div className="row ">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="auth-card">
                            <form action='' onSubmit={formik.handleSubmit}>
                                <h5 className='text-center mb-4 fs-3'>Login</h5>
                                <CustomInput
                                    type="email" name='email' placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={formik.handleChange('email')} value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (<div className='text-danger'>{formik.errors.email}</div>) : null}
                                <CustomInput
                                    type="password" name='password' placeholder='Password' id="exampleInputPassword1" onChange={formik.handleChange('password')} value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? (<div className='text-danger'>{formik.errors.password}</div>) : null}
                                <div className='my-3 d-flex justify-content-end'>
                                    <Link to="/forgot-password" className='text-secondary'>
                                        forgot-password ?
                                    </Link>
                                </div>
                                <div className='d-flex justify-content-center align-items-center flex-column'>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Login
                                    </button>
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