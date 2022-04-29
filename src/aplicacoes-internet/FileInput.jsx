import React, { Component, createRef } from 'react';

class FileInput extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = createRef();
    }

    handleSubmit(event){
        event.preventDefault();
        alert(`Arquivo Selecionado - ${this.fileInput.current.files[0].name}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                <label>
                    Upload de Arquivo : 
                    <input type={'file'} ref={this.fileInput}></input>
                </label>
                <br/>
                <button type='submit'>Enviar</button>
            </form>
        );
    };
}

export default FileInput;