import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import Home from "./home";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProduto";
import ListaServiço from "./listaServiço";
import Listagem from "./listagem";
import FormularioCadastroServiço from "./formularioCadastroServiço";
import CadastroCompras from "./compras";
import EditarCliente from "./editarCliente";
import EditarProduto from "./editarProduto";
import EditarServiço from "./editarServiço";

export default function Roteador() {
    const [tela, setTela] = useState('Home')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        if (tela === 'Home') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto', 'Editar Serviço']} />
                    <Home tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto', 'Editar Serviço']} />
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto', 'Editar Serviço']} />
                    <ListaProduto tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Serviços') {
            return (
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto', 'Editar Serviço']} />
                <ListaServiço tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Cadastrar Cliente') {
            return (
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto', 'Editar Serviço']} />
                <FormularioCadastroCliente tema="purple-lighten-4" />
                </>
            )
        } else if (tela === 'Cadastrar Produto') {
            return (
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto', 'Editar Serviço']} />
                <FormularioCadastroProduto tema="purple-lighten-4" />
                </>
            )
            
        } else if (tela === 'Cadastrar Serviço') {
            return (
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto', 'Editar Serviço']} />
                <FormularioCadastroServiço tema="purple-lighten-4" />
                </>
            )
        } else if (tela === 'Compras') {
            return (
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto', 'Editar Serviço']} />
                <CadastroCompras tema="purple-lighten-4" />
                </>
            )
        } else if (tela === 'Listagem') {
            return (
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto', 'Editar Serviço']} />
                <Listagem tema="purple-lighten-4" />
                </>
            )
        } else if (tela === 'Editar Cliente') {
            return (
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto', 'Editar Serviço']} />
                <EditarCliente tema="purple-lighten-4" />
                </>
            )
        } else if (tela === 'Editar Produto') {
            return (
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto', 'Editar Serviço']} />
                <EditarProduto tema="purple-lighten-4" />
                </>
            )
        }

        else if (tela === 'Editar Serviço') {
            return (
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-2" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Compras', 'Listagem', 'Editar Cliente', 'Editar Produto', 'Editar Serviço']} />
                <EditarServiço tema="purple-lighten-4" />
                </>
            )
        }
    }
    return (
        construirView()
    )
}