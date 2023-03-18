import styled from "styled-components";

function ChatRoomCard({ onClick, chatAlert, to, userName }) {
  return (
    <StCardBody onClick={() => onClick(to)}>
      <h3 className="room-title">
        {userName}&{to}
      </h3>
      {chatAlert && <div>문자왔어!!!</div>}
    </StCardBody>
  );
}

const StCardBody = styled.div`
  width: 35rem;
  height: 10rem;
  border: 0.2rem solid #5f95e5;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  .room-category {
    font-size: 1.5rem;
  }
  .room-title {
    font-size: 2rem;
    margin: 0;
  }
`;

export default ChatRoomCard;
