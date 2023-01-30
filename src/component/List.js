import "./style.css";

const TodoList = ({ items, deleteitem, onUpdateBtnClick, handleChecked }) => {

  return (
    <div className="listcontainer">
     
    
      <ul>
      {items.map((item) => (
        <li className="singleTodo"  key={item.id}>
         
         { console.log(item.status)}
          <input
            type="checkbox"
          className="checkbox"
            onChange={() => handleChecked(item.id)}
             checked ={
             
                (item.status==='1')? false:true
               
            
            }
           
          />
          
         
          
          <label htmlFor={item.id} className="text" >
            {item.title}
            :
            {new Date().toLocaleString()}
          </label>
         
          
          <button className="delete" onClick={() => deleteitem(item.id)}>
            delete
          </button>
          <button className="update" onClick={() => onUpdateBtnClick(item)}>
            update
          </button>
          
          
        </li>
      ))}
      </ul>
    </div>
    
    
     
    
  );
};

export default TodoList;
