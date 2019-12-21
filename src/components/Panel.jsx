import React from 'react'
import InputForm from './InputForm.jsx'
import FormVote from './FormVote.jsx'
import Facture from './Facture.jsx'

const Panel = (props) => {

        let content

        if(props.gameState.waitInput){
            content = <InputForm sendKeyword={props.sendKeyword}/>
        }else if(props.loading.sellers){
            content = <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        }else if(props.gameState.voting){
            content = <FormVote sellers={props.sellers} sendIdImg={props.addPoints} />
        }else if(props.loading.facture){
            content = <div className="loading-ctn" ><h1 className="panel__loading">Generando Factura...</h1>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> </div> 
        }else if(props.gameState.winner && !props.loading.facture){
            content = <Facture facture={props.facture} handleReset={props.reset} />
        }else{
            content = <p className="panel__welcome" >Bienvenido, este es un ejercicio para comprobar la capacidad de nuestros vendedores, consiste en que el usuario ingrese el tema sobe el cual necesita imagenes y  nuestros vendedores estaran prestos para encontrarlas en la web; luego votaras por la que mas te guste,  otorgandole 3 puntos al vendedor; el ganador sera el primero en completar <span className="panel__welcome--mark">20 puntos</span>.</p>
        }
        
        return(
            <section className="panel">
                {content}
            </section>
            
        )
}


export default Panel