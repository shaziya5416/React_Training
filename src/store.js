// import { createStore } from "redux";

// import rootReducer from "./reducers";

// const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;



import { configureStore } from '@reduxjs/toolkit'
import todoReducers from './toDoSlice';
export default configureStore({
  reducer: {
    todo: todoReducers
  }
})