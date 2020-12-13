import { FunctionComponent, ReactElement } from "react";
import { FACE } from "../../game/schema";

export interface CardProps {
  children?:
    | ReactElement<FrontProps | BackProps>
    | ReactElement<FrontProps | BackProps>[];
  facing: FACE;
  transform?: string;
}

export const Card: FunctionComponent<CardProps> = ({
  children,
  facing,
  transform = "",
}) => {
  return (
    <div className="GameObject Card" style={{ transform }}>
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
