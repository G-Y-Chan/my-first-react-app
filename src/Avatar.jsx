function ListItem(props) {
    return <li>{props.pet.name}</li>
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
                return <ListItem key={pet.id} pet={pet} />;
            })}
        </ul>
    );
}

function ListOfShortNames(props) {
    return (
        <ul>
            {props.pets.map((pet) => {
                return (pet.name.length <= 4) ? <ListItem key={pet.id} pet={pet} /> : null;
            })}
        </ul>
    )
}

function Avatar() {
    const avatar = 'https://i.imgur.com/NAGTvvz.png';
    const description = 'Example user';
    const pets = [{ 
        id: 0, 
        name: "Ace"
    }, { id: 1,
         name: "Bambi"
    }, { id: 2,
         name: "Gus"
    }, { id: 3,
         name: "Waffles"
    }];
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