import { FunctionComponent, Fragment, useState } from "react";

import stages from "./data/stages.json";
import stacks from "./data/stacks.json";
import playerCardTypes from "./data/player_card_types.json";

import { Board } from "./components/Board";
import { Stack } from "./components/Stack";
import { Card } from "./components/Card/Card";
import { FACE } from "./game/schema";

const initialState = {
  stage: 0,
  screen: "stage",
  deck: [],
};

/*
- Fix positioning and size of cards to use relative units
- Manage state in some meaningful way
- Get rid of FACE type
- Stop assigning properties to card which it doesn't need.

 */

export const Game = () => {
  const [gameState, setGameState] = useState(initialState);
  const stage = stages[gameState.stage];

  // Temp
  const drill = { gameState, setGameState };

  function startStage() {
    setGameState({ ...gameState, screen: "stage" });
  }

  return (
    <div>
      {gameState.screen === "overview" && (
        <Fragment>
          <Stages stages={stages} currentStage={gameState.stage} />
          <button onClick={startStage}>Continue</button>
        </Fragment>
      )}
      {gameState.screen === "stage" && stage.type === "intro" && (
        <Intro {...drill} />
      )}
    </div>
  );
};

export const Stages: FunctionComponent<{
  stages: any[];
  currentStage: number;
}> = ({ stages, currentStage }) => {
  return (
    <Fragment>
      {stages.map((stage: any, index) => (
        <div key={index}>
          {stage.type} {index === currentStage ? " - Active" : ""}
        </div>
      ))}
    </Fragment>
  );
};

export const Intro: FunctionComponent<{
  gameState: any;
  setGameState: any;
}> = ({ gameState, setGameState }) => {
  const [cards, setCards] = useState(
    ["rocket", "speech", "housing"].map((cardId: string, index: number) => {
      return createCard(
        (playerCardTypes as any)[cardId],
        "pick-a-card",
        FACE.UP,
        index
      );
    })
  );

  function pickCard(card: any) {
    let _cards = cards.map((_card: any) => {
      if (_card !== card) {
        return { ..._card, stack: "trash" };
      } else {
        return { ..._card, stack: "draw" };
      }
    });
    setCards(_cards);
  }

  return (
    <Fragment>
      <Board size={{ width: 1000, height: 800 }}>
        <Stack {...stacks["draw"]} />
        <Stack {...stacks["trash"]} />
        <Stack {...stacks["pick-a-card"]} />
        {cards.map((card) => (
          <Card
            onClick={() => {
              pickCard(card);
            }}
            {...card}
          />
        ))}
      </Board>
    </Fragment>
  );
};

let nextCardId = 13;
function createCard(cardData: any, stack: string, facing: FACE, order: number) {
  const card = cardData;
  card.id = nextCardId;
  card.key = card.id;
  card.stack = stack;
  card.facing = facing;
  card.order = order;
  nextCardId++;
  return card;
}
