import React, { useState } from 'react'
import MetaTag from '../../components/MetaTag'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

const AddBlog = () => {
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
            <MetaTag title='Add Blog' />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Add Blog</h3>
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
                        <CustomInput type='text' name='add-blog' id='' placeholder='Blog Name' />
                        <select name="" id="" className='form-control mb-3'>
                            <option value="">Select Blog Category</option>
                        </select>
                        <ReactQuill theme="snow" value={desc} onChange={(evt) => handleChange(evt)} />
                        <div className="col-12 d-flex justify-content-end my-3">
                            <button type='submit' className='button-primary rounded-2'>Add Blog</button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default AddBlog