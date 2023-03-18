import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import CategoryDetailItem from "../components/Category/CategoryDetailItem";
import WriteButton from "../components/Category/WriteButton";

const StyledCategoryDetailPage = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
`;
const StyledTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 0 10px;
`;

let CategoryDetailData = [
  {
    title: "낙곱새 먹고싶다..",
    content: "낙곱새 같이 드실 분 구합니다~",
    MaximumNumberOfPeople: '1/2인',
    gender: '남녀',
    date: '03/18 19:00',
    place: '학생 식당',
  },
  {
    title: "낙곱새 먹고싶다..",
    content: "낙곱새 같이 드실 분 구합니다~",
    MaximumNumberOfPeople: '0/2인',
    gender: '남자',
    date: '03/18 19:00',
    place: '수원역',
  },
  {
    title: "낙곱새 먹고싶다..",
    content: "낙곱새 같이 드실 분 구합니다~",
    MaximumNumberOfPeople: '1/2인',
    gender: '여자',
    date: '03/18 19:00',
    place: '광교',
  },
  {
    title: "낙곱새 먹고싶다..",
    content: "낙곱새 같이 드실 분 구합니다~",
    MaximumNumberOfPeople: '0/2인',
    gender: '남녀',
    date: '03/18 19:00',
    place: '아주대 정문',
  },
  {
    title: "낙곱새 먹고싶다..",
    content: "낙곱새 같이 드실 분 구합니다~",
    MaximumNumberOfPeople: '1/2인',
    gender: '남녀',
    date: '03/18 19:00',
    place: '아주대 삼거리',
  },
];

export default function CategoryDetail() {
  const { type } = useParams();
  const [title, setTitle] = useState('');

  useEffect(() => {
    if(type === 'meal') setTitle('식사 메이트');
    else if(type === 'taxi') setTitle('택시 메이트');
    else if(type === 'locker') setTitle('사물함 메이트');
    else if(type === 'cafe') setTitle('카페 메이트');
    else if(type === 'etc') setTitle('기타 메이트');

  }, [])

  return (
    <StyledCategoryDetailPage>
      <StyledTitle>{title}</StyledTitle>
      {CategoryDetailData.map((item, index) => (
        <CategoryDetailItem item={item} key={item.title + index} />
      ))}
      <WriteButton />
    </StyledCategoryDetailPage>
  );
}
