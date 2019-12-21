import React from 'react'

const Vote = () => {

    return(
        <section className="vote">
            <span className="vote__label">Vota por la imagen que mas te guste</span>
            <input type="submit" className="button button--blue" value="VOTAR" />
        </section>
    )
}

export default Vote