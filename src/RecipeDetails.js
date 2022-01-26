// useParams for the url id
// useHistory to redirect after deleting a recipe
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const RecipeDetails = () => {

    // id param '/recipes/:id'
    const {id} = useParams();
    // datas from the UseFetch Hook
    const { data: recipe, isLoading, error} = useFetch('http://localhost:8000/recipes/' + id);

    // redirect
    const history = useHistory();

    // handling the delete button
    const handleClick = () => {
        fetch('http://localhost:8000/recipes/' + recipe.id, {
            method: 'DELETE'
        }).then(()=> {
            history.push('/');
        })
    }

    return ( 
        <div className="recipe-details">

            { isLoading && <div> Loading ... </div> }
            { error && <div> { error } </div> }
            { recipe && (
                <article>
                    <h2>
                        {recipe.title} recipe
                    </h2>
                    <h4> Time needed: { recipe.time } </h4>
                    <p>
                        Follow these steps: { recipe.body }
                    </p>
                    <button onClick={handleClick}>Delete this recipe</button>
                </article>
            )}
        </div>
     );
}
 
export default RecipeDetails;