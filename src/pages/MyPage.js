import { useEffect, useState } from "react";
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

export default function MyPage() {
  const [UserID, setUserID] = useState("");
  const [ID, setID] = useState("");
  const [Nickname, setNickname] = useState("");
  const [Gender, setGender] = useState("");
  const [JoinList, setJoinList] = useState([]);
  const [ApplyList, setApplyList] = useState([]);

  const join = async () => {
    try {
      const { data } = await axios.post(
        "https://ajou-hackathon--qgrwz.run.goorm.site/my/join",
        {
          UserID,
        }
      );

      setJoinList(data.Groups);
    } catch (e) {
      console.error(e);
    }
  };

  const apply = async () => {
    try {
      const { data } = await axios.post(
        "https://ajou-hackathon--qgrwz.run.goorm.site/my/apply",
        {
          UserID,
        }
      );

      setApplyList(data.Groups);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // join();
    // apply();
    setJoinList([
      { Category: "택시 메이트", Title: "택시 같이탈분!!!????" },
      { Category: "사물함 메이트", Title: "구합니다!" },
    ]);
    setApplyList([{ Category: "sdf", Title: "24" }]);
  }, []);

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
