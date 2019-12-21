import React from 'react'
import SellerList from './SellerList.jsx'
import { IoIosPodium } from 'react-icons/io'

class SideBar extends React.Component{
    constructor(){
        super()
        this.state = {
            showScoreMb: 'hidden'
        }
    }

    hdlBtnScore = () => {
        let css = (this.state.showScoreMb == 'hidden') ? 'show' : 'hidden'
        this.setState({ showScoreMb: css })
    }

    render(){
        let classShowScore = '' 
        let content
        if(this.props.game.playing && !this.props.loading.sellers){
            content = <SellerList listClass={this.state.showScoreMb} sellers={this.props.sellers} winner={this.props.game.winner}/>
        }else if(this.props.game.playing && this.props.loading.sellers){
            content = <div className="loading-ctn" ><h1 className="side-bar__loading">Cargando Vendedores...</h1><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> </div> 
        }else{
            content = <input type="button" onClick={this.props.start} className="button button--start" value="COMENZAR"/>
        }
        return(
            <section className="side-bar">
                <h1 className="logo">IMAGENES<br/>DEL MUNDO</h1>
                <div className="scoreBtn" onClick={this.hdlBtnScore}><IoIosPodium /></div>
                {content}
            </section>
        )
    }
}

export default SideBar