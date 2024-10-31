function DefaultButton({ text = "Click me!", color = "black", fontSize = 12 }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return <button style={buttonStyle}>{text}</button>;
}

export default DefaultButton;