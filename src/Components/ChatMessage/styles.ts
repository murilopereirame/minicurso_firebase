import styled from "styled-components";

interface IMessageContainerProps {
  isOwner: boolean;
}

export const MessageContainer = styled.div<IMessageContainerProps>`
  display: flex;
  align-items: center;
`;

export const MessageText = styled.p``;

export const AvatarContainer = styled.div``;

export const UserAvatar = styled.img``;

export const MessageTime = styled.span``;
