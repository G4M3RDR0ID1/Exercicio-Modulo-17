import { useState } from "react";

function FormularioProduto({aoAdicionar}){

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [preco, setPreco] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoProduto = {
            id: Date.now(),
            nome,
            preco: parseFloat(preco),
            imagem,
            descricao
        };

        aoAdicionar(novoProduto);

        setNome('');
        setDescricao('');
        setImagem('');
        setPreco('');
    }

    return (

        <form onSubmit={handleSubmit}>
            <h2>Adicionar Produto</h2>
            <input 
                type="text" 
                placeholder="Nome do Produto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <textarea 
                placeholder="Descrição do produto" 
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
            ></textarea>
            <input 
                type="number" 
                placeholder="R$0,00"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required
             />
             <input 
                type="text"
                placeholder="Url da imagem"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
                required
            />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormularioProduto;