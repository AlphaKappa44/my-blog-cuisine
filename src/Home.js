import { useState } from 'react';
import RecipeList from './RecipeList';

const Home = () => {

    const [recipes, setRecipes] = useState([

        { title: 'Boeuf Bourguignon', body: 'lorem ipsum dolor sit amet, con', time:'90', id: 1 },
        { title: 'Ramen', body: 'lorem ipsum dolor sit amet, con', time:'30', id: 2 },
        { title: 'Soupe à l\'oignon', body: 'lorem ipsum dolor sit amet, con', time:'20', id: 3 }

    ])

    const handleDelete = (id) => {
        const deletedRecipe = recipes.filter(recipe => recipe.id !== id);
        setRecipes(deletedRecipe);
    }


    return ( 

        <div className="home">

            <RecipeList recipes={recipes} title="Recipe List!" handleDelete={handleDelete}></RecipeList>
            <RecipeList recipes={recipes.filter((recipe) => recipe.title === 'Ramen')} title="Recipe List No2" ></RecipeList>
            <RecipeList recipes={recipes} title="Recipe List No3" ></RecipeList>

        </div>
     );
}
 
export default Home;
