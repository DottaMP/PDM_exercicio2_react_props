import React from 'react'

const ListaComentarios = (props) => {   
    return (
        <div className="card shadow-sm p-3 mb-5 bg-white rounded">
            {/* corpo do cartão */}
            <div className="card-body">{props.children}</div>
        </div>   
    )
}
export default ListaComentarios;