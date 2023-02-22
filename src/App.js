import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputData } from './actions';

import './App.css';

function App() {
  const {text=''} = useSelector(store => store.App);
  const dispatch = useDispatch();

  const setText = (v) => {
    dispatch(setInputData(v))
  }


  const intoArray = () => {
    dispatch({
      type: 'set_Fruits_data',
    })
  }

  return (
    <>
      <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <span>
        <button onClick={intoArray}>press</button>
      </span>
      </div>

      <SomeChild />
      <Fruits />
    </>
  );
}


const SomeChild = (props) => {
  const {text=''} = useSelector(store => store.App);
  return <p>Type value = <span>{text}</span></p>
}


const Fruits = () => {
  const {fruits=[]} = useSelector(store => store.App);
  const dispatch = useDispatch();


  const remveItm = (i) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: i
    })

  }

  return fruits.map((r, i) => <p key={r}>{r} <span><button onClick={e => remveItm(i)}>delete</button></span></p>)
}

export default App;
