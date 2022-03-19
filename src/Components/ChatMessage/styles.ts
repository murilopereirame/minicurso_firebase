import styled from "styled-components";

interface IMessageContainerProps {
  isOwner: boolean;
}

export const MessageContainer = styled.div<IMessageContainerProps>`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0 0.5rem;
  flex-direction: ${(props) => (props.isOwner ? "row-reverse" : "row")};
`;

export const ContentContainer = styled.div<IMessageContainerProps>`
  background-color: #78adad;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 1rem;
  margin-left: ${(props) => (props.isOwner ? "0" : "0.5rem")};
  margin-right: ${(props) => (props.isOwner ? "0.5rem" : "0")};
`;

export const MessageText = styled.p`
  color: #001113;
  margin: 0;
`;

export const AvatarContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`;

export const UserAvatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

export const MessageTime = styled.span`
  align-self: flex-end;
  color: #545c5c;
`;
