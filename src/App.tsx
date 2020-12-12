import React from "react";
import { Zone } from "./components/Zone";
import { Stack } from "./components/Stack";
import { Card, Front, Back } from "./components/Card";
import { TextLayout } from "./components/CardLayouts/TextLayout";
import { ImageLayout } from "./components/CardLayouts/ImageLayout";

function App() {
  return (
    <div>
      <Zone>
        <Stack>
          <Card>
            <Front>
              <TextLayout>Some Text Here</TextLayout>
            </Front>
            <Back>
              <ImageLayout alt="Alt Text" image="image_url" />
            </Back>
          </Card>
        </Stack>
      </Zone>
    </div>
  );
}

export default App;
