import {selector} from 'recoil';
import { todoState } from "./atom";

export const TodoList = selector({
    key: 'todoList', 
    get: ({ get }) => {
        const list = get(todoState);
        return list.length;
    },
});