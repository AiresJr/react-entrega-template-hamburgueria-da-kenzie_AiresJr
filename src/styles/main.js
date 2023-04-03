import styled from "styled-components";

export const MainStyle = styled.main`
  width: 100%;
  max-width: 1400px;
  padding: 10px;
  margin: 0 auto;
`;
export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 50px;

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 90px;
  }
`;

export const Left = styled.div`
  @media (min-width: 800px) {
    width: 100%;
    max-width: 900px;
  }
`;

export const Right = styled.div`
  @media (min-width: 800px) {
    width: 100%;
  }
`;
