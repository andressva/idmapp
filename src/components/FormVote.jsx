import React from 'react'
import Vote from './Vote.jsx'
import BoxName from './BoxName.jsx'


const FormVote = (props) => {

    const handleSubmit = e => {
        e.preventDefault(e)
        let idSeller = e.target.picture.value - 1
        props.sendIdImg(idSeller)
    }

    return(
        <form className="form-vote" onSubmit={handleSubmit} >
            <Vote />
            <ul className="list-pictures">
            {props.sellers.map( seller => {
                return(
                    <li key={seller.id} className="list-pictures__item" >
                        <input className="list-pictures__radio" type="radio" id={`picture-${seller.id}`} name="picture"  value={seller.id} />
                        <label className="list-pictures__label" htmlFor={`picture-${seller.id}`}></label>
                        <img className="list-pictures__img" src={seller.image} width="220px" height="160px" />
                        <BoxName seller={seller} />
                    </li>
                )
            } )}
            </ul>
        </form>
    )
    
}

export default FormVote