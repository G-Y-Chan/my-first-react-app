function Button({ text, color, fontSize }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return <button style={buttonStyle}>{text}</button>;
}

export default Button;