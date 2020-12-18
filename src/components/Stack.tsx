import { FunctionComponent, ReactElement } from "react";

export interface StackProps {
  children?: ReactElement | ReactElement[];
  cardCount?: number;
}

export const Stack: FunctionComponent<StackProps> = ({
  children,
  cardCount = 0,
}) => {
  return (
    <div>
      {children} .Cards: {cardCount}
    </div>
  );
};
