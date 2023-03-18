import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StyledWritePage = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
`;

const StyledWriteForm = styled.div`
  width: 315px;
  height: 470px;
  border: 1px solid gray;
  border-radius: 8%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
  display: flex;
  justify-content: center;
`;

const StyledTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 20px 30px 20px 20px;
  text-align: left;
`;
const Align = styled.div`
  display: flex;
  height: 35px;
  margin: 10px;
`;

const StyledSubTitle = styled.div`
  width: 90px;
  font-size: 20px;
  font-weight: bold;

  margin-left: 15px;
  padding-top: 3px;
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
  height: 30px;
  width: 185px;
  font-size: 15px;
`;

const StyledCommentInput = styled.textarea`
  margin: 20px;
  height: 100px;
  width: 240px;
  margin: 0 auto;
  font-size: 15px;
  justify-content: center;
  text-align: center;
  display: block;
`;

const StyledSelect = styled.select`
  background-color: #ededed;
  height: 30px;
  width: 80px;
`;

function WritingPage() {
  const navigation = useNavigate();
  //js하는 부분
  const user = useSelector((state) => state.userSlice);
  const [inputs, setInputs] = useState({
    UserID: user.UserID,
    Category: "TAXI",
    Title: "",
    Time: "",
    Place: "",
    MaximumNumberOfPeople: "",
    Gender: "",
    Comment: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputs.Title === "") return alert("제목을 입력하세요.");
    if (inputs.Time === "") return alert("날짜와 시간을 입력하세요.");
    if (inputs.Place === "") return alert("장소를 입력하세요.");
    if (inputs.MaximumNumberOfPeople === "")
      return alert("최대 인원 수를 입력하세요.");
    if (inputs.Comment === "") return alert("코멘트를 입력하세요.");

    let ConvertTime = new Date(inputs.Time).getTime();

    console.log(inputs, ConvertTime);

    try {
      await axios
        .post("https://ajou-hackathon--qgrwz.run.goorm.site/group/new", {
          UserID: inputs.UserID,
          Category: inputs.Category,
          Title: inputs.Title,
          Time: ConvertTime,
          Place: inputs.Place,
          MaximumNumberOfPeople: Number(inputs.MaximumNumberOfPeople),
          Comment: inputs.Comment,
        })
        .then((response) => {
          if (!response.data.Status)
            return alert("모집 글 작성에 실패했습니다.");
          else {
            alert("모집 글 작성이 완료되었습니다.");
            navigation(`/category/${inputs.Category.toLowerCase()}`);
          }
        });
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

      <StyledWriteForm>
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
              <option value="MEAL">식사</option>
              <option value="CAFE">카페</option>
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
              type="datetime-local"
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
              type="number"
              value={inputs.MaximumNumberOfPeople}
              placeholder="입력하기"
              name="MaximumNumberOfPeople"
              onChange={handleSelect}
            />
          </Align>

          <Align>
            <StyledSubTitle>모집성별</StyledSubTitle>
            <StyledSelect
              className="Gender"
              name="Gender"
              onChange={handleSelect}
              value={inputs.Gender}
            >
              <option value="EVERY">성별무관</option>
              <option value="FEMALE">여성</option>
              <option value="MALE">남성</option>
            </StyledSelect>
          </Align>

          <Align>
            <StyledSubTitle>코멘트</StyledSubTitle>
          </Align>
          <StyledCommentInput
            type="text"
            value={inputs.Comment}
            placeholder="입력하기"
            name="Comment"
            onChange={handleSelect}
          />

          <StyledButton onClick={handleSubmit}>글 작성하기</StyledButton>
        </form>
      </StyledWriteForm>
    </StyledWritePage>
  );
}

export default WritingPage;
