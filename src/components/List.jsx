function ListItem(props) {
    return <li>{props.pet.name}</li>;
}

function List(props) {
    if (!props.pets) {
        return <div>Loading...</div>;
    }

    if (props.pets.length === 0) {
        return <div>There are no pets in the list!</div>;
    }

    return (
        <ul style={{listStyleType: "none"}}>
            {props.pets.map((pet) => {
                return <ListItem key={pet.id} pet={pet} />;
            })}
        </ul>
    );
}

export default List;