import 'materialize-css/dist/css/materialize.min.css'

export default function Home(props) {
    const estiloBotao = `btn btn-xl waves-effect waves-light purple lighten-2 ${props.tema}`;

    return (
        <div className="container" style={{ marginTop: "50px" }}>
            <h1 className="center-align">Bem vindo ao World's Beauty</h1>
            <h4 className="center-align" style={{ marginBottom: "30px", fontSize: "24px" }}>Inicie cadastrando algum dado</h4>

            <div className="row center-align">
                <div className="col s12">
                    <button className={estiloBotao}>Cadastrar Cliente</button>
                </div>
                <div className="col s12" style={{ marginTop: "20px" }}>
                    <button className={estiloBotao}>Cadastrar Produto</button>
                </div>
                <div className="col s12" style={{ marginTop: "20px" }}>
                    <button className={estiloBotao}>Cadastrar Serviço</button>
                </div>
            </div>
        </div>
    )
}
