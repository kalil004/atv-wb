import 'materialize-css/dist/css/materialize.min.css'

export default function ListaServiço(props) {

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

