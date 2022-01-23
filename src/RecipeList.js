// const RecipeList = (props) => {
//   const recipes = props.recipes;
//   const title = props.title;
const RecipeList = ({recipes, title}) => {

  return (
    <div>
        <h2> {title} </h2>
      {recipes.map((recipe) => (
        <div className="recipe-preview" key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>will take you {recipe.time} minutes to cook</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
