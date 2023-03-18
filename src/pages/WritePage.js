import styled from "styled-components";
import WritingButton from "../components/Writing/WritingButton";
import axios from "axios";
import { useState } from "react";

const StyledWritePage = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
`;

const StyledTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 20px 30px 20px 20px;
  text-align: left;
`;
const Align = styled.div`
  display: flex;
  margin: 15px;
`;

const StyledSubTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 0 10px;
`;

const StyledButton = styled.button`
  font-size: 18px;
  border-radius: 10px;
  border: 0;
  outline: 0;
  background-color: #5f95e5;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  position: fixed;
  top: 83%;
  right: 5%;
  z-index: 99;
`;

const StyledInput = styled.input`
  font-size: 15px;
`;

const StyledSelect = styled.select`
  background-color: #ededed;
  width: 80px;
`;

function WritingPage() {
  //js하는 부분
  const [inputs, setInputs] = useState({
    UserID: "id123",
    Category: "TAXI",
    Title: "",
    Time: "",
    Place: "",
    MaximumNumberOfPeople: "",
    Comment: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
      const { data } = await axios.post(
        "https://ajou-hackathon--qgrwz.run.goorm.site/group/new",
        {
          UserID: inputs.UserID,
          Category: inputs.Category,
          UserID: inputs.UserID,
          Title: inputs.Title,
          Time: inputs.Time,
          Place: inputs.Place,
          MaximumNumberOfPeople: inputs.MaximumNumberOfPeople,
          Comment: inputs.Comment,
        }
      );
      //   if (data.Status) {
      //     console.log(data);
      //     alert("모임 생성에 성공했습니다.");
      //   } else {
      //     alert("모임 생성에 실패했습니다.");
      //   }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <StyledWritePage>
      <StyledTitle>신청글 작성</StyledTitle>

      <div className="WriteForm">
        <form onSubmit={handleSubmit}>
          <Align>
            <StyledSubTitle>카테고리</StyledSubTitle>
            <StyledSelect
              className="Category"
              name="Category"
              onChange={handleSelect}
              value={inputs.Category}
            >
              <option value="TAXI">택시</option>
              <option value="EAT">식사</option>
              <option value="LOCKER">사물함</option>
              <option value="ETC">기타</option>
            </StyledSelect>
          </Align>
          <Align>
            <StyledSubTitle>제목</StyledSubTitle>
            <StyledInput
              type="text"
              value={inputs.Title}
              placeholder="입력하기"
              name="Title"
              onChange={handleSelect}
            />
          </Align>
          <Align>
            <StyledSubTitle>일시</StyledSubTitle>
            <StyledInput
              type="text"
              value={inputs.Time}
              placeholder="입력하기"
              name="Time"
              onChange={handleSelect}
            />
          </Align>
          <Align>
            <StyledSubTitle>장소</StyledSubTitle>
            <StyledInput
              type="text"
              value={inputs.Place}
              placeholder="입력하기"
              name="Place"
              onChange={handleSelect}
            />
          </Align>
          <Align>
            <StyledSubTitle>인원수</StyledSubTitle>
            <StyledInput
              type="text"
              value={inputs.MaximumNumberOfPeople}
              placeholder="입력하기"
              name="MaximumNumberOfPeople"
              onChange={handleSelect}
            />
          </Align>
          <Align>
            <StyledSubTitle>코멘트</StyledSubTitle>
            <StyledInput
              type="text"
              value={inputs.Comment}
              placeholder="입력하기"
              name="Comment"
              onChange={handleSelect}
            />
          </Align>

          <StyledButton onClick={handleSubmit}>글 작성하기</StyledButton>
        </form>
      </div>
    </StyledWritePage>
  );
}

export default WritingPage;
