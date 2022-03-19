import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  box-sizing: border-box;
`;
export const TitleText = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;

export const ButtonsContainer = styled.div`
  max-width: 768px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 1280px) {
    flex-direction: row;

    button,
    button:first-of-type {
      margin: 0;
    }

    button:first-of-type {
      margin-right: 0.5rem;
    }

    margin-top: 0.5rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 0.75rem;

  border: 2px solid #78adad;
  background-color: #001113;
  color: #78adad;
  border-radius: 5px;
  font-size: 2.75rem;
  font-weight: bold;
  padding: 0.5rem 0;

  cursor: pointer;

  &:first-of-type {
    margin-top: 1.5rem;
  }
`;
