import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';

export default function CadastroCompras(props) {

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

            <div className="input-field col s12">
            <select>
                <option value="" disabled selected>Escolha um produto</option>
                <option value="1">Shampoo</option>
                <option value="2">Creme para pele</option>
                <option value="3">Tinta de cabelo</option>
            </select>
            </div>
            <div className="row">
                <div className="col s12">
                    <button className={estiloBotao} type="submit" name="action">Cadastrar
                    <i className="material-icons right">send</i>
                    </button>
            </div>
            </div>
        </>

            
        )
    }
