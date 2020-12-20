import { Fragment, FunctionComponent, useState } from "react";
import { Board } from "./Board";
import { Stack } from "./Stack";
import stacks from "../data/stacks.json";
import { Card } from "./Card/Card";
import { assignCardStack, generateRandomCards } from "../game/helpers";
import { ICard } from "../game/reducer";

export const PickACard: FunctionComponent = () => {
  const [cards, setCards] = useState(generateRandomCards());

  function pickCard(card: any) {
    setCards(
      assignCardStack(cards, (_card: ICard) => _card === card, "draw", "trash")
    );
  }

  return (
    <Fragment>
      <Board size={{ width: 1000, height: 800 }}>
        {["draw", "trash", "pick-a-card"].map((stackId: string) => (
          <Stack key={stackId} {...(stacks as any)[stackId]} />
        ))}
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
