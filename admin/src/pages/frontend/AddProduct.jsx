import React, { useState } from 'react'
import MetaTag from '../../components/MetaTag'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

const AddProduct = () => {
    const [desc, setDesc] = useState();
    const handleChange = (e) => {
        setDesc(e)
        console.log(e)
    }


    // Upload Image Ant Design 
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <>
            <MetaTag title='Add Product' />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Add Product</h3>
                    <form action="">
                        <div className="col-12 mb-3">
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">
                                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                    banned files.
                                </p>
                            </Dragger>
                        </div>
                        <div className="col-12">
                            <CustomInput type='text' name='product-title' id='' placeholder='Product title' />
                        </div>
                        <div className="col-12 mb-3">
                            <CustomInput type='number' min={0} name='product-price' id='' placeholder='Product price' />
                        </div>
                        <div className="col-12 mb-3">
                            <select name="" id="" className='form-control'>
                                <option value="">Select Brand</option>
                            </select>
                        </div>
                        <div className="col-12 mb-3">
                            <select name="" id="" className='form-control'>
                                <option value="">Select Category</option>
                            </select>
                        </div>
                        <div className="col-12 mb-3">
                            <select name="" id="" className='form-control'>
                                <option value="">Select Color</option>
                            </select>
                        </div>
                        <div className="col-12 mb-3">
                            <CustomInput type='number' min={0} name='product-quantity' id='' placeholder='Product quantity' />
                        </div>
                        <div className="col-12 mb-3">
                            <ReactQuill theme="snow" value={desc} onChange={(evt) => handleChange(evt)} />
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