import { createSlice } from '@reduxjs/toolkit'

const initialData = {
    list: [],
  };

const toDoSlice=createSlice({
    name:'todo',
    initialData,
    reducers:{
        addTodo:(state,action)=>{
            state.list.id=action.payload.id;
            state.list.data=action.payload.data;
        },
        deleteTodo:(state,action)=>{
            const newList= state.list.filter((elm)=>elm.id!==action.payload.id)
            state.list=newList;   
        },
        removeTodo:(state,action)=>{
            state.list=[]
        }

    }
})

export default toDoSlice.reducer;
export const {addTodo,deleteTodo,removeTodo}=toDoSlice.actions;
