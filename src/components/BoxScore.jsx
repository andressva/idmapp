import React from 'react'

const BoxScore = (props) => {

    return(
        <div className="box-score">
            <span className="box-score__points">puntos: {props.points}</span>
            <span className="box-score-rest">faltantes: {20 - props.points}</span>
        </div>
    )
}

export default BoxScore