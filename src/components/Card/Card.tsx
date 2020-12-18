import { FunctionComponent, ReactElement } from "react";
import { FACE, IPosition, ISize, IBoardState } from "../../game/schema";
import { DefaultBoardState } from "../Board";

export interface CardProps {
  children?:
    | ReactElement<FrontProps | BackProps>
    | ReactElement<FrontProps | BackProps>[];
  facing: FACE;
  order: number;
  position: IPosition;
  size: ISize;
  board?: IBoardState;
}

export const Card: FunctionComponent<CardProps> = ({
  children,
  facing,
  order,
  position,
  size,
  board = DefaultBoardState,
}) => {
  return (
    <div
      className={`GameObject Card ${facing === FACE.UP ? "is-up" : "is-down"}`}
      style={{
        transform: calculateTransformFromPosition(
          position,
          size,
          board.size,
          facing,
          order,
          { width: 0, height: 0 }
        ),
        boxShadow: `3px 8px ${10 + order * 4}px rgba(0,0,0,0.4)`,
      }}
    >
      {children}
    </div>
  );
};

export interface FrontProps {
  children?: ReactElement | ReactElement[];
}

export const Front: FunctionComponent<FrontProps> = ({ children }) => {
  return <div className="GameObject CardFace CardFront">{children}</div>;
};

export interface BackProps {
  children?: ReactElement | ReactElement[];
}

export const Back: FunctionComponent<BackProps> = ({ children }) => {
  return <div className="GameObject CardFace CardBack">{children}</div>;
};

function calculateTransformFromPosition(
  position: IPosition,
  size: ISize,
  wrapperSize: ISize,
  facing: FACE,
  order: number,
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
  const scale = size.width / 200;
  const rotateY = facing === FACE.UP ? 0 : 180;
  const z = order * 10;
  return `translate3d(${x}px, ${y}px, ${z}px) scale(${scale}) rotateY(${rotateY}deg)`;
}
