import * as z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[],
  length: number,
  completed: number,
  pending: number
}

// ? VALIDACIÓN CON ZOD
const TodoValidation = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateValidation = z.object({
  todos : z.array(TodoValidation),
  length : z.number(),
  completed : z.number(),
  pending : z.number(),
});

export type TaskActions = 
{type: 'ADD_TODO'; payload: string} |
{type: 'TOGGLE_TODO'; payload: number} |
{type: 'DELETE_TODO'; payload: number};

export const taskInitialState = ():TaskState => {
  const localData = localStorage.getItem('task-item');

  if(!localData){
    return{
      todos: [],
      length: 0,
      completed: 0,
      pending: 0
    };  
  }
  
  const result = TaskStateValidation.safeParse(JSON.parse(localData));

  if(result.success) return result.data;

  return{
    todos: [],
    length: 0,
    completed: 0,
    pending: 0
  };
}

export const taskReducer = (state:TaskState, action:TaskActions) => {
  
  switch(action.type){
    case 'ADD_TODO': {
      const task:Todo = {
        id: Date.now(), 
        text: action.payload,
        completed: false
      };
      const updatedList = [task,...state.todos];

      return {
        ...state,
        todos: updatedList,
        length: updatedList.length,
        pending: state.pending + 1
      };
    }
    
    case 'TOGGLE_TODO': {
      const updatedList = state.todos.map(
        (todo) => {
          if(todo.id === action.payload){
            return {...todo, completed: !todo.completed}
          };
          return todo;
        }
      );
      const comTodo = updatedList.filter(todo => todo.completed);
      const penTodo = updatedList.filter(todo => !todo.completed);
      
      return {
        ...state,
        todos: updatedList,
        completed:comTodo.length,
        pending: penTodo.length,
      };
    }
    
    case 'DELETE_TODO': {
      const updatedList = state.todos.filter((todo) => todo.id !== action.payload);
      const comTodo = updatedList.filter(todo => todo.completed);
      const penTodo = updatedList.filter(todo => !todo.completed);
      return {
        ...state,
        todos: updatedList,
        length: updatedList.length,
        completed:comTodo.length,
        pending: penTodo.length,
      };
    }

    default :
      return state;
  }
}