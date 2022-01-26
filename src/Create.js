import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [time, setTime] = useState('90');

    const handleSubmit = (e) => {
        // prevent the refresh when submiting button is pressed
        e.preventDefault();
        const recipe = { title, time, body};
        
        console.log(recipe);
        console.log(JSON.stringify(recipe));
    }

    return ( 
        <div className="create">
            <h2>
                Add a new Recipe.
            </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Recipe title:
                </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)} 
                />
                <label>
                    Recipe description:
                </label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)} 
                >

                </textarea>
                <label>
                    Select the time needed to cook it (minutes):
                </label>
                <select 
                    value={time}
                    onChange={(e)=> setTime(e.target.value)}
                >
                    
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                    <option value="60">60</option>
                    <option value="90">90</option>
                    <option value="120">120</option>
                    <option value="150">150</option>
                    <option value="180">180</option>
                    <option value="240">240</option>
                </select>
                <button>
                    Add recipe
                </button>
            </form>
        </div>
     );
}
 
export default Create;