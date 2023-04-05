import styled from "styled-components";

export const CardStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 346px;
    overflow-x: auto;
  }

  img {
    display: flex;

    height: 150px;
    background: #f5f5f5;
    object-fit: contain;
  }

  li {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    box-sizing: border-box;
    width: 300px;
    height: 346px;
    
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
  }
  @media (max-width: 870px) {
    width: 100%;
    height: 378px;
  }

  h2,
  nav,
  h3,
  div {
    margin-top: 10px;
    padding-left: 21px;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }
  nav {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  h3 {
    font-weight: 600;
    font-size: 14px;
    color: #27ae60;
  }
`;
