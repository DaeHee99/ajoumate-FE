import styled from "styled-components";
import ChatCard from "./ChatCard";

function ChattingBody() {
  return (
    <StChattingBody>
      <ChatCard
        author="friend"
        body="안녕하세요 저 택시 탈래요"
        nickName="나 아님"
      />
      <ChatCard author="me" body="네! 어디까지 가시나요?" nickName="me" />
    </StChattingBody>
  );
}

const StChattingBody = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export default ChattingBody;
