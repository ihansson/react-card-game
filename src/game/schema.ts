// Card

export type CardId = string;

export enum FACE {
  UP,
  DOWN,
}

export interface ICard {
  id: CardId;
  facing: FACE;
}

// Stack

export type StackId = string;

export interface IStack {
  id: StackId;
  cards: CardId[];
}

// Store

export interface IState {
  stacks: IStack[];
  cards: ICard[];
}

// Component Helpers

export interface IPosition {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export interface ISize {
  width: number;
  height: number;
}

export interface IBoardState {
  size: ISize;
}
