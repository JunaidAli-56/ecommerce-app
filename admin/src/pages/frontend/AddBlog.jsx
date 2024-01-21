import React, { useState } from 'react'
import MetaTag from '../../components/MetaTag'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddBlog = () => {
    const [desc, setDesc] = useState();
    const handleChange = (e) => {
        setDesc(e)
        console.log(e)
    }
    return (
        <>
            <MetaTag title='Add Blog' />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Add Blog</h3>
                    <form action="">
                        <CustomInput type='text' name='add-blog' id='' placeholder='Blog Name' />
                        <select name="" id="" className='form-control mb-3'>
                            <option value="">Select Blog Category</option>
                        </select>
                        <ReactQuill theme="snow" value={desc} onChange={(evt) => handleChange(evt)} />
                        <button type='submit' className='button-primary my-3 rounded-2'>Add Blog</button>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default AddBlog