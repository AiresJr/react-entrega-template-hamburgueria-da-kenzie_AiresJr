import styled from "styled-components";

export const CardStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 0px 0px 5px 5px;
  border-bottom: solid 2px #e0e0e0;
  width: 363px;
  height: 465px;
  background: #f5f5f5;
  overflow-y: auto;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ListStyle = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  height: 80px;
  padding: 18px 15px;

  img {
    width: 70px;
    height: 70px;
    background: #e0e0e0;
    border-radius: 3px;
  }

  h2 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #333333;
  }

  button {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #bdbdbd;
  }

  button:hover {
    color: #333333;
    text-decoration-line: underline;
  }

  nav {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #828282;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  margin-bottom: 10px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const DivTitle = styled.div`
  width: 365px;
  height: 65px;
  background: #27ae60;
  border-radius: 5px 5px 0px 0px;

  @media (max-width: 700px) {
    width: 100%;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const DivTitleSecondary = styled.div`
  width: 365px;
  height: 65px;
  background: #27ae60;
  border-radius: 5px 5px 0px 0px;

  @media (max-width: 700px) {
    width: 100%;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    border-radius: 0px 0px 5px 5px;
    width: 365px;
    height: 158px;
    gap: 10px;

    @media (max-width: 700px) {
      width: 100%;
    }
  }

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #333333;
  }

  nav {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #828282;
  }
`;
export const DivBox = styled.div`
  width: 100%;
`;
