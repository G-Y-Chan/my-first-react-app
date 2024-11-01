import { useState } from "react";
import { sculptureList } from "./data/SculptureList";

function SculptureDisplay() {
    const [sculptureIndex, setSculptureIndex] = useState(0);

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
        </div>
    )
}

export default SculptureDisplay;