import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  width: 363px;
  height: 180px;
  justify-content: space-between;
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;
  @media (max-width: 700px) {
    width: 100%;
  }

  div {
    display: flex;
    width: 343px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;

    @media (max-width: 700px) {
      width: 100%;
    }
  }

  nav {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #333333;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #828282;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    background: #e0e0e0;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #828282;
    width: 343px;
    height: 60px;
    @media (max-width: 700px) {
      width: 100%;
    }
  }

  button:hover {
    background: #828282;
    color: #e0e0e0;
  }
`;
