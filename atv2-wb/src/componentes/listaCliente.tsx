/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        return (
      <table>
        <thead>
          <tr>
              <th>Nome</th>
              <th>Gênero</th>
              <th>Telefone</th>
              <th>CPF</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Kalil Alves</td>
            <td>Masculino</td>
            <td>12991302250</td>
            <td>542544388-93</td>
          </tr>
          <tr>
            <td>Sandro Pimentel</td>
            <td>Masculino</td>
            <td>12996277345</td>
            <td>000000000-00</td>
          </tr>
          <tr>
            <td>João Eduardo</td>
            <td>Masculino</td>
            <td>12996521142</td>
            <td>000000000-00</td>
          </tr>
        </tbody>
      </table>
        )
    }
}