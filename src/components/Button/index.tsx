import { ReactNode } from 'react';
import styled from 'styled-components';

interface IButton {
  children: ReactNode;
  styleDisabled?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const ContainerButton = styled.div`
  button {
    &[data-style = "0"]{
      opacity: 0.75;
      &:hover {
        opacity: .5;
      }
    }
  }
`;
const ButtonStyle = styled.button`
  margin: 0.5rem;
  margin-bottom: 0;
  padding: 0 0.35rem;
  display: inline-flex;

  font-weight: 600;
  font-size: 1.5rem;

  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 0.25rem;
  
  cursor: pointer;
  transition: .3s;
  color: ${({ theme }) => theme.colors.white2};
  background-color: ${({ theme }) => theme.colors.blue2};
  
  &:hover {
    opacity: .75;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.gray};
    background-color: gray;
    cursor: not-allowed;
  }
`;

const Button = ({ children, styleDisabled, onClick, disabled }: IButton) => (
  <ContainerButton>
    <ButtonStyle data-style={styleDisabled? 0 : 1} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyle>
  </ContainerButton>
);


export default Button;
