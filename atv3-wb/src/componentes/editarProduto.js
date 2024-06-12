import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';

export default function EditarProduto(props) {

    useEffect(() => {
        M.AutoInit();
        }, []);
        
    const estiloBotao = `btn waves-effect waves-light purple lighten-1 ${props.tema}`;

    return (
        <>
        <div className="input-field col s12">
            <select>
            <option value="" disabled selected>Escolha um produto</option>
            <option value="1">Shampoo</option>
            <option value="2">Creme para pele</option>
            <option value="3">Tinta de cabelo</option>
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
