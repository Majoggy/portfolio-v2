"use client";

import { RightPanel } from "./components/RightPanel";
import { LeftPanel } from "./components/LeftPanel";
import { Container } from "./styled";

export default function Portfolio() {
  return (
    <Container>
      <LeftPanel />
      <RightPanel />
    </Container>
  );
}