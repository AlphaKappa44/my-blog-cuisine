const Home = () => {
    
    const handleClick = (e) => {
        console.log('handling a Ninja Dynamic click', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('handling a Ninja Dynamic click with parameter' + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me! </button>
            <button onClick={(e) => handleClickAgain(' Alexandre', e)}>Click again! </button>
        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>Homepage</h2>
</div>