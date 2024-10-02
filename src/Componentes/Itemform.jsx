import React from 'react'

const Itemform = ({phr,name,label}) => {
    return (
        <div>
                <label htmlFor={label}>
                    {label}
                </label>
                <br />
                <input type="text" id={label} placeholder={phr} name={name}/>
            </div>
    )
}

export default Itemform