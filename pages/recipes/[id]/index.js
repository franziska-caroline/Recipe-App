import Link from "next/link";
import { useRouter } from "next/router.js";
import useSWR, { mutate } from "swr";
import Image from "next/image";
import styled from "styled-components";

const Article = styled.article`
  padding: 1rem;
`;

const Header = styled.header`
  text-align: center;
`;

const Ingredients = styled.ul`
  border: 2px dotted;
  list-style: circle;
  padding: 2rem;
`;

const Directions = styled.ul`
  list-style: none;
  text-align: left;
`;

const StyledImage = styled(Image)`
  background-color: orange;
`;

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: recipe, isLoading, error } = useSWR(`/api/recipes/${id}`);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;
  console.log(recipe);

  return (
    <>
      <Article>
        <Header>
          <h2>{recipe.title}</h2>
          <p>
            Time: {recipe.time} Servings:{recipe.servings}
          </p>
          <StyledImage
            src={recipe.image}
            alt={recipe.title}
            width={160}
            height={200}
          />
        </Header>
        <Ingredients>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </Ingredients>
        <Directions>
          {recipe.directions.map((direction, index) => (
            <li key={index}>{direction}</li>
          ))}
        </Directions>
      </Article>
      <Link href={"/"}>Back</Link>
    </>
  );
}
