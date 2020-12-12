import React, { FunctionComponent, ReactElement } from "react";
import { CardProps } from "./Card/Card";
import "./Stack.css";

export interface StackProps {
  children?: ReactElement<CardProps> | ReactElement<CardProps>[];
}

export const Stack: FunctionComponent<StackProps> = ({ children }) => {
  return (
    <div>
      Cards in stack: {React.Children.count(children)}
      <div className="Stack">{children}</div>
    </div>
  );
};
