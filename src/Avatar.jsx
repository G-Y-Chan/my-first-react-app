function ListItem(props) {
    return <li>{props.pet}</li>
}

function List(props) {
    return (
        <ul>
            {props.pets.map((pet) => {
                return <ListItem key={pet} pet={pet} />;
            })}
        </ul>
    );
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
        </div>
    );
}

export default Avatar;