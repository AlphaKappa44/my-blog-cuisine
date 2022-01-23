import { useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Boeuf Bourguignon', body: 'lorem ipsum dolor sit amet, con', time:'90', id: 1 },
        { title: 'Ramen', body: 'lorem ipsum dolor sit amet, con', time:'30', id: 2 },
        { title: 'Soupe à l\'oignon', body: 'lorem ipsum dolor sit amet, con', time:'20', id: 3 }
    ])


    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>will take you {blog.time} minutes to cook</p>
                </div>
            )
            )}

        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>Homepage</h2>
</div>