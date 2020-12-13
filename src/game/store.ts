// Schema

import { CardId, FACE, ICard, IState } from "./schema";
import { ACTION, reducer } from "./reducer";

// State

export const initialState: IState = {
  stacks: [
    { id: "1", cards: ["1", "2"] },
    { id: "2", cards: ["3"] },
  ],
  cards: [
    { id: "1", facing: FACE.UP },
    { id: "2", facing: FACE.UP },
    { id: "3", facing: FACE.UP },
  ],
};

// Object helper

export const Card = ({ id, facing }: { id: CardId; facing: FACE }): ICard => {
  return {
    id,
    facing,
  };
};

// Actions

// Reducer

export function test() {
  reducer(initialState, {
    type: ACTION.SPAWN_CARD,
    card: {
      id: "4",
      facing: FACE.UP,
    },
  });
}
