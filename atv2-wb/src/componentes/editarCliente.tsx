import { Component, useEffect } from "react";
import M from 'materialize-css';

type Props = {
    tema: string
}

export default class EditarCliente extends Component<Props> {
    
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        let estiloBotao = `btn waves-effect waves-light purple lighten-1 ${this.props.tema}`;

        return (
            <>
            <div className="input-field col s12">
                <select>
                    <option value="" disabled selected>Escolha um cliente</option>
                    <option value="1">Kalil</option>
                    <option value="2">Sandro</option>
                    <option value="3">João</option>
                </select>
            </div>

            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Nome Social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="telefone" type="text" className="validate" />
                            <label htmlFor="telefone">Telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="number" className="validate" />
                            <label htmlFor="cpf">CPF</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Salvar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>

            
        )
    } 
}
