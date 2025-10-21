import React from "react";

function ProdutoCard(props){
    const {nome, preco, imagem, descricao} = props

    return (
        <div className="produto-card">
        <img src={imagem} alt={nome}/>
        <h2>{nome}</h2>
        <p>{descricao}</p>
        <strong>R$ {preco}</strong>
        </div>
    );
}

export default ProdutoCard;