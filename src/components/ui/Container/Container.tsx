import { ReactNode } from "react";
import { ContainerWrapper } from "./Container.styled";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>;
}
