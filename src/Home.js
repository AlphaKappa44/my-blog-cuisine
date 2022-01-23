import { useState } from 'react';
import RecipeList from './RecipeList';

const Home = () => {

    const [recipes, setRecipes] = useState([

        { title: 'Boeuf Bourguignon', body: 'lorem ipsum dolor sit amet, con', time:'90', id: 1 },
        { title: 'Ramen', body: 'lorem ipsum dolor sit amet, con', time:'30', id: 2 },
        { title: 'Soupe à l\'oignon', body: 'lorem ipsum dolor sit amet, con', time:'20', id: 3 }

    ])


    return ( 

        <div className="home">

            <RecipeList recipes={recipes} title="Recipe List!" ></RecipeList>

        </div>
     );
}
 
export default Home;
