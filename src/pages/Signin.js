import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/modules/userSlice';
import Container from "../components/sign/Container";
import FormBox from "../components/sign/FormBox";
import Intro from "../components/sign/Intro";
import Input from "../components/sign/Input";
import Button from "../components/sign/Button";
import Wrap from "../components/sign/Wrap";
import Sub from "../components/sign/Sub";

const Signin = () => {
  const [ID, setID] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  const signin = async () => {
    try {
      const { data } = await axios.post(
        "https://ajou-hackathon--qgrwz.run.goorm.site/auth/signin",
        {
          ID,
          Password,
        }
      );

      if (data.Status) {
        // TODO: 전역상태 nickname 저장
        dispatch(login(data));
        console.log(data);
        alert("로그인에 성공했습니다.");
        navigate("/");
      } else {
        alert("로그인에 실패했습니다.");
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
            <Input
              type="email"
              name="ID"
              value={ID}
              onChange={(e) => setID(e.target.value)}
              placeholder="user1@ajou.ac.kr"
            />
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
          <Button type="button" onClick={signin}>
            로그인
          </Button>
          <Sub>
            <Link to="/signup">회원가입</Link>
          </Sub>
        </Wrap>
      </Container>
    </>
  );
};

export default Signin;
