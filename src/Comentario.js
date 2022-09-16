
import React from 'react'

const Comentario = (props) => {   
    return (
        <div className="row">
            <div className="container col-lg-12">
                <div className="card shadow-sm bg-white rounded">                    
                    <div className="card-body d-flex justify-content mx-auto text-center ">
                        <div className="col-md-2 align-items-center m-3">
                            <img src={props.foto} className="img-fluid rounded-circle" style={{width: 80, height: 80}} alt="" />
                            <h4 className='px-3 text-center mt-3'>{props.nome}</h4>
                        </div>
                        <div className="col-md-6 flex-grow-1 align-items-center m-3">
                            <p className="justify-content mx-auto text-center ">{props.comentario}</p>
                            <p className="text-muted mt-2 blockquote-footer text-end">{props.data} {props.hora}</p>
                        </div>
                    </div>
                </div> 
            </div>

        </div>
    )
}
export default Comentario;