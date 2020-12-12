import { FunctionComponent } from "react";

export interface CardImageProps {
  image: string;
  alt: string;
}

export const CardImage: FunctionComponent<CardImageProps> = ({
  image,
  alt,
}) => {
  return (
    <div>
      Image ({image}) [{alt}]
    </div>
  );
};
