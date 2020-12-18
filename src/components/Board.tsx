import React from "react";
import { FunctionComponent, ReactElement } from "react";
import "./Board.css";
import { IBoardState } from "../game/schema";

export interface BoardProps {
  children?: ReactElement | ReactElement[];
  state: IBoardState;
}

export const DefaultBoardState: IBoardState = {
  size: { width: 1000, height: 800 },
};

export const Board: FunctionComponent<BoardProps> = ({
  children,
  state = DefaultBoardState,
}) => {
  return (
    <div className="Board">
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { board: state })
      )}
    </div>
  );
};
