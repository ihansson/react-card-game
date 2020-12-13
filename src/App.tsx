import React from "react";
import { Stack } from "./components/Stack";
import { Back, Card, Front } from "./components/Card/Card";
import { CardText } from "./components/Card/CardText";
import { CardImage } from "./components/Card/CardImage";

import { test } from "./game/store";
import { FACE, ISize } from "./game/schema";
import { Board } from "./components/Board";

test();

function App() {
  const boardSize: ISize = {
    width: 1200,
    height: 800,
  };
  const cardSize: ISize = {
    width: 200,
    height: 300,
  };

  const stackOptions = {
    boardSize,
    cardSize,
  };

  return (
    <Board>
      <Stack position={{ top: 0.25, left: 0.5 }} {...stackOptions}>
        <Card facing={FACE.UP}>
          <Front>
            <CardText>Some Text Here</CardText>
          </Front>
          <Back>
            <CardImage alt="Alt Text" image="image_url" />
          </Back>
        </Card>
        <Card facing={FACE.UP}>
          <Front>
            <CardText>Some Text Here</CardText>
          </Front>
          <Back>
            <CardImage alt="Alt Text" image="image_url" />
          </Back>
        </Card>
        <Card facing={FACE.UP}>
          <Front>
            <CardText>Some Text Here</CardText>
          </Front>
          <Back>
            <CardImage alt="Alt Text" image="image_url" />
          </Back>
        </Card>
        <Card facing={FACE.UP}>
          <Front>
            <CardText>Some Text Here</CardText>
          </Front>
          <Back>
            <CardImage alt="Alt Text" image="image_url" />
          </Back>
        </Card>
        <Card facing={FACE.UP}>
          <Front>
            <CardText>Some Text Here</CardText>
          </Front>
          <Back>
            <CardImage alt="Alt Text" image="image_url" />
          </Back>
        </Card>
      </Stack>
      <Stack position={{ bottom: 0.25, right: 0.5 }} {...stackOptions}>
        <Card facing={FACE.UP}>
          <Front>
            <CardText>Some Text Here</CardText>
          </Front>
          <Back>
            <CardImage alt="Alt Text" image="image_url" />
          </Back>
        </Card>
      </Stack>
    </Board>
  );
}

export default App;
