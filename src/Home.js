import { useState, useEffect } from 'react';
import RecipeList from './RecipeList';

const Home = () => {

    const [recipes, setRecipes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // const [title, setTitle] = useState('Boeuf Bourguignon');

    // const handleDelete = (id) => {
    //     const deletedRecipe = recipes.filter(recipe => recipe.id !== id);
    //     setRecipes(deletedRecipe);
    // }

    // useEffect with dependencies, triggers the effect from one state value.
    // it will re-render the page only once with an arrayempty array passed in.
    useEffect(() => {
        
        // fetch the data as soon as the component renders
        fetch( 'http://localhost:8000/recipes')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setRecipes(data);
            setIsLoading(false);
        })
   }, []);

    return ( 

        <div className="home">

            {/* Evaluate the left side of  "&&" ("Recipes"), then if this is "false", right of "&&" is totally ignored.
            Here it is ignored as it is null and null is evaluated as "false"  */}
            {isLoading && <div className="loading">Loading...</div> }
            { recipes && 
            <RecipeList 
                recipes={recipes} 
                title="Recipe List!" 
                // handleDelete={handleDelete}
            >
            </RecipeList>}

            {/* <RecipeList recipes={recipes.filter((recipe) => recipe.title === 'Ramen')} title="Recipe List No2" ></RecipeList> 

            <button onClick={() => setTitle('Tajine d\'agneau au fenouil')}>Change recipe's title</button>
            <p> {title} </p> */}
            

        </div>
     );
}
 
export default Home;
