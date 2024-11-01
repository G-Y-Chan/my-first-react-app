import List from "./List.jsx";
import ListOfShortNames from "./ListOfShortNames.jsx";
import Button from "./Button.jsx";
import DefaultButton from "./DefaultButton.jsx";
import FunctionalButton from "./FunctionalButton.jsx";
import ColorBox from "./ColorBox.jsx";
import SculptureDisplay from "./SculptureDisplay.jsx";
import FullNameForm from "./FullNameForm.jsx";

const goToGoogle = () => {
    window.location.href = "https://www.google.com";
};

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
            <h2>Random buttons:</h2>
            <Button text="Click me!" color="blue" fontSize={20}/>
            <DefaultButton text="Overide text"/>
            <h2>Do a google search:</h2>
            <FunctionalButton text="Google" handleClick={goToGoogle}/>
            <ColorBox></ColorBox>
            <SculptureDisplay></SculptureDisplay>
            <FullNameForm></FullNameForm>
        </div>
    );
}

export default Avatar;