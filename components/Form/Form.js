import styled from "styled-components";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

export default function Form({ onSubmit, formName }) {
  return (
    <FormContainer aria-labelledby={formName} onSubmit={onSubmit}>
      <Label htmlFor="recipe-name">Recipe Name</Label>
      <Input id="name" name="name" type="text" />
      <Label htmlFor="image-url">Image Url</Label>
      <Input id="image-url" name="image" type="text" />
      <Label htmlFor="time">Time</Label>
      <Input id="time" name="time" type="text" />
      <Label htmlFor="servings">Servings</Label>
      <Input id="servings" name="servings" type="number" />
      <Label htmlFor="ingredients">Ingredients</Label>
      <Textarea
        name="ingredients"
        id="ingredients"
        cols="30"
        rows="10"
      ></Textarea>
      <Label htmlFor="direction">Direction</Label>
      <Textarea name="direction" id="direction" cols="30" rows="10"></Textarea>
      <button type="submit">Add Recipe</button>
    </FormContainer>
  );
}
