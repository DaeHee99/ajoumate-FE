import React, { startTransition, useEffect } from "react";
import styled, { css } from "styled-components";

function ChatCard({ author, body, nickName, createdAt }) {
  const sliceTime = new Date(createdAt);
  const createHour = sliceTime.getHours();
  const createMinute = sliceTime.getMinutes();

  return (
    <StChatContainer author={author}>
      {author === "me" && (
        <span className="create-time">{createHour + ":" + createMinute}</span>
      )}
      <StMainContentWrapper>
        {author === "friend" && <h3>{nickName}</h3>}

        <StChatCard author={author}>{body}</StChatCard>
      </StMainContentWrapper>
      {author === "friend" && (
        <span className="create-time">{createHour + ":" + createMinute}</span>
      )}
    </StChatContainer>
  );
}

const StChatContainer = styled.div`
  position: relative;
  display: flex;
  max-width: calc(100% - 0.8rem);
  padding: 7px;
  margin-top: 7px;
  .create-time {
    align-self: flex-end;
    padding-left: 8px;
    font-size: 12px;
    width: 60px;
  }
  ${({ author }) => {
    switch (author === "me") {
      case true:
        return css`
          align-self: flex-end;
          .create-time {
            padding-left: 18px;
            padding-right: 8px;
          }
        `;
    }
  }}
`;

const StMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 0.9rem;
    font-weight: 400;
    padding-bottom: 5px;
  }
`;

const StChatCard = styled.div`
  text-align: justify;
  display: inline-block;
  font-size: 13px;
  border-radius: 4px;
  padding: 5px;
  ${({ author }) => {
    switch (author === "me") {
      case true:
        return css`
          align-self: flex-end;
          background-color: #5f95e5;
          ::after {
            position: absolute;
            right: -0.1rem;
            content: "▶";
            color: #5f95e5;
            font-size: 18px;
            transform: rotate(30deg);
          }
        `;
      default:
        return css`
          background-color: #fff;
          margin-left: 0.3rem;
          ::before {
            position: absolute;
            left: 0.3rem;
            content: "◀";
            color: #fff;
            font-size: 18px;
            top: 3.5rem;
            transform: rotate(30deg);
          }
        `;
    }
  }}
`;

export default ChatCard;
