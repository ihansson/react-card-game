import { FunctionComponent } from "react";

export interface ImageLayoutProps {
  image: string;
  alt: string;
}

export const ImageLayout: FunctionComponent<ImageLayoutProps> = ({
  image,
  alt,
}) => {
  return (
    <div>
      Image ({image}) [{alt}]
    </div>
  );
};
