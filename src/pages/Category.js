import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryItem from "../components/Category/CategoryItem";
import WriteButton from "../components/Category/WriteButton";

const StyledCategoryPage = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
`;
const StyledTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 0 10px;
`;

export default function Category() {
  const [CategoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios.get("https://ajou-hackathon--qgrwz.run.goorm.site/group/category/recent")
    .then(response => {
      setCategoryData([
        {
          title: "식사 메이트",
          content: response.data.find((mate) => mate?.Category === "MEAL")?.Title,
        },
        {
          title: "택시 메이트",
          content: response.data.find((mate) => mate?.Category === "TAXI")?.Title,
        },
        {
          title: "사물함 메이트",
          content: response.data.find((mate) => mate?.Category === "LOCKER")?.Title,
        },
        {
          title: "카페 메이트",
          content: response.data.find((mate) => mate?.Category === "CAFE")?.Title,
        },
        {
          title: "기타 메이트",
          content: response.data.find((mate) => mate?.Category === "ETC")?.Title,
        },
      ]);
    })
  }, [])

  return (
    <StyledCategoryPage>
      <StyledTitle>카테고리</StyledTitle>
      {CategoryData.map((item) => (
        <CategoryItem item={item} key={item.title} />
      ))}
      <WriteButton />
    </StyledCategoryPage>
  );
}
