function Avatar() {
    const avatar = 'https://i.imgur.com/NAGTvvz.png';
    const description = 'Example user';
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