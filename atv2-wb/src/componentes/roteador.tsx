import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import Home from "./home";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProduto";
import ListaServiço from "./listaServiço";

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
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto']} />
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
                    <ListaCliente tema="purple lighten-4" />
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
            
        }
        

    }
}
