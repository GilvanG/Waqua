import styled from "styled-components";

export const ContainerCountdown = styled.div`
  overflow: hidden;
  font-size: 8rem;
  display: flex;
  justify-content: center;
  font-family: "Recursive", sans-serif;
  color: ${({ theme }) => theme.colors.black1};
`;

export const BoxCountdown = styled.div`
  margin: 0.1rem;
  overflow: hidden;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.white1};

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin: 0;
    padding: 0;
    max-width: 5rem;
    
    font-size: 8rem;
    line-height: 12rem;
    letter-spacing: none;
    font-family: "Recursive", sans-serif;
    
    border: none;
    outline: none;
    background: none;
    color: ${({ theme }) => theme.colors.black1};

    -moz-appearance: none;
    -webkit-appearance: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type="number"] {
    appearance: textfield;
  }
`;