import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Container from "../components/sign/Container";
import Wrap from "../components/sign/Wrap";
import Intro from "../components/sign/Intro";
import Box from "../components/MyPage/Box";
import Align from "../components/MyPage/Align";
import Name from "../components/MyPage/Name";
import SubInfo from "../components/MyPage/SubInfo";
import Item from "../components/MyPage/Item";
import Logo from "../images/Logo.png";
import Signin from "./Signin";

export default function MyPage() {
  const [UserID, setUserID] = useState("");
  const [Nickname, setNickname] = useState("");
  const [Gender, setGender] = useState("");
  const [ID, setID] = useState("");
  const [JoinList, setJoinList] = useState([]);
  const [ApplyList, setApplyList] = useState([]);
  const user = useSelector((state) => state.userSlice);

  const join = async () => {
    try {
      const { data } = await axios.get(
        `https://ajou-hackathon--qgrwz.run.goorm.site/my/join?UserID=${UserID}`
      );

      setJoinList(data.Groups);
    } catch (e) {
      console.error(e);
    }
  };

  const apply = async () => {
    try {
      const { data } = await axios.get(
        `https://ajou-hackathon--qgrwz.run.goorm.site/my/apply?UserID=${UserID}`
      );
      setApplyList(data.Groups);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setUserID(user.UserID);
    setID(user.ID);
    setNickname(user.Nickname);
    setGender(user.Gender);

    if (UserID) {
      join();
      apply();
    }
  }, []);

  if (!UserID) return <Signin />;
  else
    return (
      <>
        <Container>
          <Wrap>
            <Intro>내 정보</Intro>
            <Box>
              <Align>
                <img
                  src={Logo}
                  alt="Logo"
                  width={85}
                  style={{ borderRadius: "50%", marginRight: 20 }}
                />
                <div>
                  <Name>{Nickname}</Name>
                  <SubInfo>{ID}</SubInfo>
                  <SubInfo>성별: {Gender}</SubInfo>
                </div>
              </Align>
            </Box>
            <Intro>나의 신청 목록</Intro>
            <Box>
              {JoinList.map((item) => (
                <Item
                  key={item.Title}
                  category={item.Category}
                  title={item.Title}
                />
              ))}
            </Box>
            <Intro>내가 모집한 목록</Intro>
            <Box>
              {ApplyList.map((item) => (
                <Item
                  key={item.Title}
                  category={item.Category}
                  title={item.Title}
                />
              ))}
            </Box>
          </Wrap>
        </Container>
      </>
    );
}
