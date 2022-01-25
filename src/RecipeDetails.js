import { useParams } from "react-router-dom";

const RecipeDetails = () => {

    const {id} = useParams();

    return ( 
        <div className="recipe-details">
            <h2>
                Recipe details:  { id }
            </h2>
        </div>
     );
}
 
export default RecipeDetails;