import styled from "styled-components";

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #75787e;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  max-width: 768px;
`;
export const RulesText = styled.p`
  color: #001113;
`;
export const OkButton = styled.button`
  align-self: flex-end;
  color: #78adad;
  border: 2px solid #78adad;
  background-color: #001113;
  border-radius: 5px;
  padding: 1rem 1rem;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  margin-top: 0.25rem;
  cursor: pointer;
`;

export const RulesBackground = styled.div`
  position: absolute;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
