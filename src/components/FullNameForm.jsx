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

        </div>
    );
}