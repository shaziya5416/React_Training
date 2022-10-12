import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo, deleteTodo, removeTodo } from '../../actions';

import './todo.css';

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your List here:</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add items"
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(''))}
            >
              +
            </i>
          </div>
          <div className="showItems">
            {list.map((elm) => {
              return (
                <div className="eachItem" key={elm.id}>
                  <h3>{elm.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() =>
                        dispatch(deleteTodo(elm.id), setInputData(''))
                      }
                    >
                      Delete
                    </i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="remove All" onClick={()=>{dispatch(removeTodo())}}>
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
