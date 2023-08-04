import "./styles.css";
import { todoState } from "./atom";
import {useRecoilValue } from 'recoil';




export function Record(){
    const todoList = useRecoilValue(todoState);
    console.log(todoList)
    return(
        <div className="recordMain">
            {todoList.map((todo)=>(
                <div className="recordInner"> <p>{todo.todo}</p></div>
            ))}
        </div>
    )
}