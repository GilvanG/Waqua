import styled from "styled-components";

export const Widget = styled.div`
  padding: 10% 0.1rem;

  display: inline-flex;
  flex-wrap: wrap;
  height: 80%;
  color: ${({ theme }) => theme.colors.black1};
  /* box-shadow: 0.001rem 0.001rem 0.4rem ${({ theme }) =>
    theme.colors.black1}; */
`;
export const CountdownWidget = styled.div`
  overflow: hidden;
  /* height: 100%; */
  box-sizing: border-box;
  flex: 4;

  background-color: ${({ theme }) => theme.colors.white2};
  border-radius: 0.25rem;
  padding: 1.5rem;
  box-shadow: -1px 2px 2rem ${({ theme }) => theme.colors.black1 + "70"};
`;

export const ButtonsWidget = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 20% 20%;
  gap: 5%;
  button {
    width: 100%;
  }
`;

export const TextWidget = styled.div`
  box-sizing: border-box;
  display: block;
  flex: 1;
  margin-left: 2px;
  padding: 1.15rem;
  /* max-width: 8.5rem; */
  /* min-height: 17rem; */
  overflow: hidden;

  font-size: 0.75rem;
  text-align: start;
  align-items: center;
  font-family: "Titillium Web", sans-serif;
  color: ${({ theme }) => theme.colors.black2};

  border-bottom-right-radius: 0.5rem 0.5rem;
  border-top-right-radius: 0.5rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.white2};
`;

export const HeaderWidget = styled.header`
  padding: 0.5rem;
  /* margin: 0.2rem; */
  font-size: 3.5rem;
  font-weight: bolder;
  font-family: "Righteous", cursive;
`;
