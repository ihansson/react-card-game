import { FunctionComponent, ReactElement } from "react";
import {
  FACE,
  IPosition,
  ISize,
  DefaultSize,
  DefaultPosition,
} from "../../game/schema";

export interface CardProps {
  children?:
    | ReactElement<FrontProps | BackProps>
    | ReactElement<FrontProps | BackProps>[];
  facing: FACE;
  order: number;
  position?: IPosition;
  size?: ISize;
  offset?: ISize;
  boardSize?: ISize;
  label: string;
  description: string;
  onClick: any;
}

export const Card: FunctionComponent<CardProps> = ({
  children,
  facing,
  order,
  position = DefaultPosition,
  size = DefaultSize,
  offset = DefaultSize,
  boardSize = DefaultSize,
  label,
  description,
  onClick,
}) => {
  return (
    <div
      onClick={onClick ? onClick : () => {}}
      className={`GameObject Card ${facing === FACE.UP ? "is-up" : "is-down"}`}
      style={{
        transform: calculateTransformFromPosition(
          position,
          size,
          boardSize,
          facing,
          order,
          offset
        ),
        boxShadow: `3px 8px ${10 + order * 4}px rgba(0,0,0,0.2)`,
      }}
    >
      <Front>
        <strong>{label}</strong>
        <div>{description}</div>
      </Front>
      <Back></Back>
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
  return (
    <div className="GameObject CardFace CardBack">
      <img
        width="215"
        height="200"
        alt=""
        src="/images/online_payment_isometric.svg"
      />
      <div>
        <strong>Take Payment</strong>
        {children}
      </div>
    </div>
  );
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
  const scale = 1;
  const rotateY = facing === FACE.UP ? 0 : 180;
  const z = order * 10;
  y = 25;
  return `translate3d(${x}px, ${y}px, ${z}px) scale(${scale}) rotateY(${rotateY}deg)`;
}
