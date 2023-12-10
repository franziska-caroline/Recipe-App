import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  servings: { type: String, required: false },
  time: { type: String, required: false },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  directions: { type: String, required: true },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
