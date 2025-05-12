import { ReactNode } from "react";
import { SectionWrapper } from "./Section.styled";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className, id }: Props) {
  return <SectionWrapper id={id} className={className}>{children}</SectionWrapper>;
}
