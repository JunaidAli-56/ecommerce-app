import React, { useEffect, useState } from 'react'
import MetaTag from '../../components/MetaTag'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../../features/brand/brandSlice';
import { getCategory } from '../../features/proCategory/proCategorySlice';
import { getColors } from '../../features/color/colorSlice';
import Multiselect from "react-widgets/Multiselect";
import "react-widgets/scss/styles.scss";
import Dropzone from 'react-dropzone'

const AddProduct = () => {
    const [color, setColor] = useState([]);

    let userSchema = Yup.object().shape({
        title: Yup.string().required('title is required'),
        description: Yup.string().required('description is required'),
        price: Yup.number().required('price is required'),
        brand: Yup.string().required('Brand is required'),
        category: Yup.string().required('category is required'),
        quantity: Yup.number().required('quantity is required'),
        // color: Yup.array().required('colors are required'),
        color: Yup.array().min(1, 'At least one color is required'),
    })
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            brand: '',
            category: '',
            quantity: '',
            color: [],
        },
        validationSchema: userSchema,
        onSubmit: async (values) => {
            try {
                alert(JSON.stringify(values))
            } catch (error) {
                console.error('add product error:', error);
            }
        }
    })

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBrands())
        dispatch(getCategory())
        dispatch(getColors())
        // formik.values.color = color;
    }, [])
    const brandState = useSelector((state) => state.brand.brands);
    const categoryState = useSelector((state) => state.productCategory.productCategories);
    const colorState = useSelector((state) => state.color.colors);
    // const colors = [];
    // colorState.forEach(i => {
    //     colors.push({
    //         _id: i._id,
    //         color: i.title,
    //     })
    // });
    const colors = colorState.map((i) => ({
        _id: i._id,
        color: i.title,
    }));
    return (
        <>
            <MetaTag title='Add Product' />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Add Product</h3>
                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className="col-12">
                            <CustomInput type='text' name='title' id='' placeholder='Product title' onCh={formik.handleChange('title')} onBlur={formik.handleBlur('title')} value={formik.values.title} />
                        </div>
                        <div className='text-danger mb-1'>
                            {formik.touched.title && formik.errors.title}
                        </div>
                        <div className="col-12 mb-3">
                            <CustomInput type='number' min={0} name='price' id='' placeholder='Product price' onCh={formik.handleChange('price')} onBlur={formik.handleBlur('price')} value={formik.values.price} />
                            <div className='text-danger mt-1'>
                                {formik.touched.price && formik.errors.price}
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <select name="brand" id="" className='form-control' onChange={formik.handleChange('brand')} onBlur={formik.handleBlur('brand')} value={formik.values.brand}>
                                <option value="">Select Brand</option>
                                {
                                    brandState.map((i, j) => {
                                        return (
                                            <option value={i.title} key={j}>
                                                {i.title}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            <div className='text-danger mt-1'>
                                {formik.touched.brand && formik.errors.brand}
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <select name="category" id="" className='form-control' onChange={formik.handleChange('category')} onBlur={formik.handleBlur('category')} value={formik.values.category}>
                                <option value="">Select Category</option>
                                {
                                    categoryState.map((i, j) => {
                                        return (
                                            <option value={i.title} key={j}>
                                                {i.title}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            <div className='text-danger mt-1'>
                                {formik.touched.category && formik.errors.category}
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            {/* <Multiselect
                                name='color'
                                dataKey="id"
                                textField="color"
                                // defaultValue={["Select Color"]}
                                data={colors}
                                onChange={(e => setColor(e))}
                            /> */}
                            <Multiselect
                                name='color'
                                dataKey='_id'
                                textField='color'
                                value={color}
                                data={colors}
                                onChange={(values) => {
                                    formik.setFieldValue('color', values);
                                    setColor(values);
                                    formik.setFieldTouched('color', true);
                                }}
                            />
                            <div className='text-danger mt-1'>
                                {formik.touched.color && formik.errors.color}
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <CustomInput type='number' min={0} name='quantity' id='' placeholder='Product quantity' onCh={formik.handleChange('quantity')} onBlur={formik.handleBlur('quantity')} value={formik.values.quantity} />
                            <div className='text-danger mt-1'>
                                {formik.touched.quantity && formik.errors.quantity}
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <ReactQuill theme="snow" onChange={formik.handleChange('description')} onBlur={formik.handleBlur('description')} value={formik.values.description} />
                            <div className='text-danger mt-1'>
                                {formik.touched.description && formik.errors.description}
                            </div>
                        </div>
                        <div className="col-12 mb-3 bg-white px-2 py-4 text-center rounded-2">
                            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                {({ getRootProps, getInputProps }) => (
                                    <section>
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <p>Drag 'n' drop or upload files</p>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                        </div>
                        <div className="col-12 d-flex justify-content-end my-3">
                            <button type='submit' className='button-primary rounded-2'>Add Product</button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default AddProduct;