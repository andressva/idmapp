import React from 'react'

const Facture = (props) => {

    return (
        <div>
            <h1 className="facture__title">Factura Generada</h1>
            <section className="facture">
                <div className="facture__row">
                    <div className="facture__box">
                        <span className="facture__attr facture__attr--bold">Facture ID:</span>
                        <span className="facture__attr">{props.facture.id}</span>
                    </div>
                </div>
                <div className="facture__row"  >
                    <div className="facture__box" >
                        <span className="facture__attr facture__attr--bold">Creacion</span>
                        <span className="facture__attr" >{props.facture.date}</span>
                    </div>
                    <div className="facture__box" >
                        <span className="facture__attr facture__attr--bold" >Vencimiento:</span>
                        <span className="facture__attr" >{props.facture.dueDate}</span>
                    </div>
                </div>
                <div className="facture__row">
                    <div className="facture__box">
                        <span className="facture__attr facture__attr--bold">Cliente:</span>
                        <span className="facture__attr">{props.facture.client.name}</span>
                    </div>
                    <div className="facture__box" >
                        <span className="facture__attr facture__attr--bold" >Identificacion:</span>
                        <span className="facture__attr" >{props.facture.client.identification}</span>
                    </div>
                </div>
                <div className="facture__row">
                    <div className="facture__box">
                        <span className="facture__attr facture__attr--bold">Email:</span>
                        <span className="facture__attr">{props.facture.client.email}</span>
                    </div>
                    <div className="facture__box">
                        <span className="facture__attr facture__attr--bold">Id Cliente:</span>
                        <span className="facture__attr">{props.facture.client.id}</span>
                    </div>
                </div>
                <div className="facture__row" >
                    <div className="facture__box" >
                        <span className="facture__attr facture__attr--bold" >Vendedor:</span>
                        <span className="facture__attr" >{props.facture.seller.name}</span>
                    </div>
                    <div className="facture__box" >
                        <span className="facture__attr facture__attr--bold" >Identificacion:</span>
                        <span className="facture__attr" >{props.facture.seller.identification}</span>
                    </div>
                </div>
                <div className="facture__row" >
                    <div className="facture__box" >
                        <span className="facture__attr facture__attr--bold" >Id Vendedor:</span>
                        <span className="facture__attr" >{props.facture.seller.id}</span>
                    </div>
                </div>
                <table className="facture__table">
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Referencia</th>
                            <th>Precio</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.facture.items[0].name}</td>
                            <td>{props.facture.items[0].id}</td>
                            <td>${props.facture.items[0].price}</td>
                            <td>${props.facture.items[0].price}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="summary">
                    <span className="summary__item">Total</span>
                    <span className="summary__item">${props.facture.total}</span>
                </div>
            </section>
            <div>
                <input className="facture__reset button button--blue" value="INICIO" type="button" onClick={props.handleReset} />
            </div>
        </div>
        
    )
}

export default Facture