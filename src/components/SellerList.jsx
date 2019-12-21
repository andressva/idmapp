import React from 'react'
import SellerBox from './SellerBox.jsx'

const SellerList = (props) => {

    return(
        <div>
            <span className="side-bar__label " >Nuestros vendedores:</span>
            <ol className={"sellers-list " + props.listClass}>
                {props.sellers.map(seller => {
                    return <SellerBox seller={seller} key={seller.id}/>
                })}
            </ol>
        </div>
        
    )

}

export default SellerList