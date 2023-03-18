import styled from "styled-components";

function RoomHeader() {
  return (
    <StHeaderBody>
      <StCategoryBody>택시</StCategoryBody>
      <StRoomInfoWrapper>
        <h2>광교중앙역까지 택시 타실분</h2>
        <span>2인</span>
      </StRoomInfoWrapper>
    </StHeaderBody>
  );
}

const StHeaderBody = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 0.3rem solid black;
  align-items: center;
`;

const StCategoryBody = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border: 0.3rem solid #5f95e5;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
`;
const StRoomInfoWrapper = styled.div`
  display: flex;
  height: 4.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  h2 {
    margin: 0;
  }
  flex: 1;
`;

export default RoomHeader;
