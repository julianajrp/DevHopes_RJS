import styled from "styled-components";

export const BtnHeader = styled.button`
  width: 130px;
  height: 50px;
  background-color: var(--bcgBlue);
  border: 1px solid var(--bcgBlue);
  border-radius: 4px;
  color: var(--purpleBright);
  padding: 0 20px;
  &:hover {
    background-color: var(--purpleBright);
    border: 1px solid var(--purpleBright);
    color: var(--letterColorNormal);
  }
`;
