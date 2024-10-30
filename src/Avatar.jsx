function ListItem(props) {
    return <li>{props.pet}</li>
}

function List(props) {
    if (!props.pets) {
        return <div>Loading...</div>;
    }

    if (props.pets.length === 0) {
        return <div>There are no pets in the list!</div>;
    }

    return (
        <ul>
            {props.pets.map((pet) => {
                return <ListItem key={pet} pet={pet} />;
            })}
        </ul>
    );
}

function ListOfShortNames(props) {
    return (
        <ul>
            {props.pets.map((pet) => {
                return (pet.length <= 4) ? <ListItem key={pet} pet={pet} /> : null;
            })}
        </ul>
    )
}

function Avatar() {
    const avatar = 'https://i.imgur.com/NAGTvvz.png';
    const description = 'Example user';
    const pets = ["Lion", "Cow", "Snake", "Lizard"];
    return (
        <div>
            <h1>User Information</h1>
            <img 
                className="avatar"
                src={avatar}
                alt={description}
            />
            <h2>Pets:</h2>
            <List pets={pets} />
            <h2>Pets with short names:</h2>
            <ListOfShortNames pets={pets} />
        </div>
    );
}

export default Avatar;