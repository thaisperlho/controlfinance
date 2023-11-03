import React, {useState, useEffect} from 'react'
import GlobalStyle from './styles/global'
import { Header } from './components/Header'
import { Resume } from './components/Resume'
import { Form } from './components/Form'

const App = () => {
  // o metodo getItem vai pegar os dados do localStorage
  const data = localStorage.getItem("transacao");
  const [listadeTransacoes, setListadeTransacoes] = useState(
    // verificar se tem algo no localStorage
    data ? 
    // se tiver ele vai converter para JSON
    JSON.parse(data) :
    // se não tiver ele vai retornar um array vazio 
    []
  );

  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //pegar o total de saidas
    const totalSaidas = listadeTransacoes
    .filter((item) => item.saida)
    .map((transacao) => Number(transacao.entrada));
    //pegar o total de entradas
    const totalEntradas = listadeTransacoes
    .filter((item) => !item.saida)
    .map((transacao) => Number(transacao.entrada));
    //calcula o total de entradas e saidas e jogar em total
    const saida = totalSaidas.reduce((acc, curr) => acc + curr, 0).toFixed(2);
    const entrada = totalEntradas.reduce((acc, curr) => acc + curr, 0).toFixed(2);
    const total = Math.abs(entrada - saida).toFixed(2);
    //seta as entradas, saidas e total no useState
    setEntrada(`R$ ${entrada}`);
    setSaida(`R$ ${saida}`);
    setTotal(`${Number(entrada) < Number(saida)? "-": ""} R$ ${total}`);
  }, [listadeTransacoes]);

  //adicionar
  const handleAdd = (transacao) => {
    const novaTransacao = [...listadeTransacoes, transacao];
    setListadeTransacoes(novaTransacao);
    localStorage.setItem("transacao", JSON.stringify(novaTransacao));
  };


  return (
    <>
    <Header/>
    <Resume entrada={entrada} saida={saida} total={total}/>
    <Form handleAdd={handleAdd}/>
    <GlobalStyle/>
    </>
  )
}

export default App