import React, { useEffect, useState } from 'react'
import MetaTag from '../../components/MetaTag'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBrands } from '../../features/brand/brandSlice';
import { getCategory } from '../../features/proCategory/proCategorySlice';
import { getColors } from '../../features/color/colorSlice';
// import Multiselect from "react-widgets/Multiselect";
// import "react-widgets/scss/styles.scss";
import { Select, Space } from 'antd';
import Dropzone from 'react-dropzone'
import { deleteImg, uploadImg } from '../../features/upload/uploadSlice';
import { createProducts } from '../../features/product/productSlice';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [color, setColor] = useState([]);
    const [images, setImages] = useState([]);

    let userSchema = Yup.object().shape({
        title: Yup.string().required('title is required'),
        description: Yup.string().required('description is required'),
        price: Yup.number().required('price is required'),
        brand: Yup.string().required('Brand is required'),
        category: Yup.string().required('category is required'),
        tags: Yup.string().required('tag is required'),
        quantity: Yup.number().required('quantity is required'),
        // color: Yup.array().required('colors are required'),
        color: Yup.array().min(0, 'Pick at least one color').required("color is required"),
    })
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            brand: '',
            category: '',
            tags: '',
            quantity: '',
            // color: [],
            color: '',
            images: '',
        },
        validationSchema: userSchema,
        onSubmit: async (values) => {
            try {
                // alert(JSON.stringify(values))
                dispatch(createProducts(values))
                formik.resetForm()
                setColor(null)
                setTimeout(() => {
                    navigate('/admin/product-list')
                }, 3000)
            } catch (error) {
                console.error('add product error:', error);
            }
        }
    })

    useEffect(() => {
        dispatch(getBrands())
        dispatch(getCategory())
        dispatch(getColors())
    }, [])

    const brandState = useSelector((state) => state.brand.brands);
    const categoryState = useSelector((state) => state.productCategory.productCategories);
    const colorState = useSelector((state) => state.color.colors);
    const imgState = useSelector((state) => state.upload.images);
    const productCreation = useSelector((state) => state.product);
    const { isSuccess, isError, isLoading, createdProducts } = productCreation;
    useEffect(() => {
        if (isSuccess && createdProducts) {
            toast.success('🦄 Product Added Successfully');
        }
        if (isError) {
            toast.error('🦄 Something went wrong! Product is not added');
        }
    }, [isSuccess, isError, isLoading])
    const colorOpt = [];
    colorState.forEach(i => {
        colorOpt.push({
            label: i.title,
            value: i._id,
        })
    });
    // const colorOpt = colorState.map((i) => ({
    //     _id: i._id,
    //     color: i.title,
    // }));
    const handleColor = (e) => {
        setColor(e)
        console.log(color)
    }
    const img = [];
    imgState.forEach(i => {
        img.push({
            public_id: i.public_id,
            url: i.url,
        })
    })
    useEffect(() => {
        formik.values.color = color ? color : "";
        formik.values.images = img;
    }, [img])

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
                                    categoryState.map((i) => {
                                        return (
                                            <option value={i.title} key={i.title}>
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
                            <select name="tags" id="" className='form-control' onChange={formik.handleChange('tags')} onBlur={formik.handleBlur('tags')} value={formik.values.tags}>
                                <option value="" >Select tags</option>
                                <option value="feature" >Feature</option>
                                <option value="popular" >Popular</option>
                                <option value="special" >Special</option>
                            </select>
                            <div cl assName='text-danger mt-1'>
                                {formik.touched.tags && formik.errors.tags}
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                className='w-100 h-25'
                                placeholder="Select Color"
                                defaultValue={color}
                                onChange={(i) => handleColor(i)}
                                options={colorOpt}
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
                            <ReactQuill theme="snow" name="description" onChange={formik.handleChange('description')} onBlur={formik.handleBlur('description')} value={formik.values.description} />
                            <div className='text-danger mt-1'>
                                {formik.touched.description && formik.errors.description}
                            </div>
                        </div>
                        <div className="col-12 mb-3 bg-white px-2 py-4 text-center rounded-2">
                            <Dropzone onDrop={acceptedFiles => dispatch(uploadImg(acceptedFiles))}>
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
                        <div className="imgeShow d-flex flex-wrap gap-3">
                            {imgState && imgState.map((i) => {
                                return (
                                    <div key={i.public_id} className='position-relative'>
                                        <button type='button' className='btn-close position-absolute' style={{ top: "5px", right: "5px" }} onClick={() => dispatch(deleteImg(i.public_id))}></button>
                                        <img src={i.url} alt="" width={200} height={200} />
                                    </div>
                                )
                            })}
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