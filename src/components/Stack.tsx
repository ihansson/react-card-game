import React, { Fragment, FunctionComponent, ReactElement } from "react";
import { CardProps } from "./Card/Card";
import { IPosition, ISize } from "../game/schema";

export interface StackProps {
  children?: ReactElement<CardProps> | ReactElement<CardProps>[];
  position: IPosition;
  boardSize: ISize;
  cardSize: ISize;
}

export const Stack: FunctionComponent<StackProps> = ({
  children,
  position,
  boardSize,
  cardSize,
}) => {
  return (
    <Fragment>
      <div
        className="GameObject Label"
        style={{
          transform: calculateTransformFromPosition(
            position,
            { width: 200, height: 40 },
            boardSize
          ),
        }}
      >
        Cards in stack: {React.Children.count(children)}
      </div>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child as any, {
          transform: calculateTransformFromPosition(
            position,
            cardSize,
            boardSize,
            {
              width: index * -5,
              height: index * -5,
            }
          ),
        });
      })}
    </Fragment>
  );
};

export function calculateTransformFromPosition(
  position: IPosition,
  size: ISize,
  wrapperSize: ISize,
  offset?: ISize
) {
  let x: number = 0;
  let y: number = 0;
  const halfWidth = size.width / 2;
  const halfHeight = size.height / 2;
  if (position.top) {
    y = position.top * wrapperSize.height - halfHeight;
  } else if (position.bottom) {
    y = wrapperSize.height - halfHeight - position.bottom * wrapperSize.height;
  }
  if (position.left) {
    x = position.left * wrapperSize.width - halfWidth;
  } else if (position.right) {
    x = wrapperSize.width - halfWidth - position.right * wrapperSize.width;
  }
  if (offset) {
    if (offset.width) {
      x += offset.width;
    }
    if (offset.height) {
      y += offset.height;
    }
  }
  return `translate(${x}px, ${y}px)`;
}
