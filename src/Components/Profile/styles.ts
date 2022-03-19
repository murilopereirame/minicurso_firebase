import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #75787e;
  padding: 1rem 1.5rem;
  border-radius: 5px;
`;

export const UserImage = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 50%;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const UserName = styled.input`
  border-radius: 5px;
`;

export const SaveButton = styled.button`
  align-self: flex-end;
  color: #78adad;
  border: 2px solid #78adad;
  background-color: #001113;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  margin-top: 0.25rem;
  cursor: pointer;
`;

export const ProfileBackground = styled.div`
  position: absolute;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
