import React from "react";
import { Divider, H2, HeadingWrapper } from "./Heading.styled";

type Props = {
  title?: string;
};

export default function Heading({ title = "Brak tytułu" }: Props) {
  return (
    <HeadingWrapper>
      <H2>{title}</H2>
      <Divider />
    </HeadingWrapper>
  );
}
