import ToDoItem from "./ToDoItem";
import { useState } from "react";

const newTask = {}

function handleSubmitEvent(taskList, setTaskList, newTask) {
    if (newTask.hasOwnProperty("title")) {
        newTask.id = taskList.length;
        setTaskList([...taskList, newTask]);
    }
}

function ToDoList(props) {
    const [taskList, setTaskList] = useState(props.toDoList);
    console.log(taskList);

    return (
        <div>
            <h2>Add new task:</h2>
            <input
                onChange={(e) => {
                    newTask.title = e.target.value;
                }}
            ></input>
            <button
                onClick={() => handleSubmitEvent(taskList, setTaskList, newTask)}
            >
                Submit
            </button>
            {taskList.map((item) => {
                return <ToDoItem toDo={item} key={item.id}></ToDoItem>;
            })}
        </div>
    );
}

export default ToDoList;