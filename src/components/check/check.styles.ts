import styled from "styled-components";

export const InputContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 20px;
  margin-bottom: 25px;
  cursor: pointer;
  font-size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: #fff;
  border-radius: .4rem;
  border: 1px solid #C5C5C5;

  ${Checkbox}:disabled ~ & {
    background-color: red;
  }

  ${Checkbox}:not(:disabled):hover ~ & {
    border: 1px solid red;
  }

  ${Checkbox}:checked ~ & {
    border: 1px solid red;
    background-color: red;
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Checkbox}:checked ~ &:after {
    display: block;
  }

  &:after {
    left: 6px;
    top: 3px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const Error = styled.span`
  width: 100%;
  padding: 0;
  color: red;
  font-size: .9rem;
`;
