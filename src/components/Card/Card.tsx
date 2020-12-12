import { FunctionComponent, ReactElement } from "react";
import "./Card.css";
import { FACE } from "../../game/schema";

export interface CardProps {
  children?:
    | ReactElement<FrontProps | BackProps>
    | ReactElement<FrontProps | BackProps>[];
  facing: FACE;
}

export const Card: FunctionComponent<CardProps> = ({ children, facing }) => {
  return (
    <div className="Card">
      Facing: {facing} {children}
    </div>
  );
};

export interface FrontProps {
  children?: ReactElement | ReactElement[];
}

export const Front: FunctionComponent<FrontProps> = ({ children }) => {
  return <div>{children}</div>;
};

export interface BackProps {
  children?: ReactElement | ReactElement[];
}

export const Back: FunctionComponent<BackProps> = ({ children }) => {
  return <div>{children}</div>;
};
