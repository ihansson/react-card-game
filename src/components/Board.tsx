import React from "react";
import { FunctionComponent } from "react";
import "./Board.css";
import { DefaultCardSize, ISize, IStackAny, StackId } from "../game/schema";
import { CardProps } from "./Card/Card";

export interface BoardProps {
  children?: any;
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
              size,
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
  boardSize: ISize,
  stackCount: number
) {
  const addedProps: any = {};
  const stackWidth = stack.stackSize.width * boardSize.width;

  const cardSize = calculateCardSizeForStack(stack, stackCount);
  const cardHeight = cardSize.width * stackWidth * (cardSize as any).ratio;
  console.log(cardHeight);

  const offset = {
    width: 0,
    height: 0,
  };

  if (stack.position.left) {
    offset.width += stack.position.left * boardSize.width;
  }

  if (stack.position.top) {
    offset.height += stack.position.top * boardSize.height;
  }

  offset.height -= cardHeight / 2;

  addedProps.position = {
    width:
      stack.mode !== "pile"
        ? card.order * ((cardSize.width + stack.gridGutter) * stackWidth)
        : 0,
    height: 0,
  };

  addedProps.position.width += offset.width;
  addedProps.position.height += offset.height;

  addedProps.size = {
    width: stackWidth * cardSize.width,
  };

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
