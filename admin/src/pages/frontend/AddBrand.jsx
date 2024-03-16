import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MetaTag from '../../components/MetaTag'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import { toast } from 'react-toastify';
import { createBrand } from '../../features/brand/brandSlice';

const AddBrand = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let userSchema = Yup.object().shape({
        title: Yup.string().required('title is required'),
    })

    const brandCreation = useSelector((state) => state.brand);
    const { isSuccess, isError, isLoading, createdBrand } = brandCreation;
    useEffect(() => {
        if (isSuccess && createdBrand) {
            toast.success('🦄 Brand Added Successfully');
        }
        if (isError) {
            toast.error('🦄 Something went wrong! Brand is not added');
        }
    }, [isSuccess, isError, isLoading,createdBrand])

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: userSchema,
        onSubmit: async (values) => {
            try {
                dispatch(createBrand(values))
                formik.resetForm()
                setTimeout(() => {
                    navigate('/admin/brand-list')
                }, 3000)
            } catch (error) {
                console.error('add product error:', error);
            }
        }
    })

    return (
        <>
            <MetaTag title='Add Color' />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Add Brand</h3>
                    <form action="" onSubmit={formik.handleSubmit}>
                        <CustomInput type='text' name='add-brand' id='' placeholder='Brand name' onCh={formik.handleChange('title')} onBlur={formik.handleBlur('title')} value={formik.values.title} />
                        <div className='text-danger mb-1'>
                            {formik.touched.title && formik.errors.title}
                        </div>
                        <div className="col-12 d-flex justify-content-end my-3">
                            <button type='submit' className='button-primary my-3 rounded-2'>Add Brand</button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default AddBrand;