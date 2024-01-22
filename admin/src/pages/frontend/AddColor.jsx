import React from 'react'
import MetaTag from '../../components/MetaTag'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'

const AddColor = () => {
    return (
        <>
            <MetaTag title='Add Color' />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Add Color</h3>
                    <form action="">
                        <CustomInput type='color' name='add-color' id='' placeholder='Color name' />
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