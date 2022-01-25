import RecipeList from "./RecipeList";
import useFetch from "./UseFetch";


const Home = () => {
    const { data, isLoading, error} = useFetch("http://localhost:8000/recipes");


  // const [title, setTitle] = useState('Boeuf Bourguignon');

  // const handleDelete = (id) => {
  //     const deletedRecipe = recipes.filter(recipe => recipe.id !== id);
  //     setRecipes(deletedRecipe);
  // }

  // useEffect with dependencies, triggers the effect from one state value.
  // it will re-render the page only once with an arrayempty array passed in.


  return (
    <div className="home">
      { error && <h1 className="error"> { error } </h1> }
      {isLoading && <div className="loading">Loading...</div>}
      {data && (
        <RecipeList
          recipes={data}
          title="All the recipes:"
          // handleDelete={handleDelete}
        ></RecipeList>
      )}

      {/* <RecipeList recipes={recipes.filter((recipe) => recipe.title === 'Ramen')} title="Recipe List No2" ></RecipeList> 

            <button onClick={() => setTitle('Tajine d\'agneau au fenouil')}>Change recipe's title</button>
            <p> {title} </p> */}
    </div>
  );
};

export default Home;
