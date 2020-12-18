import React from "react";
import { FunctionComponent, ReactElement } from "react";
import "./Board.css";
import { CardId, IBoardState, IStack } from "../game/schema";

export interface BoardProps {
  children?: ReactElement | ReactElement[];
  state: IBoardState;
  stacks?: IStack[];
}

export const DefaultBoardState: IBoardState = {
  size: { width: 1000, height: 800 },
};

export const Board: FunctionComponent<BoardProps> = ({
  children,
  state = DefaultBoardState,
  stacks,
}) => {
  const stackIndex: Record<CardId, number> = {};
  if (stacks) {
    stacks.forEach((stack, index) => {
      stack.cards.forEach((card) => {
        stackIndex[card] = index;
      });
    });
  }
  return (
    <div className="Board">
      {React.Children.map(children, (child: any) => {
        const addedProps: any = { board: state };
        if (stacks) {
          if (child.props.id && child.props.id in stackIndex) {
            const stack = stacks[stackIndex[child.props.id]];
            addedProps.position = stack.position;
          }
        }
        return React.cloneElement(child, addedProps);
      })}
    </div>
  );
};
