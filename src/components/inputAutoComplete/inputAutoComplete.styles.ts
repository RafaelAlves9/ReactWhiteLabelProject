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
  height: 1.2rem !important;
  & > strong {
    color: red;
  }
`;

export const BaseInput = styled.input<{ $paddingRight: string, $height: string }>`
  font-weight: 300;
  width: 100%;
  border-radius: .5rem;
  outline: none;
  border: 1px solid #bbbbbb;
  padding: 0.5rem 1rem;
  padding-right: ${(props) => props.$paddingRight};
  font-size: 1rem;

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

export const ListContainer = styled.div<{$open: boolean}>`
  position: absolute;
  top: 110%;
  width: 100%;
  height: fit-content;
  max-height: 15rem;
  border-radius: .5rem;
  border: 1px solid rgba(16, 24, 40, 0.03);
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
  display: ${(props) => props.$open ? "block" : "none"};
  z-index: 100;
  overflow-x: hidden;
  overflow-y: scroll;
  font-size: .9rem;
  font-weight: 300;

  > div {
    padding: 0 1rem;
    height: 2.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >p{
      margin: 0;
      width: fit-content;
    }

    &:hover{
      background-color: red;
    }
  }
  > div:nth-of-type(2n-2){
    background-color: red;
  }
`;

export const IconLeft = styled.div<{$haveLabel: boolean}>`
  font-size: 1.5rem;
  position: absolute;
  left: 1rem;
  top: ${(props) => props.$haveLabel ? "2.5rem" : ".8rem"};
  border-radius: 0.7em;
  z-index: 9;
  cursor: pointer;
`;

export const IconRight = styled.div<{$haveLabel: boolean}>`
  font-size: 1.5rem;
  position: absolute;
  right: .8rem;
  top: ${(props) => props.$haveLabel ? "2.5rem" : ".8rem"};
  border-radius: 0.7em;
  z-index: 9;
  cursor: pointer;
`;

export const Error = styled.span`
  width: 100%;
  padding: 0;
  color: red;
  font-size: .9rem;
`;