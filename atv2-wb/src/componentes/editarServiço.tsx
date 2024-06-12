import { Component, useEffect } from "react";
import M from 'materialize-css';

type Props = {
    tema: string
}

export default class EditarServiço extends Component<Props> {
    
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        let estiloBotao = `btn waves-effect waves-light purple lighten-1 ${this.props.tema}`;

        return (
            <>
            <div className="input-field col s12">
                <select>
                <option value="" disabled selected>Escolha um serviço</option>
                <option value="1">Corte de cabelo</option>
                <option value="2">Manicure</option>
                <option value="3">Pedicure</option>
            </select>
            </div>

            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="name" type="text" className="validate" />
                            <label htmlFor="name">Nome</label>
                        </div>
                        </div>
                        <div className="input-field col s6">
                            <input id="preco" type="number" className="validate" />
                            <label htmlFor="preco">Preço (R$)</label>
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
