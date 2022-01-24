import { useState, useEffect } from 'react';
import RecipeList from './RecipeList';

const Home = () => {

    const [recipes, setRecipes] = useState([

        { title: 'Boeuf Bourguignon', body: 'lorem ipsum dolor sit amet, con', time:'90', id: 1 },
        { title: 'Ramen', body: 'lorem ipsum dolor sit amet, con', time:'30', id: 2 },
        { title: 'Soupe à l\'oignon', body: 'lorem ipsum dolor sit amet, con', time:'20', id: 3 }

    ])

    const [title, setTitle] = useState('Boeuf Bourguignon');

    const handleDelete = (id) => {
        const deletedRecipe = recipes.filter(recipe => recipe.id !== id);
        setRecipes(deletedRecipe);
    }

    // useEffect with dependencies, triggers the effect from one state value.
    // it will re-render the page only once with an empty array passed in.
    useEffect(() => {
         console.log('useEffect has played!');
         console.log(title);
    }, [title]);

    return ( 

        <div className="home">

            <RecipeList recipes={recipes} title="Recipe List!" handleDelete={handleDelete}></RecipeList>
            {/* <RecipeList recipes={recipes.filter((recipe) => recipe.title === 'Ramen')} title="Recipe List No2" ></RecipeList> */}

            <button onClick={() => setTitle('Tajine d\'agneau au fenouil')}>Change recipe's title</button>
            <p> {title} </p>
           

        </div>
     );
}
 
export default Home;
