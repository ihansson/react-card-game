import React, { useState } from "react";
import { calculateTransformFromPosition } from "./components/Stack";
import { Back, Card, Front } from "./components/Card/Card";
import { CardText } from "./components/Card/CardText";
import { CardImage } from "./components/Card/CardImage";

import { test } from "./game/store";
import { FACE, ISize } from "./game/schema";
import { Board } from "./components/Board";

test();

const states = [
  {
    index: 0,
    facing: FACE.UP,
    position: { top: 0.25, left: 0.5 },
    cardSize: {
      width: 200,
      height: 300,
    },
  },
  {
    index: 1,
    facing: FACE.DOWN,
    position: { bottom: 0.25, right: 0.4 },
    cardSize: {
      width: 160,
      height: 240,
    },
  },
];

function App() {
  // Testing animating card

  const [state, setState] = useState(states[0]);

  const boardSize: ISize = {
    width: 1200,
    height: 800,
  };

  return (
    <Board>
      <button
        onClick={() => {
          if (state.index === 0) {
            setState(states[1]);
          } else {
            setState(states[0]);
          }
        }}
      >
        Test animation
      </button>
      <Card
        facing={state.facing}
        transform={calculateTransformFromPosition(
          state.position,
          state.cardSize,
          boardSize,
          { width: 0, height: 0 }
        )}
      >
        <Front>
          <CardText>Some Text Here</CardText>
        </Front>
        <Back>
          <CardImage alt="Alt Text" image="image_url" />
        </Back>
      </Card>
    </Board>
  );
}

export default App;
