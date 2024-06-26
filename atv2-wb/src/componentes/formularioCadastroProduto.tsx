import { Component } from "react";

type Props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<Props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light purple lighten-1 ${this.props.tema}`;
        
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="name" type="text" className="validate" />
                            <label htmlFor="name">Nome do produto</label>
                        </div>
                        </div>
                        <div className="input-field col s6">
                            <input id="preco" type="number" className="validate" />
                            <label htmlFor="preco">Preço (R$)</label>
                        </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

