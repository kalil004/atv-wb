import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaProduto extends Component<props> {
    render() {
        let estilo = `collection-item active purple lighten-2 ${this.props.tema}`
        return (
<table>
        <thead>
          <tr>
              <th>Nome</th>
              <th>Valor por unidade</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Shampoo</td>
            <td>R$15</td>
          </tr>
          <tr>
            <td>Creme para pele</td>
            <td>R$20</td>
          </tr>
          <tr>
            <td>Tinta de cabelo</td>
            <td>R$45</td>
          </tr>
        </tbody>
      </table>
        )
    }
}