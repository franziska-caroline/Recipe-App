import mongoose, { isObjectIdOrHexString } from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  servings: { type: Number, required: false },
  time: { type: String, required: false },
  image: { type: String, required: true },
  ingredients: { type: Array, required: false },
  directions: { type: Array, required: false },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
