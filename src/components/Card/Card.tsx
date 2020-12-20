import { FunctionComponent, ReactElement } from "react";
import { FACE, ISize, DefaultSize } from "../../game/schema";

export const Card: FunctionComponent<any> = ({
  children,
  facing,
  order,
  position = DefaultSize,
  size = DefaultSize,
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
        transform: calculateTransformFromPosition(position, size, facing),
        // transitionDelay: order * 0.1 + "s",
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

const baseCardWidth = 200;

function calculateTransformFromPosition(
  position: ISize,
  size: ISize,
  facing: FACE
) {
  let x: number = 0;
  let y: number = 0;
  if (position.width) {
    x += position.width;
  }
  if (position.height) {
    y += position.height;
  }
  const scale = size.width / baseCardWidth;
  const rotateY = facing === FACE.UP ? 0 : 180;
  const z = 0;
  return `translate3d(${x}px, ${y}px, ${z}px) scale(${scale}) rotateY(${rotateY}deg)`;
}
