import React from 'react'
import BoxName from './BoxName.jsx'
import BoxScore from './BoxScore.jsx'
import {FaCheck} from 'react-icons/fa'

const SellerBox = (props) => {

    return(
        <li className="sellers-list__item">
            <BoxName seller={props.seller}/>
            <BoxScore points={props.seller.points}/>
            {props.seller.isWinner ? <div className="winner-check"><FaCheck />GANADOR!</div> : null}
        </li>
    )
}

export default SellerBox