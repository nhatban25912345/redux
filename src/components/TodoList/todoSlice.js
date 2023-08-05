// const initTodoList = [
//         { id: 1, name: "Learn HTML", completed: false, priority: "Medium"},
//         { id: 2, name: "Learn CSS", completed: true, priority: "High"},
//         { id: 3, name: "Learn Redux", completed: false, priority: "Low"},
//     ]
// const todoListReducer = ( state = initTodoList, action ) => {
//     switch (action.type) {
//         case "todoList/addTodo":
//             return [
//                 ...state,
//                 action.payload
//             ]
//         case "todoList/togleTodoStatus":
//             return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)

//         default:
//             return [
//                 ...state
//             ]
//     }
// }

// export default todoListReducer;
import { createSlice } from "@reduxjs/toolkit";

let todoListData = [
    { id: 1, name: "Learn HTML", completed: false, priority: "Medium"},
    { id: 2, name: "Learn CSS", completed: true, priority: "High"},
    { id: 3, name: "Learn Redux", completed: false, priority: "Low"},
    { id: 4, name: "Learn Redux", completed: false, priority: "Low"},
];
if (localStorage.getItem("todoList")){
    todoListData = JSON.parse(localStorage.getItem("todoList")) ;
}
console.log("todoListData :", todoListData);


export const todoListSlice = createSlice({
    name: "todoList",
    // initialState: todoListData,
    initialState: [
        { id: 1, name: "Learn HTML", completed: false, priority: "Medium"},
        { id: 2, name: "Learn CSS", completed: true, priority: "High"},
        { id: 3, name: "Learn Redux", completed: false, priority: "Low"},
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
            console.log(... state);
        },
        togleTodoStatus: (state, action) => {
            // state.map(todo => todo.id === action.payload ? todo.completed = !todo.completed : todo);
            const currentTodo = state.find(todo => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        },
        
    }
})