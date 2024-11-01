import { useState } from "react";

const COLORS = ["white", "pink", "green", "blue", "yellow", "purple"];

function ColorBox() {
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

    const onButtonClick = (color) => () => {
        setBackgroundColor(color);
    };

    return (
        <div
            style={{
                border: "solid",
                height: "100px",
                width: "50%",
                backgroundColor: backgroundColor,
            }}>
            {COLORS.map((color) =>
            <button onClick={onButtonClick(color)}>
                {color}
            </button>
            )}
        </div>
    );
}

export default ColorBox;