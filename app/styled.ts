import { breakpoints } from "@/styles/utils";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    height: auto;
    overflow: visible;
  }
`;