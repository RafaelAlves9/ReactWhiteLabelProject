import { styled } from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: .5rem;
    overflow: hidden;
  }
`;

export const Button = styled.button<{$disabled: boolean}>`
  width: 2.125rem;
  height: 2.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-right: 1px solid gray;
  background-color: #fff;
  color: #000;
  cursor: pointer;

  ${props => !props.$disabled && `
    &:hover {
      background-color: #F9FAFB;
    }
  `}

  &:last-of-type {
    border-right: none;
  }
`;

export const PageItem = styled.p<{$active: boolean; $disabled: boolean}>`
  height: 2.125rem;
  width: 2.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid gray;
  font-size: .741rem;
  font-weight: 500;
  color: ${props => props.$disabled ? '#DDDDDD' : '#000'};
  cursor: ${props => props.$disabled ? "default" : "pointer"};
  background-color: ${props => props.$active ? "#F9FAFB" : "#fff"};

  ${props => !props.$disabled && `
    &:hover {
      background-color: #F9FAFB;
    }
  `}
`;
