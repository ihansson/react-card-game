import { FunctionComponent, ReactElement } from "react";
import "./Board.css";

export interface BoardProps {
  children?: ReactElement | ReactElement[];
}

export const Board: FunctionComponent<BoardProps> = ({ children }) => {
  return <div className="Board">{children}</div>;
};
