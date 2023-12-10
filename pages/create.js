import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form/Form";
import useSWR from "swr";

const StyledBackLink = styled(Link)`
  justify-self: flex-start;
`;

export default function CreateRecipePage() {
  const router = useRouter();
  const { mutate } = useSWR("/api/recipes/");

  async function addRecipe(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const recipeData = Object.fromEntries(formData);

    console.log(recipeData);

    const response = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    });

    if (response.ok) {
      router.push("/");
      mutate();
      event.target.reset();
    }
  }

  return (
    <>
      <h2 id="add-recipe">Add Recipe</h2>
      <Link href="/">back</Link>
      <Form onSubmit={addRecipe} formName={"add-recipe"} />
    </>
  );
}