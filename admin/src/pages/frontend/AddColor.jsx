import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MetaTag from '../../components/MetaTag'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import { toast } from 'react-toastify';
import { createColors } from '../../features/color/colorSlice';

const AddColor = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let userSchema = Yup.object().shape({
        title: Yup.string().required('color title is required'),
    })

    const newColor = useSelector((state) => state.color);
    const { isSuccess, isError, isLoading, createdColor } = newColor;
    useEffect(() => {
        if (isSuccess && createdColor) {
            toast.success('🦄 Color Added Successfully');
        }
        if (isError) {
            toast.error('🦄 Something went wrong! Color is not added');
        }
    }, [isSuccess, isError, isLoading, createdColor])

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: userSchema,
        onSubmit: async (values) => {
            try {
                dispatch(createColors(values))
                formik.resetForm()
                setTimeout(() => {
                    navigate('/admin/color-list')
                }, 3000)
            } catch (error) {
                console.error('add color error:', error);
            }
        }
    })
    return (
        <>
            <MetaTag title='Add Color' />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Add Color</h3>
                    <form action="" onSubmit={formik.handleSubmit}>
                        <CustomInput type='color' name='add-color' id='color' placeholder='Color name' onCh={formik.handleChange('title')} onBlur={formik.handleBlur('title')} value={formik.values.title} />
                        <div className='text-danger mb-1'>
                            {formik.touched.title && formik.errors.title}
                        </div>
                        <div className="col-12 d-flex justify-content-end my-3">
                            <button type='submit' className='button-primary my-3 rounded-2'>Add Color</button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default AddColor;