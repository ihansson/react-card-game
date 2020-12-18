import React from "react";
import { FunctionComponent, ReactElement } from "react";
import "./Board.css";
import { DefaultCardSize, ISize, IStackAny, StackId } from "../game/schema";
import { CardProps } from "./Card/Card";

export interface BoardProps {
  children?: ReactElement | ReactElement[];
  size: ISize;
}

export const Board: FunctionComponent<BoardProps> = ({ children, size }) => {
  const stackCount: Record<StackId, number> = {};
  const stacks: Record<StackId, IStackAny> = {};

  React.Children.forEach(children, (child: any) => {
    if (child.props.stack) {
      if (!stackCount[child.props.stack]) stackCount[child.props.stack] = 0;
      stackCount[child.props.stack] += 1;
    } else {
      stacks[child.props.id] = child.props;
    }
  });

  return (
    <div className="Board">
      {React.Children.map(children, (child: any) => {
        let addedProps: any = {};
        if (stacks) {
          if (child.props.stack in stacks) {
            addedProps = calculateCardPropsForStack(
              child.props,
              stacks[child.props.stack],
              stackCount[child.props.stack]
            );
          } else {
            addedProps = {
              cardCount: stackCount[child.props.id],
            };
          }
        }
        return React.cloneElement(child, { boardSize: size, ...addedProps });
      })}
    </div>
  );
};

function calculateCardPropsForStack(
  card: CardProps,
  stack: IStackAny,
  stackCount: number
) {
  const addedProps: any = {};

  const cardSize = calculateCardSizeForStack(stack, stackCount);

  addedProps.position = stack.position;

  addedProps.offset = {
    width: card.order * (1.1 * cardSize.width),
    height: 0,
  };

  addedProps.size = cardSize;

  return addedProps;
}

function calculateCardSizeForStack(
  stack: IStackAny,
  stackCount: number
): ISize {
  let size: ISize = DefaultCardSize;

  if (stack.cardSizeMode === "fixed") {
    size = stack.cardSize ? stack.cardSize : DefaultCardSize;
  } else if (stack.cardSizeMode === "fit") {
    if (stack.mode === "grid") {
      const columnGutterSize = stack.gridGutter * (stack.gridColumns - 1);
      const relevantStackWidth = stack.stackSize.width - columnGutterSize;
      const width = relevantStackWidth / stack.gridColumns;
      size = { width, height: size.height };
    } else {
      size = { width: 25, height: 25 };
    }
  }

  return size;
}
