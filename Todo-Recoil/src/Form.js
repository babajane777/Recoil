import react from 'react'
import './styles.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from 'recoil';
import { useState } from 'react';
import {List} from './List';
import {todoState} from "./atom";

export function Form() {
  const [todoArray, setTodoArray] = useRecoilState(todoState);
  const [value, setValue] = useState('');

  const setTodoList = useSetRecoilState(todoState)


 
  
  const handleChange = (e) => {
    setValue(e.target.value);
  }


  const handleTodo = () => {
    let newtodo ={id:todoArray.length + 1, todo:value}
    setTodoList((oldTodoList) => [
      ...oldTodoList,newtodo
    ]);
    setValue('');
  }

  // const handleDelete = (id) => {
  //   console.log(id)
  //   let filteredArray = todoArray.filter((todo) => todo.id !== id);
  //   setTodoArray(filteredArray);
  // }
  
  return (
    <>
    <div className="form">
      <input
        onChange={(e)=>{handleChange(e)}}
        value={value}
        placeholder="Whats on your mind?"
        required
      />
      <button onClick = {handleTodo} >Add</button>
    </div>
    <div>
     <List />
     
    </div>
    </>
  );
}
