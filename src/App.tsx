import React, { useState } from "react";
import { Back, Card, Front } from "./components/Card/Card";
import { CardText } from "./components/Card/CardText";
import { CardImage } from "./components/Card/CardImage";

import { test } from "./game/store";
import { FACE, IBoardState } from "./game/schema";
import { Board } from "./components/Board";

test();

const states = [
  {
    index: 0,
    order: 2,
    facing: FACE.UP,
    position: { top: 0.25, left: 0.5 },
    size: {
      width: 200,
      height: 300,
    },
  },
  {
    index: 1,
    order: 2,
    facing: FACE.DOWN,
    position: { bottom: 0.25, right: 0.4 },
    size: {
      width: 160,
      height: 240,
    },
  },
];

const states2 = [
  {
    index: 0,
    order: 1,
    facing: FACE.DOWN,
    position: { top: 0.35, left: 0.6 },
    size: {
      width: 200,
      height: 300,
    },
  },
  {
    index: 1,
    order: 3,
    facing: FACE.DOWN,
    position: { top: 0.35, left: 0.6 },
    size: {
      width: 200,
      height: 300,
    },
  },
];

function App() {
  const [state, setState] = useState(states[0]);
  const [state2, setState2] = useState(states2[0]);

  const boardState: IBoardState = {
    size: {
      width: 1200,
      height: 800,
    },
  };

  return (
    <div>
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
      <button
        onClick={() => {
          if (state2.index === 0) {
            setState2(states2[1]);
          } else {
            setState2(states2[0]);
          }
        }}
      >
        Test animation 2
      </button>
      <Board state={boardState}>
        <Card {...state}>
          <Front>
            <CardText>Some Text Here</CardText>
          </Front>
          <Back>
            <CardImage alt="Alt Text" image="image_url" />
          </Back>
        </Card>
        <Card {...state2}>
          <Front>
            <CardText>Some Text Here</CardText>
          </Front>
          <Back>
            <CardImage alt="Alt Text" image="image_url" />
          </Back>
        </Card>
      </Board>
    </div>
  );
}

export default App;
