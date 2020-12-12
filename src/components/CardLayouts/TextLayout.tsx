import { FunctionComponent, ReactNode } from "react";

export interface TextLayoutProps {
  children: ReactNode | ReactNode[];
}

export const TextLayout: FunctionComponent<TextLayoutProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};
