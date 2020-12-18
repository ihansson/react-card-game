// @ts-nocheck

import { CardId, FACE, ICard, IStack, StackId } from "./schema";
import { array_move, array_shuffle } from "./helpers";
import { Card } from "./store";
import { initialState } from "./store";

export enum ACTION {
  SPAWN_CARD,
  REMOVE_CARD,
  MOVE_CARD,
  FLIP_CARD,
  FLIP_STACK,
  REORDER_CARD,
  SHUFFLE_STACK,
}

interface IActionSpawnCard {
  type: ACTION.SPAWN_CARD;
  card: ICard;
}

interface IActionRemoveCard {
  type: ACTION.REMOVE_CARD;
  cardId: CardId;
}

interface IActionMoveCard {
  type: ACTION.MOVE_CARD;
  cardId: CardId;
  stackId: StackId;
}

interface IActionFlipCard {
  type: ACTION.FLIP_CARD;
  cardId: CardId;
  facing: FACE;
}

interface IActionFlipStack {
  type: ACTION.FLIP_STACK;
  stackId: StackId;
  facing: FACE;
}

interface IActionReorderCard {
  type: ACTION.REORDER_CARD;
  stackId: StackId;
  oldIndex: number;
  newIndex: number;
}

interface IActionShuffleStack {
  type: ACTION.SHUFFLE_STACK;
  stackId: StackId;
}

type IAction =
  | IActionSpawnCard
  | IActionRemoveCard
  | IActionMoveCard
  | IActionFlipCard
  | IActionFlipStack
  | IActionReorderCard
  | IActionShuffleStack;
export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ACTION.SPAWN_CARD: {
      let cards = state.cards.slice();
      cards.push(Card(action.card));
      return {
        ...state,
        cards,
      };
    }
    case ACTION.REMOVE_CARD: {
      return {
        ...state,
        stacks: state.stacks.map((stack: IStack) => {
          return {
            ...stack,
            cards: stack.cards.filter((id: CardId) => id !== action.cardId),
          };
        }),
        cards: state.cards.filter((card: ICard) => card.id !== action.cardId),
      };
    }
    case ACTION.MOVE_CARD: {
      return {
        ...state,
        stacks: state.stacks.map((stack: IStack) => {
          let cards = stack.cards.filter((id: CardId) => {
            return id !== action.cardId;
          });
          if (action.stackId === stack.id) {
            cards.push(action.cardId);
          }
          return {
            ...stack,
            cards,
          };
        }),
      };
    }
    case ACTION.FLIP_CARD: {
      return {
        ...state,
        cards: state.cards.map((card: ICard) => {
          if (card.id !== action.cardId) {
            return card;
          } else {
            return {
              ...card,
              facing: action.facing,
            };
          }
        }),
      };
    }
    case ACTION.FLIP_STACK: {
      let cardsToFlip: CardId[] = [];
      state.stacks.forEach((stack: IStack) => {
        if (action.stackId === stack.id) {
          cardsToFlip = stack.cards;
        }
      });
      return {
        ...state,
        cards: state.cards.map((card: ICard) => {
          if (cardsToFlip.includes(card.id)) {
            return {
              ...card,
              facing: action.facing,
            };
          } else {
            return card;
          }
        }),
      };
    }
    case ACTION.REORDER_CARD: {
      return {
        ...state,
        stacks: state.stacks.map((stack: IStack) => {
          return {
            ...stack,
            cards:
              stack.id === action.stackId
                ? array_move(stack.cards, action.oldIndex, action.newIndex)
                : stack.cards,
          };
        }),
      };
    }
    case ACTION.SHUFFLE_STACK: {
      return {
        ...state,
        stacks: state.stacks.map((stack: IStack) => {
          return {
            ...stack,
            cards:
              stack.id === action.stackId
                ? array_shuffle(stack.cards)
                : stack.cards,
          };
        }),
      };
    }
    default:
      return state;
  }
};
