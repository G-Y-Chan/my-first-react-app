import { useState } from "react";

const COLORS = ["white", "pink", "green", "blue", "yellow", "purple"];

function ColorBox() {
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
    const [colorChangeCount, setColorChangeCount] = useState(0);

    const onButtonClick = (color) => () => {
        setBackgroundColor(color);
        setColorChangeCount(colorChangeCount + 1);
    };

    return (
        <div
            style={{
                border: "solid",
                height: "auto",
                width: "auto",
                backgroundColor: backgroundColor,
            }}>
            <h2>
                Number of color changes: {colorChangeCount}
            </h2>
            {COLORS.map((color) =>
            <button onClick={onButtonClick(color)}>
                {color}
            </button>
            )}
        </div>
    );
}

export default ColorBox;