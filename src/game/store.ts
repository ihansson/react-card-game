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
  let state = reducer(initialState, {
    type: ACTION.SPAWN_CARD,
    card: {
      id: "4",
      facing: FACE.UP,
    },
  });
  console.log(state.stacks);
  state = reducer(state, {
    type: ACTION.MOVE_CARD,
    cardId: "4",
    stackId: "1",
  });
  console.log(state.stacks);
  state = reducer(state, {
    type: ACTION.REORDER_CARD,
    stackId: "1",
    oldIndex: 2,
    newIndex: 0,
  });
  console.log(state.stacks[0].cards);
  state = reducer(state, {
    type: ACTION.FLIP_STACK,
    stackId: "1",
    facing: FACE.DOWN,
  });
  console.log(state.cards);
}
