// State Interfaces

export interface ICard {
  id: string;
  order: number;
}

export interface IStack {
  id: string;
}

export type stageTypes = "intro" | "town";

export interface IStage {
  type: stageTypes;
}

export type screenTypes = "overview" | "stage";

export interface IGameState {
  stage: number;
  screen: screenTypes;
  stages: IStage[];
  stacks: IStack[];
  cards: ICard[];
}

export const initialState: IGameState = {
  stage: 0,
  screen: "overview",
  stages: [],
  stacks: [],
  cards: [],
};

// Action interfaces

export enum ACTION {
  SET_STAGE,
  SET_SCREEN,
}

export interface ISetStageAction {
  type: ACTION.SET_STAGE;
  stage: number;
}

export interface ISetScreenAction {
  type: ACTION.SET_SCREEN;
  screen: screenTypes;
}

export type IAction = ISetStageAction | ISetScreenAction;

// Actions

export function setStage(stage: number): ISetStageAction {
  return {
    type: ACTION.SET_STAGE,
    stage,
  };
}

export function setScreen(screen: screenTypes): ISetScreenAction {
  return {
    type: ACTION.SET_SCREEN,
    screen,
  };
}

// Reducer

export const gameReducer = (
  state = initialState,
  action: IAction
): IGameState => {
  switch (action.type) {
    case ACTION.SET_STAGE:
      return {
        ...state,
        stage: action.stage,
      };
    case ACTION.SET_SCREEN:
      return {
        ...state,
        screen: action.screen,
      };
    default:
      return state;
  }
};
