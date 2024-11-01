import { useState } from "react";
import { sculptureList } from "./data/SculptureList";

function SculptureDisplay() {
    const [sculptureIndex, setSculptureIndex] = useState(0);

    const decrementSculptureIndex = () => {
        if (sculptureIndex == 0) {
            setSculptureIndex(sculptureList.length-1);
        } else {
            setSculptureIndex(sculptureIndex - 1);
        }
    }

    const incrementSculptureIndex = () => {
        if (sculptureIndex < sculptureList.length-1) {
            setSculptureIndex(sculptureIndex + 1);
        } else {
            setSculptureIndex(0);
        }
    }

    return (
        <div>
            <h1>{sculptureList[sculptureIndex].name}</h1>
            <h2>
                By: {sculptureList[sculptureIndex].artist}
            </h2>
            <img
                src={sculptureList[sculptureIndex].url}
                alt={sculptureList[sculptureIndex].alt}
            ></img>
            <p>
                {sculptureList[sculptureIndex].description}
            </p>
            <button
                onClick={decrementSculptureIndex}
            >
                Previous
            </button>
            <button
                onClick={incrementSculptureIndex}
            >
                Next
            </button>
        </div>
    )
}

export default SculptureDisplay;