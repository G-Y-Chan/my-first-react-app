import List from "./List.jsx";
import ListOfShortNames from "./ListOfShortNames.jsx";

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