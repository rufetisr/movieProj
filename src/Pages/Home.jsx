import Header from '../Components/Header/header'
import Form from '../Components/Form/form'
import List from '../Components/List/list'
import "../App.css";
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  // const [data, setData] = useState();
  // const [title, setTitle] = useState();
  const [obj, setObj] = useState([]);
  const [arr, setArr] = useState([]);
  // const [id, setId] = useState([])
  return (
    <div className="container">
      <Header />
      <main className='main'>
        <Form obj={obj} setObj={setObj} arr={arr} setArr={setArr}/>
        <List obj={obj} setObj={setObj} arr={arr} setArr={setArr}/>
      </main>
    </div>
  )
}

export default Home;