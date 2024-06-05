import { styled } from "styled-components";

export const ButtonBase = styled.button<{ $maxWidth: string, $style?: number }>`
  width: ${props => `${props.$maxWidth}`};
  border-radius: .548rem;
  outline: none;
  height: 2.5rem;
  border: ${props => props.$style === 3 ? `2px solid #E4E4E4` : `2px solid red`};
  background-color: #e30613;
  color: ${props => props.$style === 3 ? '#494D50' : props.$style === 2 ? 'red' : "#fff"};
  background-color: ${props => props.$style === 1 ? 'red' : "#fff"};
  font-size: .875rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
`;
