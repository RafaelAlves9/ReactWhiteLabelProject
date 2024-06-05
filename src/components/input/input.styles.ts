import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: .5rem;
  position: relative;

  & > svg {
    position: absolute;
    top: 58%;
    left: 13rem;
    font-size: 1.5rem;
    pointer-events: none;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  height: 1rem !important;
  & > strong {
    color: red;
  }
`;

export const BaseInput = styled.input<{ $haveLeftIcon: boolean, $haveRightIcon: boolean }>`
  font-weight: 300;
  width: 100%;
  height: 2.5rem;
  border-radius: .5rem;
  outline: none;
  border: 1px solid #bbbbbb;
  padding: 0.5rem 1rem;
  padding-left: ${(props) => props.$haveLeftIcon ? "3rem" : "1rem"};
  padding-right: ${(props) => props.$haveRightIcon ? "3rem" : "1rem"};

  &:not(:disabled):hover{
    border: 1px solid red;
  }
  &:focus{
    border: 1px solid red;
  }
  &:disabled{
    background-color: #F6F6F6;
  }
`;

export const Description = styled.span`
  height: fit-content;
  position: absolute;
  bottom: 0.2rem;
  right: 0.4rem;
  border-radius: 0.7em;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  color: #e30613;
  padding-inline: 0.5rem;

  & > svg {
    font-size: 1rem;
  }
`;

export const IconLeft = styled.div<{ $haveLabel: boolean }>`
  font-size: 1.5rem;
  position: absolute;
  left: 1rem;
  top: ${(props) => props.$haveLabel ? "2.1rem" : "1rem"};
  border-radius: 0.7em;
  z-index: 9;
`;

export const IconRight = styled.div<{ $haveLabel: boolean }>`
  font-size: 1.5rem;
  position: absolute;
  right: 1rem;
  top: ${(props) => props.$haveLabel ? "2.1rem" : "1rem"};
  border-radius: 0.7em;
  z-index: 9;
`;

export const Error = styled.span`
  width: 100%;
  padding: 0;
  color: red;
`;
