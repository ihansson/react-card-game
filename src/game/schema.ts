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
  position: IPosition;
  cardSizeMode?: "fit" | "fixed";
  cardSize?: ISize;
}

export interface IStackPile extends IStack {
  mode: "pile";
  cardPositionShift: ISize;
  stackSize?: ISize;
}

export interface IStackCarousel extends IStack {
  mode: "carousel";
  stackSize: ISize;
}

export interface IStackGrid extends IStack {
  mode: "grid";
  gridColumns: number;
  gridGutter: number;
  stackSize: ISize;
}

export interface IStackFan extends IStack {
  mode: "fan";
  stackSize: ISize;
}

export type IStackAny = IStackPile | IStackCarousel | IStackGrid | IStackFan;

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

export const DefaultPosition = { top: 0, left: 0 };

export interface ISize {
  width: number;
  height: number;
}

export const DefaultSize = { width: 0, height: 0 };
export const DefaultCardSize = { width: 200, height: 300 };

export interface IBoardState {
  size: ISize;
}
