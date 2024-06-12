import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import Home from "./home";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaClientes from "./listaCliente";
import ListaProduto from "./listaProduto";
import ListaServiço from "./listaServiço";
import Listagem from "./listagem";
import FormularioCadastroServiço from "./formularioCadastroServiço";
import CadastroCompras from "./compras";
import EditarCliente from "./editarCliente";
import EditarProduto from "./editarProduto";
import EditarServiço from "./editarServiço";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto', 'Editar Serviço']} />
        if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClientes tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Serviços') {
            return (
                <>
                {barraNavegacao}
                <ListaServiço tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar Cliente') {
            return (
                <>
                {barraNavegacao}
                <FormularioCadastroCliente tema="purple-lighten4" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar Produto') {
            return (
                <>
                {barraNavegacao}
                <FormularioCadastroProduto tema="purple-lighten4" />
                </>
            )
            
        } else if (this.state.tela === 'Cadastrar Serviço') {
            return (
                <>
                {barraNavegacao}
                <FormularioCadastroServiço tema="purple-lighten4" />
                </>
            )
        } else if (this.state.tela === 'Compras') {
            return (
                <>
                {barraNavegacao}
                <CadastroCompras tema="purple-lighten4" />
                </>
            )
        } else if (this.state.tela === 'Listagem') {
            return (
                <>
                {barraNavegacao}
                <Listagem tema="purple-lighten4" />
                </>
            )
        } else if (this.state.tela === 'Editar Cliente') {
            return (
                <>
                {barraNavegacao}
                <EditarCliente tema="purple-lighten4" />
                </>
            )
        } else if (this.state.tela === 'Editar Produto') {
            return (
                <>
                {barraNavegacao}
                <EditarProduto tema="purple-lighten4" />
                </>
            )
        } else if (this.state.tela === 'Editar Serviço') {
            return (
                <>
                {barraNavegacao}
                <EditarServiço tema="purple-lighten4" />
                </>
            )
        }
    }
}
