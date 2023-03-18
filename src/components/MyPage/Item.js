import styled from "styled-components";

const Align = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.2rem solid #98a8be;
  cursor: pointer;
  &:last-child {
    border: none;
  }
`;

const Category = styled.p`
  width: 10rem;
  font-size: 1.6rem;
  margin: 0 1.6rem 0 0;
`;

const Title = styled.p`
  width: 18rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  margin: 0 1.6rem 0 0;
`;

export default function Item({ category, title, ...rest }) {
  return (
    <Align {...rest}>
      <Category>{category}</Category>
      <Title>{title}</Title>
    </Align>
  );
}
