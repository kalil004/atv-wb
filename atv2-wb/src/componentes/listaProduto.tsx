import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaProduto extends Component<props> {
    render() {
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
              <td>Corte de cabelo</td>
              <td>R$15</td>
            </tr>
            <tr>
              <td>Manicure</td>
              <td>R$60</td>
            </tr>
            <tr>
              <td>Pedicure</td>
              <td>R$40</td>
            </tr>
          </tbody>
        </table>
          )
      }
  }