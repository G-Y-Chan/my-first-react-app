import ToDoItem from "./ToDoItem";

function ToDoList(props) {
    return (
        <div>
            {props.toDoList.map((item) => {
                return <ToDoItem toDo={item} key={item.id}></ToDoItem>;
            })}
        </div>
    );
}

export default ToDoList;