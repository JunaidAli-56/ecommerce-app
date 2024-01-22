import React from 'react'
import MetaTag from '../../components/MetaTag'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'

const AddCategory = () => {
    return (
        <>
            <MetaTag title='Add Category' />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Add Category</h3>
                    <form action="">
                        <CustomInput type='text' name='add-blog-category' id='' placeholder='Category name' />
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