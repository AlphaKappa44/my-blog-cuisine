import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const RecipeDetails = () => {

    // id param '/recipes/:id'
    const {id} = useParams();
    // 
    const { data: recipe, isLoading, error} = useFetch('http://localhost:8000/recipes/' + id);

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
                </article>
            )}
        </div>
     );
}
 
export default RecipeDetails;