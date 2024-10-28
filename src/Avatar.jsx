function Avatar() {
    const avatar = 'https://i.imgur.com/NAGTvvz.png';
    const description = 'Example user';
    return (
        <img 
            className="avatar"
            src={avatar}
            alt={description}
        />
    );
}

export default Avatar;