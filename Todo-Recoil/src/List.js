
import { Todo } from "./Todo";
import { useRecoilValue , useRecoilState , useSetRecoilState} from 'recoil';
import { todoState } from './atom';

export function List() {
  
  const[todos, setTodos] = useRecoilState(todoState);
  // const todos = useRecoilValue(todoState);

  // const deletedlist = useSetRecoilState(todoState);

  const deletetodo = (id) => { 
    const filteredArray = todos.filter((todo)=> todo.id != id);
    setTodos(filteredArray);
    // deletedlist(filteredArray);
  }

  return (
    <div className="list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={() => {deletetodo(todo.id)}}/>
      ))}
    </div>
  );
}

