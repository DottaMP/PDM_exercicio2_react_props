import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Cartao from './Cartao'
import Comentario from './Comentario'
import Feedback from './Feedback'
import ListaComentarios from './ListaComentarios'

import foto1 from './images/foto1.jpg'
import foto2 from './images/foto2.jpg'
import foto3 from './images/foto3.jpg'

const App = () => {

    const textoOK = "Aprovar"
    const textoNOK = "Não Aprovar"
    const funcaoOK = () => alert ("Aprovado!")
    const funcaoNOK = () => alert ("Não Aprovado!")
    const componenteFeedback = <Feedback textoOK={textoOK} funcaoOK={funcaoOK} textoNOK={textoNOK} funcaoNOK={funcaoNOK}/>;

    return (
        <div className="container mt-2">

            {/*pessoa 1*/}
            <div className="row">
                <div className="col-lg-12 m-2 ">
                    <Cartao>
                        <Comentario nome="Mayara" foto={foto1} comentario="Mussum Ipsum, cacilds vidis litro abertis. 
                            Diuretics paradis num copo é motivis de denguis.Pra lá , depois divoltis porris, paradis.
                            Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Manduma pindureta quium 
                            dia nois paga." data='15/09/2022' hora=' 21:00'/>
                        {componenteFeedback}

                    </Cartao>
                </div>
            </div>

            {/*pessoa 2*/}
            <div className="row">
                <div className="col-lg-12 m-2 ">
                    <Cartao>
                        <Comentario nome="Joao" foto={foto2}  comentario="Mussum Ipsum, cacilds vidis litro abertis. 
                        Diuretics paradis num copo é motivis de denguis.Pra lá , depois divoltis porris, paradis.
                        Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Manduma pindureta quium 
                        dia nois paga." data='15/09/2022' hora=' 19:20'/>
                        {componenteFeedback}
                    </Cartao>
                </div>
            </div>

            {/*pessoa 3*/}
            <div className="row">
                <div className="col-lg-12 m-2 ">
                    <Cartao>
                        <Comentario nome="Maria" foto={foto3}  comentario="Mussum Ipsum, cacilds vidis litro abertis. 
                        Diuretics paradis num copo é motivis de denguis.Pra lá , depois divoltis porris, paradis.
                        Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Manduma pindureta quium 
                        dia nois paga." data='15/09/2022' hora=' 17:30'/>
                        {componenteFeedback}
                    </Cartao>
                </div>
            </div>

        </div>
    )
}

ReactDOM.render( //render = renderizar
    <App />,
    document.querySelector('#root') //busca por qualquer seletor e não só pelo id
)
