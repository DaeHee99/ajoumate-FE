import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledCategoryItem = styled.div`
  margin: 10px;
  border: 2px solid #98A8BE;
  border-radius: 24px;
  padding: 1.5rem;
  cursor: pointer;
`;
const StyledCategoryItemTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;
const StyledCategoryItemContent = styled.div`
  font-size: 15px;
  color: grey;
`;

export default function CategoryItem(props) {
  const navigation = useNavigate();
  const [type, setType] = useState('');

  useEffect(() => {
    if(props.item.title === '식사 메이트') setType('meal');
    else if(props.item.title === '택시 메이트') setType('taxi');
    else if(props.item.title === '사물함 메이트') setType('locker');
    else if(props.item.title === '카페 메이트') setType('cafe');
    else if(props.item.title === '기타 메이트') setType('etc');
  }, [])

  return (
    <StyledCategoryItem onClick={()=>navigation(`/category/${type}`)}>
      <StyledCategoryItemTitle>{props.item.title}</StyledCategoryItemTitle>
      <StyledCategoryItemContent>{props.item.content}</StyledCategoryItemContent>
    </StyledCategoryItem>
  );
}