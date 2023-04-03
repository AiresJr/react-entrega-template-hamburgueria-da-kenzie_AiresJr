import styled from "styled-components";

export const CardStyle = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: row;
  flex-wrap: wrap;


  img {
    display: flex;
    width: 100%;
    height: 150px;
    background: #f5f5f5;
    object-fit: contain;
  }

  li {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 300px;
    height: 346px;
    gap: 8px;
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
  }

  h2,
  nav,
  h3,
  div {
    margin-top: 10px;
    padding-left: 21px;
  }
`;
