import { configureStore } from "@reduxjs/toolkit";
import { addTodo, removeTodo } from "../features/todo/todoslice";

const store = configureStore({
    reducer: {addTodo,removeTodo}
})

export default store;