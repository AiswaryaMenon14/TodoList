


function TaskForm({ close, onSubmit, onChangeHandler, data}) {

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onSubmit(data);

  };

  console.log(data)
  
  return (
    <div className="heading2">
      <div>
        <button className="close" onClick={close}>
          ×
        </button>
      </div>
      <div className="container">
        <form className="form" onSubmit={onSubmitHandler}>
          <h2 className="addhead">Add TODO</h2>

          <label htmlFor="title">Title</label>
          <input
            type="text"
             id="title"
            name="title"
            value={data.title}
            onChange={onChangeHandler}
          />

          <label htmlFor="status" name="status" >
            Status
          </label>
          
          <select name="status" onChange={onChangeHandler} value={data.status}>
            <option>Select</option>
            <option value='1' >Incomplete</option>
            <option value='2' >Complete</option>
          </select>

          <div className="formbutton">
            <button className="button1" type="submit">
              Add Task
            </button>
            <button className="cancelbtn" onClick={close}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
