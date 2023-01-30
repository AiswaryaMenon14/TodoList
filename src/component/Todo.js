import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "./style.css";
import List from "./List";
import { v4 as uuid } from "uuid";

function Todo() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "Abc",
      status: '1',
    },
  ]);

  const [formValues, setFormValues] = useState({
    title: "",
    status: '1',
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [dropDown, setDropDown] = useState("");

  const handleDropdown = (e) => {
    setDropDown( e.target.value );
  };
  
  const addToList = (addedItem) => {

    setList((prevList) => {
      return [
        ...prevList,
        {
          id: uuid(),
          title: addedItem.title,
          status: addedItem.status,
        },
      ];
    });

    setFormValues({
      title: "",
      status: '1',
    });
  };

  const handleDelete = (id) => {
    const delTodo = list.filter((tod) => tod.id !== id);
    setList(delTodo);
  };

  const formOpen = () => setIsFormOpen(true);
  const formClose = () => setIsFormOpen(false);

  const formHandler = (event) => {
    
    setFormValues(() => ({
      ...formValues,
      [event.target.name]: event.target.value,
     
    }));
  };

  const onUpdateBtnClick = (selectedItem) => {
    formOpen();
    setIsFormEdit(true);

    setFormValues(selectedItem);
  };
  

  const handleClose = () => {
    formClose();

    setFormValues({
      title: "",
      status: '1',
    });
  };

  const [checked, setIschecked] = useState(false);
  const check=(status)=>{
      
    if (status === '1') return '2';
    return '1'
}
  const handleChecked = (id) => {
    
    const newItem = list.map((todo) => {
      if (todo.id === id) return { ...todo, status:check(todo.status)
       
       };
      return todo
    });

    setList(newItem);
    // console.log(newItem.status)
  };

  const listFilter = () => {
    
    if (dropDown ==='2') {
      return (list.filter((item) => item.status === '2')
      );
    } else if (dropDown === '1') {
      return list.filter((item) => item.status ==='1' );
    } else return list;
  };

  const editList = (value) => {
    const filteredData = list.filter((tod) => tod.id !== value.id);
    // console.log(value)
    //  let updatedList = [...filteredData, {...formValues,status:Boolean(formValues.status)}];
     let updatedList = [...filteredData, {...formValues}];
// console.log(updatedList)
    setList(updatedList);
    
    setFormValues({
      title: "",
      status: '1',
    });
  };
  
  return (
    <div>
      <div>
        <p className="heading">TODO LIST</p>
        <div className="list">
          <button className="button1" onClick={formOpen}>
            Add task
          </button>
          <select
            className="dropdown-btn"
            name="select"
            onChange={handleDropdown}
          >
            <option>All</option>
            <option value='1'>Incomplete</option>
            <option value='2'>Complete</option>
          </select>
        </div>
      </div>
      
      <List
        items={listFilter()}
        
        deleteitem={handleDelete}
        onUpdateBtnClick={onUpdateBtnClick}
        handleChecked={handleChecked}
      />
      {isFormOpen && (
        <TaskForm
          onChangeHandler={formHandler}
          close={handleClose}
          onSubmit={isFormEdit ? editList : addToList}
          data={formValues}
          checked={checked}
          setChecked={setIschecked}
        />
      )}
    </div>
  );
}

export default Todo;
