/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class Listagem extends Component<props> {
    render() {
        let estilo = `collection-item active purple lighten-2 ${this.props.tema}`
        return (
<>
                <div className="row">
                    <div id="clientesMaisConsumiram" className="col s12">
                        <div className="row">
                        <h5 className="text-align: center">Clientes que mais consumiram produtos e serviços, (em quantidade)</h5>
                            <div className="col s12" >
                                <table className="centered striped responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Produtos consumidos</th>
                                            <th>Serviços utilizados</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Kalil</td>
                                            <td>16</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>Sandro</td>
                                            <td>12</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>João</td>
                                            <td>8</td>
                                            <td>8</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                        <h5 className="text-align: center">Clientes que mais consumiram produtos e serviços (em valor)</h5>
                            <div className="col s12" >
                                <table className="centered striped responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Valor total de produtos</th>
                                            <th>Valor total de serviços</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Sandro</td>
                                            <td>R$160</td>
                                            <td>R$120</td>
                                        </tr>
                                        <tr>
                                            <td>Kalil</td>
                                            <td>R$120</td>
                                            <td>R$100</td>
                                        </tr>
                                        <tr>
                                            <td>João</td>
                                            <td>R$80</td>
                                            <td>R$80</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div id="generoClientes" className="col s12">
                        <div className="row">
                        <h5 className="text-align: center">Clientes (por gênero)</h5>
                            <div className="col s12" >
                                <table className="centered striped responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>João</td>
                                            <td>Masculino</td>
                                        </tr>
                                        <tr>
                                            <td>Sandro</td>
                                            <td>Masculino</td>
                                        </tr>
                                        <tr>
                                            <td>Kalil</td>
                                            <td>Masculino</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr></hr>
                        <h5 className="text-align: center">Produtos e serviços mais consumidos (por gênero)</h5>
                        <div className="row">
                            <div className="col s6" >
                                <table className="centered striped responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Shampoo</td>
                                            <td>M</td>
                                        </tr>
                                        <tr>
                                            <td>Tinta de cabelo</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
    
                            <div className="col s6" >
                                <table className="centered striped responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Serviço</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Creme para pele</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Corte de cabelo</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    
                    <div id="produtosServicosMaisConsumidos" className="col s12">
                        <div className="row" >
                        <h5 className="text-align: center">Produtos mais consumidos</h5>
                            <div className="col s12">
                                <table className="centered striped responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th>Pedidos</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Shampoo</td>
                                            <td>30</td>
                                        </tr>
                                        <tr>
                                            <td>Creme para pele</td>
                                            <td>25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                            <h5 className="text-align: center">Serviços mais consumidos</h5>
                            <div className="col s12">
                                <table className="centered striped responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Serviço</th>
                                            <th>Pedidos</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Manicure</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td>Corte de cabelo</td>
                                            <td>6</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    
                    <div id="clientesMenosConsumiram" className="col s12">
                    <div className="row">
                    <h5 className="text-align: center">Clientes que menos consumiram</h5>
                                <div className="col s12">
                                    <table className="centered striped responsive-table ">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Produtos consumidos</th>
                                                <th>Serviços utilizados</th>
                                            </tr>
                                        </thead>
    
                                        <tbody>
                                            <tr>
                                                <td>Kalil</td>
                                                <td>5</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                <td>Sandro</td>
                                                <td>7</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>João</td>
                                                <td>8</td>
                                                <td>9</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </div>
                </div>
            </>
        )
    }
}