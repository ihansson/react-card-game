// @ts-nocheck

// Schema

import { CardId, FACE, ICard, IState } from "./schema";
import { ACTION, reducer } from "./reducer";

// State

export const initialState: IState = {
  stacks: [
    { id: "1", position: { top: 0, left: 0 } },
    { id: "2", position: { top: 0, left: 0 } },
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
