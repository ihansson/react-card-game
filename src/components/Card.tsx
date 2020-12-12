import { FunctionComponent, ReactElement } from "react";

export interface CardProps {
  children?:
    | ReactElement<FrontProps | BackProps>
    | ReactElement<FrontProps | BackProps>[];
}

export const Card: FunctionComponent<CardProps> = ({ children }) => {
  return <div>{children}</div>;
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
