import React from 'react'

const BoxName = (props) => {

    return(
        <div className="box-name">
            <span className="box-name__circle"></span>
            <h3 className="box-name__label">{props.seller.name}</h3>
        </div>
    )
}

export default BoxName