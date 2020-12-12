import React from "react";
import { Zone } from "./components/Zone";
import { Stack } from "./components/Stack";
import { Back, Card, Front } from "./components/Card/Card";
import { CardText } from "./components/Card/CardText";
import { CardImage } from "./components/Card/CardImage";

import { test } from "./game/store";
import { FACE } from "./game/schema";

test();

function App() {
  return (
    <div>
      <Zone>
        <Stack>
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
        <Stack>
          <Card facing={FACE.UP}>
            <Front>
              <CardText>Some Text Here</CardText>
            </Front>
            <Back>
              <CardImage alt="Alt Text" image="image_url" />
            </Back>
          </Card>
        </Stack>
      </Zone>
    </div>
  );
}

export default App;
