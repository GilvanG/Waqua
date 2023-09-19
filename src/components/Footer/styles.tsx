import styled from "styled-components";

export const FooterContainer = styled.footer`
  font-weight: 700;
  z-index: 0;
  overflow: hidden;
  background-color: #757575;
  /* border-top: 0.01px solid; */
  /* border-color: ${({ theme }) => theme.colors.gray}; */
  color: ${({ theme }) => theme.colors.white2};
  .shadow {
    width: 100%;
    height: 10px;
    background: linear-gradient(0deg, #757575 0%, #0fa0ff 100%);
    box-shadow: 1px 20px 2rem ${({ theme }) => theme.colors.black1 + "70"};
}
.lineCenter{
    /* border: 0.5px solid;
    border-radius: 10px;
    margin: 0 40vw;
    margin-top: 2rem; */
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
  }

  .createBy {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .socialMedia {
    display: flex;
    align-items: center;
    svg {
      width: 30px;
      height: 30px;
      color: ${({ theme }) => theme.colors.white2};
    }
    svg:hover {
      opacity: 0.75;
    }

  }
`;
