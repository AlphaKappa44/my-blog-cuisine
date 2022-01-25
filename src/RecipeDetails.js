import { useParams } from "react-router-dom";

const RecipeDetails = () => {

    // id param '/recipes/:id'
    const {id} = useParams();
    // 

    return ( 
        <div className="recipe-details">
            <h2>
                Recipe details:  { id }
            </h2>
        </div>
     );
}
 
export default RecipeDetails;