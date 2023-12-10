import useSWR from "swr";
import Card from "@/components/Card/Card";
import styled from "styled-components";
import Link from "next/link";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-left: 0;
`;

const ListItem = styled.li`
  position: relative;
  width: 100%;
`;

export default function HomePage() {
  const { data: recipes } = useSWR("/api/recipes");

  if (!recipes) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <List>
        {recipes.map((recipe) => {
          return (
            <ListItem key={recipe._id}>
              <Card recipe={recipe} />
            </ListItem>
          );
        })}
      </List>
      <Link href="/create">+</Link>
    </>
  );
}
