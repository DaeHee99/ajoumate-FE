import styled from "styled-components";

function ChatRoomCard({ onClick }) {
  return (
    <StCardBody onClick={onClick}>
      <h3 className="room-category">식사</h3>
      <h3 className="room-title">광교중앙역까지 택시 타실 분</h3>
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
