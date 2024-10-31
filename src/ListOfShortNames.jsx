function ListItem(props) {
    return <li>{props.pet.name}</li>;
}

function ListOfShortNames(props) {
    return (
        <ul style={{listStyleType: "none"}}>
            {props.pets.map((pet) => {
                return (pet.name.length <= 4) ? <ListItem key={pet.id} pet={pet} /> : null;
            })}
        </ul>
    )
}

export default ListOfShortNames;