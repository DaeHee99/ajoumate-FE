import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "../components/sign/Container";
import Wrap from "../components/sign/Wrap";
import FormBox from "../components/sign/FormBox";
import Intro from "../components/sign/Intro";
import Input from "../components/sign/Input";
import SmallInput from "../components/sign/SmallInput";
import CheckButton from "../components/sign/CheckButton";
import Align from "../components/sign/Align";
import GenderWrap from "../components/sign/GenderWrap";
import Button from "../components/sign/Button";
import Sub from "../components/sign/Sub";

export default function Signup() {
  const [ID, setID] = useState("");
  const [Password, setPassword] = useState("");
  const [Nickname, setNickname] = useState("");
  const [Gender, setGender] = useState("male");
  const [isValidId, setIsValidId] = useState(false);
  const [isValidNickname, setIsValidNickName] = useState(false);
  const navigate = useNavigate();

  const onChangeID = (e) => {
    setID(e.target.value);
    setIsValidId(false);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
    setIsValidNickName(false);
  };

  const checkDuplicateID = async () => {
    try {
      const { data } = await axios.post(
        "https://ajou-hackathon--qgrwz.run.goorm.site/auth/checkDuplicateID",
        {
          ID,
        }
      );
      console.log(data.Status);
      if (data.Status) {
        alert("사용 가능한 아이디입니다.");
        setIsValidId(true);
      } else {
        alert("중복된 아이디입니다.");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const checkDuplicateName = async () => {
    try {
      const { data } = await axios.post(
        "https://ajou-hackathon--qgrwz.run.goorm.site/auth/checkDuplicateName",
        {
          Nickname,
        }
      );

      if (data.Status) {
        alert("사용 가능한 닉네임입니다.");
        setIsValidNickName(true);
      } else {
        alert("중복된 닉네임입니다.");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const signup = async () => {
    try {
      const { data } = await axios.post(
        "https://ajou-hackathon--qgrwz.run.goorm.site/auth/signup",
        {
          ID,
          Password,
          Nickname,
          Gender,
        }
      );

      if (data.Status) {
        alert("회원가입에 성공했습니다.");
        navigate("/signin");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Container>
        <Wrap>
          <FormBox>
            <Intro>이메일</Intro>
            <Align>
              <SmallInput
                type="email"
                name="ID"
                value={ID}
                onChange={onChangeID}
                placeholder="user1@ajou.ac.kr"
              />
              <CheckButton onClick={checkDuplicateID}>중복 확인</CheckButton>
            </Align>
          </FormBox>
          <FormBox>
            <Intro>비밀번호</Intro>
            <Input
              type="password"
              name="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
          </FormBox>
          <FormBox>
            <Intro>닉네임</Intro>
            <Align>
              <SmallInput
                type="text"
                name="Nickname"
                value={Nickname}
                onChange={onChangeNickname}
                placeholder="닉네임"
              />
              <CheckButton onClick={checkDuplicateName}>중복 확인</CheckButton>
            </Align>
          </FormBox>
          <FormBox>
            <Intro>성별</Intro>
            <GenderWrap>
              <input
                type="radio"
                name="Gender"
                value="male"
                id="male"
                onChange={(e) => setGender(e.target.value)}
                defaultChecked={true}
              />
              <label htmlFor="male">남</label>
              <input
                type="radio"
                name="Gender"
                value="female"
                id="female"
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="female">여</label>
            </GenderWrap>
          </FormBox>
          <Button
            type="button"
            onClick={signup}
            disabled={!isValidId || !isValidNickname}
          >
            회원가입
          </Button>
          <Sub>
            <Link to="/signin">로그인</Link>
          </Sub>
        </Wrap>
      </Container>
    </>
  );
}
