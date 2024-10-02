import React from 'react'


const HandleSubmitMessage = (e) => {
    
    e.preventDefault()
    const formulario = new FormData(e.target)
        const mensaje1=formulario.get("mensaje1")
        const mensaje2=formulario.get("mensaje2")
        console.log(mensaje1)
        console.log(mensaje2)
      /*   if(!mensaje1 && !mensaje2){
            setError({isError:true ,text:"No has escrtito nada"})
        }
        else{
            setError({isError:false ,text:" "})
        } */
}

export default HandleSubmitMessage