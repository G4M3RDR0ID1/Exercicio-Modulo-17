import { useEffect, useState } from "react";
import FormularioProduto from "./components/FormularioProduto.jsx";
import ProdutoCard from "./components/ProdutoCard.jsx"
import './App.css';


function App() {
  //Exemplo de Dados de um produto que veio de uma API

  const [produtos, setProdutos] = useState([])
  const [carregamento, setCarregamento] = useState(true);

  useEffect(()=>{
    setTimeout(() =>{
      const produtosMockados = [
        {
    id: 1,
    nome: 'Smartphone X',
    preco: 1999.99,
    imagem: 'https://images.unsplash.com/photo-1639313265378-1c51cf8cfebd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGlwaG9uZSUyMHByYSUyMHZlbmRhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
    descricao: 'Um smartphone moderno com câmera de alta resolução e bateria de longa duração.'
    },

    {  
    id: 2,
    nome: 'Notebook Y',
    preco: 3499.99,
    imagem: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
    descricao: 'Ideal para trabalho e estudos, com tela Full HD.'
    },

    {
    id: 3,
    nome: 'Fone de Ouvido Z',
    preco: 299.99,
    imagem: 'https://images.unsplash.com/photo-1629429407756-4a7703614972?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZvbmUlMjBkZSUyMG91dmlkb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
    descricao: 'Som imersivo e cancelamento de ruído ativo.'
    }
    ];

    setProdutos(produtosMockados);
    setCarregamento(false);

    }, 2000);
  }, []);

  if(carregamento){
    return <p>Carregando...</p>;
    }

  return (
    <div className="produto-card">
      <h1>Catalogo de Produtos</h1>
      {produtos.map(produto => ( <ProdutoCard key={produto.id} nome={produto.nome} preco={produto.preco} imagem={produto.imagem} descricao={produto.descricao}/>))}
      <FormularioProduto aoAdicionar={(novoProduto) => setProdutos([...produtos, novoProduto])}/>
    </div>
  )
}

export default App
