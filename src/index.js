// import { Todo } from './classes/todo-class.js';
// import { TodoList } from './classes/todo-list.class.js';
import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTodohtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach( crearTodohtml);

console.log( ' Todos ', todoList.todos);