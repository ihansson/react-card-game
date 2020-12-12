export type CardId = string;

export enum FACE {
  UP,
  DOWN,
}

export interface ICard {
  id: CardId;
  facing: FACE;
}

export type StackId = string;

export interface IStack {
  id: StackId;
  cards: CardId[];
}

export interface IState {
  stacks: IStack[];
  cards: ICard[];
}