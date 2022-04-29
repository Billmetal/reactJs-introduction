import React, { Component } from 'react';

class SorveteForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            sabor: "uva",
            casquinha: true,
            guardanapos: "sim"
        };

        this.handleInputChanges = this.handleInputChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChanges(event){
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({name: value});
    }

    handleSubmit(event){
        const { sabor , casquinha, guardanapos } = this.state;
        alert("Seu sabor escolhido foi " + sabor + ", guardanapos " + guardanapos + " e casquinha " + casquinha + " .");
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{display: "flex",flexDirection: "column"}}>
                <br/>
                <label>
                    Escolha o Sabor : 
                    <select name='sabor' value={this.state.sabor} onChange={this.handleInputChanges}>
                        <option value={"uva"}>Uva</option>
                        <option value={"limão"}>Limão</option>
                        <option value={"coco"}>Coco</option>
                        <option value={"chocolate"}>Chocolate</option>
                        <option value={"morango"}>Morango</option>
                    </select>
                </label>
                <br/>
                <label>
                    <input type={'checkbox'} name="casquinha" checked={this.state.casquinha} onChange={this.handleInputChanges}></input>
                    Colocar na Casquinha ?
                </label>
                <br/>
                <label>
                    Guardanapos ?
                    <div className='radio'>
                        <label>
                        <input type={'radio'} name="guardanapos" id='guardanapos' value={"sim"} checked={this.state.guardanapos === "sim"} onChange={this.handleInputChanges}></input>
                            Sim
                        </label>
                    </div>
                    <div className='radio'>
                        <label>
                        <input type={'radio'} name="guardanapos" id='guardanapos' value={"nao"} checked={this.state.guardanapos === "nao"} onChange={this.handleInputChanges}></input>
                            Não
                        </label>
                    </div>
                </label>
                <input type={"submit"} value={"Enviar"}></input>
            </form>
        );
    };
}

export default SorveteForm;