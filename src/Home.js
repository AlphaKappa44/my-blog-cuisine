import {useState} from 'react';

const Home = () => {
    // let name = 'Alexandre';
    const [name, setName] = useState('Boeuf bourguignon')
    const [length, setlength] = useState(`90'`)

    const handleClick = () => {
        // name = 'Marie';
        // console.log(name);
        setName('Ramen');
        setlength(`45'`);
    }

    // const handleClickAgain = (name, e) => {
    //     console.log('handling a Ninja Dynamic click with parameter' + name, e.target);
    // }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}, {length} minutes</p>
            <button onClick={handleClick}>Click Me! </button>
            {/* <button onClick={(e) => handleClickAgain(' Alexandre', e)}>Click again! </button> */}
        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>Homepage</h2>
</div>