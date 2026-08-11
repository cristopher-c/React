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

export type TaskActions = 
{type: 'ADD_TODO'; payload: string} |
{type: 'TOGGLE_TODO'; payload: number} |
{type: 'DELETE_TODO'; payload: number};

export const taskInitialState = ():TaskState => {
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