import { FunctionComponent, ReactElement } from "react";
import { StackProps } from "./Stack";

export interface ZoneProps {
  children?: ReactElement<StackProps> | ReactElement<StackProps>[];
}

export const Zone: FunctionComponent<ZoneProps> = ({ children }) => {
  return <div>{children}</div>;
};
