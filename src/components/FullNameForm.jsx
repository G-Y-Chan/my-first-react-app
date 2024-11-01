import { useState } from "react";

function FullNameForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <div>
            <label>
                First name:
            </label>
            <input
                onChange={e => handleFirstNameChange(e)}
            >
            </input>
            <label>
                Last name:
            </label>
            <input
                onChange={e => handleLastNameChange(e)}
            >
            </input>
            <p>Full name: {firstName} {lastName}</p>
        </div>
    );
}

export default FullNameForm;