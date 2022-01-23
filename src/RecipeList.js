// const RecipeList = (props) => {
//   const recipes = props.recipes;
//   const title = props.title;
const RecipeList = ({recipes, title, handleDelete}) => {

  return (
    <div>
        <h2> {title} </h2>
      {recipes.map((recipe) => (
        <div className="recipe-preview" key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>will take you {recipe.time} minutes to cook</p>
          <button onClick={() => handleDelete(recipe.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
