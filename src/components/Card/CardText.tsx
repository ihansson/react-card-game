import { FunctionComponent, ReactNode } from "react";

export interface CardTextProps {
  children: ReactNode | ReactNode[];
}

export const CardText: FunctionComponent<CardTextProps> = ({ children }) => {
  return <div>{children}</div>;
};
