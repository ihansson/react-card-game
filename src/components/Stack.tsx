import React, { FunctionComponent, ReactElement } from "react";
import { CardProps } from "./Card";

export interface StackProps {
  children?: ReactElement<CardProps> | ReactElement<CardProps>[];
}

export const Stack: FunctionComponent<StackProps> = ({ children }) => {
  return <div>{children}</div>;
};
