import React from "react";
const Hero = () => {
    return (
        <div className='px-4 py-5 my-5 text-center'>
            <h1 className='display-5 fw-bold'>Bostrapp con react</h1>
            <div className='col-lg-6 mx-auto'>
                <button type='button' className='btn btn-primary btn-lg px-4 gap-3'>Boton primario</button>
                <button type='button' className='btn btn-outline-secondary btn-lg px-4'>Boton secundario</button>
                <button type="button" class="btn btn-primary">Primary</button>
            </div>
        </div>
    )
}
export default Hero