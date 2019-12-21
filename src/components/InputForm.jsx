import React from 'react'

class InputForm extends React.Component{
    constructor(){
        super()
        this.state = {
            keyword: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.sendKeyword(this.state.keyword)
        e.target.keyword.value = ''
    }

    render(){
        return(
            <form className="form-input" onSubmit={this.handleSubmit} >
                <span className="form-input__label">Dinos sobre que tema quieres<br />buscar imagenes:</span>
                <input type="text" name="keyword" onChange={this.handleChange} className="form-input__input" placeholder="ej. Aviones" />
                <input type="submit" className="button button--blue" value="BUSCAR" />
            </form>
        )
    }
}

export default InputForm