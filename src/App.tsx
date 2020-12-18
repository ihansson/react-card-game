import React, { useState } from "react";
import { Back, Card, Front } from "./components/Card/Card";
import { CardText } from "./components/Card/CardText";
import { CardImage } from "./components/Card/CardImage";

import { test } from "./game/store";
import { FACE, IStackAny, StackId } from "./game/schema";
import { Board } from "./components/Board";
import { Stack } from "./components/Stack";

test();

/*
@TODO

- Nice test graphics
- Testing data / using reducer
- Convert all units to percentage
- Use ratios for sizes where relevant
- Sort out schema / stack props
*/

const states = [
  {
    index: 0,
    id: "card-a",
    stack: "stack-a",
    order: 0,
    facing: FACE.UP,
  },
  {
    index: 1,
    id: "card-a",
    stack: "stack-b",
    order: 1,
    facing: FACE.DOWN,
  },
];

const states2 = [
  {
    index: 0,
    id: "card-b",
    stack: "stack-a",
    order: 1,
    facing: FACE.DOWN,
  },
  {
    index: 1,
    id: "card-b",
    stack: "stack-b",
    order: 0,
    facing: FACE.UP,
  },
];

function App() {
  const [state, setState] = useState(states[0]);
  const [state2, setState2] = useState(states2[0]);

  const stacks: Record<StackId, IStackAny> = {
    "stack-a": {
      id: "stack-a",
      mode: "pile",
      position: { top: 0.25, left: 0.5 },
      cardSizeMode: "fixed",
      cardPositionShift: { width: 5, height: 5 },
      cardSize: {
        width: 200,
        height: 300,
      },
    },
    "stack-b": {
      id: "stack-b",
      mode: "grid",
      gridColumns: 3,
      gridGutter: 20,
      position: { bottom: 0.5, left: 0.5 },
      cardSizeMode: "fit",
      stackSize: {
        width: 400,
        height: 800,
      },
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
      <Board
        size={{
          width: 1200,
          height: 800,
        }}
      >
        <Stack {...stacks["stack-a"]}>
          <span>Some stack content</span>
        </Stack>
        <Stack {...stacks["stack-b"]}>
          <span>Some stack content</span>
        </Stack>
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
            <CardText>Some Text Here</CardText>
          </Back>
        </Card>
      </Board>
    </div>
  );
}

export default App;
