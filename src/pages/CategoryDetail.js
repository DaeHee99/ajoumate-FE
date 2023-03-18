import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import CategoryDetailItem from "../components/Category/CategoryDetailItem";
import WriteButton from "../components/Category/WriteButton";
import axios from "axios";

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

export default function CategoryDetail() {
  const { type } = useParams();
  const [title, setTitle] = useState('');
  const [CategoryDetailData, setCategoryDetailData] = useState([]);

  useEffect(() => {
    if(type === 'meal') setTitle('식사 메이트');
    else if(type === 'taxi') setTitle('택시 메이트');
    else if(type === 'locker') setTitle('사물함 메이트');
    else if(type === 'cafe') setTitle('카페 메이트');
    else if(type === 'etc') setTitle('기타 메이트');

    axios.get(`https://ajou-hackathon--qgrwz.run.goorm.site/group/category?Category=${type.toUpperCase()}`)
    .then(response => {
      setCategoryDetailData(response.data);
    })
  }, [])

  return (
    <StyledCategoryDetailPage>
      <StyledTitle>{title}</StyledTitle>
      {CategoryDetailData.reverse().map((item, index) => (
        <CategoryDetailItem item={item} key={index} />
      ))}
      <WriteButton />
    </StyledCategoryDetailPage>
  );
}
