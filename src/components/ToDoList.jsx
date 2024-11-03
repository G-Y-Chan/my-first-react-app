import ToDoItem from "./ToDoItem";
import { useState } from "react";

function handleSubmitEvent(taskList, setTaskList, taskNumber, setTaskNumber, taskTitle) {
    if (taskTitle.length > 0) {
        let newTask = {
            id: taskNumber,
            title: taskTitle
        };
        setTaskList([...taskList, newTask]);
        setTaskNumber(taskNumber + 1);
    }
}

function ToDoList(props) {
    const [taskList, setTaskList] = useState(props.toDoList);
    const [taskNumber, setTaskNumber] = useState(taskList.length);
    const [taskTitle, setTaskTitle] = useState("");

    return (
        <div>
            <h2>Add new task:</h2>
            <input
                onChange={(e) => {
                    setTaskTitle(e.target.value);
                }}
            ></input>
            <button
                onClick={() => {
                    handleSubmitEvent(taskList, setTaskList, taskNumber, setTaskNumber, taskTitle);
                }}
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