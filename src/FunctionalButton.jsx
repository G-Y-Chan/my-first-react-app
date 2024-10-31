function FunctionalButton({ text = "Click me!", color = "black", fontSize = 12, handleClick}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    );
}

export default FunctionalButton;