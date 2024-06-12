import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';

export default function EditarCliente(props) {

    useEffect(() => {
        M.AutoInit();
        }, []);
        
    const estiloBotao = `btn waves-effect waves-light purple lighten-1 ${props.tema}`;

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
