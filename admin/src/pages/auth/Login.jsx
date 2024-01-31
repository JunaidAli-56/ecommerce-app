import React, { useEffect } from 'react'
import MetaTag from '../../components/MetaTag'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let userSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('email is required'),
        password: Yup.string().required('password is required'),
    })
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: userSchema,
        // onSubmit: values => {
        //     dispatch(login(values))
        //     alert(JSON.stringify(values, null, 2))
        //     console.log('Submitted')
        // }
        onSubmit: async (values) => {
            // console.log('Submitting form:', values);
            try {
                const response = dispatch(login(values));
                console.log('Login success:', response);
            } catch (error) {
                console.error('Login error:', error);
            }
        }
    })
    const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth)
    useEffect(() => {
        if (!user == null || isSuccess) {
            navigate("admin")
            console.log(user)
        }
        else {
            alert('not')
        }
    }, [user, isLoading, isSuccess, isError, message])
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
                                    type="email" name='email' placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" onCh={formik.handleChange('email')} value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (<div className='text-danger'>{formik.errors.email}</div>) : null}
                                <CustomInput
                                    type="password" name='password' placeholder='Password' id="exampleInputPassword1" onCh={formik.handleChange('password')} value={formik.values.password}
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

                                        <Link to='' className='text-secondary'>
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

export default Login;