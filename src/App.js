import Navbar from './Navbar';
import Home from './Home';

function App() {

 
  return (
    <div className="App">
      <div className="content">
        <Navbar></Navbar>
        <div className="content">
          <Home></Home>
        </div>

      </div> 
    </div>
  );
}

export default App;

      

  // const title = 'Welcome to my blog cuisine';
  // const likes = 50
  // const link = "https://github.com/AlphaKappa44/my-blog-cuisine/tree/main/public"; 
  // const person = {name: 'John', age:44}


        // {/* <h1>{title}</h1>
        // <p>liked: {likes} times</p>

        // {/* <p>{person}</p> */}

        // {/* <p> {27} </p>
        // <p> {'Hello Ninjas!'} </p>
        // <p> [1, 3, 4, 5] </p>
        // <p> {Math.round(Math.random() *100)} </p>

        // <a href= {link} >Github</a> */}