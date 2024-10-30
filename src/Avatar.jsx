function ListItem(props) {
    return <li>{props.animal}</li>
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
    const petsList = pets.map((pet) => <li key={pet}>{pet}</li>);
    return (
        <div>
            <h1>User Information</h1>
            <img 
                className="avatar"
                src={avatar}
                alt={description}
            />
            <h2>Pets:</h2>
            <ul>
                {petsList}
            </ul>
        </div>
    );
}

export default Avatar;