import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MetaTag from '../../components/MetaTag'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import { toast } from 'react-toastify';
import { createCategory } from '../../features/proCategory/proCategorySlice';

const AddCategory = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    let userSchema = Yup.object().shape({
        title: Yup.string().required('title is required'),
    })
    const categoryCreation = useSelector((state) => state.productCategory);
    const { isSuccess, isError, isLoading, createdCategory } = categoryCreation;
    useEffect(() => {
        if (isSuccess && createdCategory) {
            toast.success('🦄 Category Added Successfully');
        }
        if (isError) {
            toast.error('🦄 Something went wrong! Category is not added');
        }
    }, [isSuccess, isError, isLoading,createdCategory])

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: userSchema,
        onSubmit: async (values) => {
            try {
                dispatch(createCategory(values))
                formik.resetForm()
                setTimeout(() => {
                    navigate('/admin/category-list')
                }, 3000)
            } catch (error) {
                console.error('add product error:', error);
            }
        }
    })


    return (
        <>
            <MetaTag title='Add Category' />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Add Category</h3>
                    <form action="" onSubmit={formik.handleSubmit}>
                        <CustomInput type='text' name='add-blog-category' id='' placeholder='Category name' onCh={formik.handleChange('title')} onBlur={formik.handleBlur('title')} value={formik.values.title} />
                        <div className='text-danger mb-1'>
                            {formik.touched.title && formik.errors.title}
                        </div>
                        <div className="col-12 d-flex justify-content-end my-3">
                            <button type='submit' className='button-primary my-3 rounded-2'>Add Category</button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default AddCategory;