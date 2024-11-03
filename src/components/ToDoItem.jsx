function ToDoItem(props) {
    return (
        <div
            style={{
                border:"solid",
                width:"75%"
            }}
        >
            <h2>{props.toDo.title}</h2>
        </div>
    )
}

export default ToDoItem;