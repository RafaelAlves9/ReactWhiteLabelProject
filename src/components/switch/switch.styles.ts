import styled from "styled-components";

export const Container = styled.div`
  
`;

export const InputContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 2.1rem;
  height: 1.2rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border: 1px solid #ccc;

    input:not(:disabled):hover ~ & {
      border: 1px solid red;
    }

    &:before {
      position: absolute;
      content: "";
      height: .8rem;
      width: .8rem;
      left: 3px;
      bottom: 2.5px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
  }

  input:checked + .slider {
    background-color: red;
    border: 1px solid red;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const Label = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  height: 1.2rem !important;
  & > strong {
    color: red;
  }
`;

export const Error = styled.span`
  width: 100%;
  padding: 0;
  color: red;
  font-size: .9rem;
`;