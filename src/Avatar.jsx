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
        </div>
    );
}

export default Avatar;