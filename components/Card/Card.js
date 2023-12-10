import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Article = styled.article`
  border-radius: 0.8rem;
  padding: 0.5rem;
  background-color: sandybrown;
`;

const Title = styled.h2`
  padding-left: 1rem;
`;

const StyledLink = styled(Link)`
  margin: 0.5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: black;
  text-decoration: none;
`;

export default function Card({ recipe }) {
  return (
    <Article>
      <StyledLink href={`recipes/${recipe._id}`}>
        <Image src={recipe.image} alt={recipe.title} width={160} height={200} />
        <Title>{recipe.title}</Title>
      </StyledLink>
    </Article>
  );
}
