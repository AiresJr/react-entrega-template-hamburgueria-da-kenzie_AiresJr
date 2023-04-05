import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 150px;
  background: #f5f5f5;
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;

  @media (min-width: 851px) {
    display: flex;
    flex-direction: row;
    height: 80px;
    background: #f5f5f5;
    justify-content: space-between;
    align-items: center;
    padding: 0 120px 0 110px;
    width: 100%;
  }

  input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 15px;
    gap: 115px;
    width: 365px;
    height: 60px;
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    margin-top: 40px;
  }

  input::placeholder {
    width: 123px;
    height: 19px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #e0e0e0;
  }

  button {
    position: relative;
    left: 250px;
    bottom: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    width: 107px;
    height: 40px;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }
  button:hover {
    border: 2px solid #93d7af;
    border-radius: 8px;
    background: #93d7af;
  }

  img {
    width: 158.94px;
    height: 36.83px;
  }

  @media (max-width: 380px){
    button{
      left: 150px;
      width: 90px;
    }

    input{
      width:250px;
    }

  }

`;
