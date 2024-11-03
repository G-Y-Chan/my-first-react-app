import ToDoItem from "./ToDoItem";

function ToDoList(props) {
    return (
        <div>
            <h2>Add new task:</h2>
            <input></input>
            <button>Submit</button>
            {props.toDoList.map((item) => {
                return <ToDoItem toDo={item} key={item.id}></ToDoItem>;
            })}
        </div>
    );
}

export default ToDoList;