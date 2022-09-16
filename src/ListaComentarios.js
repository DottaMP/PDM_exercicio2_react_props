import React from 'react'

const ListaComentarios = (props) => {   
    return (
        <div className={estilo.principal}>
            {props.children}
        </div>   
    )
}
const estilo = {
    principal: 'card shadow-sm p-3 mb-5 bg-white rounded'
}

export default ListaComentarios;