import React from 'react'

const Cartao = (props) => {   
    return (
        <div className="card border-warning">
            {/* corpo do cartão */}
            <div className="card-body ">{props.children}</div>
        </div> 
    )
}
export default Cartao;