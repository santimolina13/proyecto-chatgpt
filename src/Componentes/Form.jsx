import React from 'react'
import Itemform from './Itemform'
import HandleSubmitMessage from '../handle/HandleSubmitMessage'


const Form = () => {


    return (
        <>
            <h2>Crear Workspace</h2>
            <form onSubmit={HandleSubmitMessage}>
                <Itemform label="Nombre del workspace" phr="ingrese un nombre" name={"mensaje1"} />
                <br />
                <Itemform label="Nombre del canal" phr="ingrese un nombre" name={"mensaje2"} />
                <br />
                <button>Crear</button>
            </form>
        </>
    )
}

export default Form                        